import { Request, Response, Router } from "express";
import { db } from "../config/firebaseConfig";
import { handleError } from "../entities/ApiError";
import { verifyToken } from "../middleware/authMiddleware";
import {
    CreateUser,
    CreateUserSchema,
    UpdateUser,
    UpdateUserSchema,
    User,
} from "../repository/userCollection";

const userRouter = Router();

/* Get all users */
userRouter.get("/fetch-user-data", verifyToken, async (req: Request, res: Response) => {
    try {
        const usersSnapshot = await db.collection("Users").get();
        const users: any[] = [];
        usersSnapshot.forEach((doc) => {
            users.push({ id: doc.id, ...doc.data() });
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
        const user: CreateUser = CreateUserSchema.parse(req.body);
        const docRef = await db.collection("Users").add(user);
        const createdUser: User = {
            id: docRef.id,
            ...user,
        };
        return res.status(201).json(createdUser);
    } catch (error) {
        const { message, status } = handleError(error, "Unable to create user.");
        res.status(status).send(message);
    }
});

/* Update existing user */
userRouter.post("/update-user-data", verifyToken, async (req: Request, res: Response) => {
    try {
        const user: UpdateUser = UpdateUserSchema.parse(req.body);
        const userDoc = db.collection("Users").doc(user.id);
        const docSnapshot = await userDoc.get();
        if (!docSnapshot.exists) {
            return res.status(404).send("User not found");
        }
        await userDoc.update(user);
        res.status(200).json(user);
    } catch (error) {
        const { message, status } = handleError(error, "Unable to update user.");
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
