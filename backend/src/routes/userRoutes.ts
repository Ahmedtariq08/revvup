import { Request, Response, Router } from "express";
import { db } from "../config/firebaseConfig";
import { handleError } from "../entities/ApiError";
import { verifyToken } from "../middleware/authMiddleware";
import { User, UserSchema } from "../validation/user.validation";

const userRouter = Router();
const UserCollection = "Users";

/* Get all users */
userRouter.get("/fetch-user-data", verifyToken, async (req: Request, res: Response) => {
    try {
        const usersSnapshot = await db.collection(UserCollection).get();
        const users: User[] = [];
        usersSnapshot.forEach((doc) => {
            users.push({ uid: doc.id, ...doc.data() } as User);
        });
        res.status(200).json(users);
    } catch (error) {
        const { message, status } = handleError(error, "Unable to fetch users.");
        res.status(status).send(message);
    }
});

/* Create a new user */
userRouter.post("/create-user", verifyToken, async (req: Request, res: Response) => {
    try {
        const user: User = UserSchema.parse(req.body);
        const currentUid = res.locals.uid;
        const { uid, ...data } = user;
        console.log(currentUid);
        if (currentUid !== uid) {
            return res
                .status(400)
                .send("Uid does not match. You can only create your own user.");
        }
        await db.collection(UserCollection).doc(uid).set(data);
        return res.status(201).json(user);
    } catch (error) {
        const { status, message } = handleError(error, "Unable to create user.");
        res.status(status).send(message);
    }
});

/* Update existing user */
userRouter.post("/update-user-data", verifyToken, async (req: Request, res: Response) => {
    try {
        const user: User = UserSchema.parse(req.body);
        const currentUid = res.locals.uid;
        const { uid, ...data } = user;
        console.log(currentUid);
        if (currentUid !== uid) {
            return res
                .status(400)
                .send("Uid does not match. You can only update your own user data.");
        }
        await db.collection(UserCollection).doc(uid).set(data);
        return res.status(200).json(user);
    } catch (error) {
        const { status, message } = handleError(error, "Unable to update user.");
        res.status(status).send(message);
    }
});

/* Delete an existing user */
userRouter.delete(
    "/delete-user/:id",
    verifyToken,
    async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const userDoc = db.collection("Users").doc(id);
            const docSnapshot = await userDoc.get();

            if (!docSnapshot.exists) {
                return res.status(404).send("User not found");
            }

            await userDoc.delete();
            res.status(200).send("User deleted successfully");
        } catch (error) {
            const { message, status } = handleError(error, "Unable to delete user.");
            res.status(status).send(message);
        }
    },
);

export default userRouter;
