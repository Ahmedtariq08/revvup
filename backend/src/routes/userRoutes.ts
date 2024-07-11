import { Request, Response, Router } from "express";
import { admin } from "../config/firebaseConfig";
import { handleError } from "../entities/ApiError";
import {
    CreateUser,
    CreateUserSchema,
    User,
    UserResponse,
    UserResponseSchema,
    UserSchema,
} from "../repository/userCollection";

const userRouter = Router();

userRouter.post("/sign-up", async (req: Request, res: Response) => {
    try {
        const user: CreateUser = CreateUserSchema.parse(req.body);
        const userCredentials = await admin.auth().createUser(user);
        const userResponse: UserResponse = UserResponseSchema.parse(userCredentials);
        return res.status(200).json(userResponse);
    } catch (error) {
        const { status, message } = handleError(error, "Unable to sign up");
        return res.status(status).send(message);
    }
});

userRouter.get("/fetch-user-data", async (req: Request, res: Response) => {
    try {
        const users = await admin.auth().listUsers();
        const responseUsers = users.users.map((user) => UserResponseSchema.parse(user));
        return res.status(200).json(responseUsers);
    } catch (error) {
        const { status, message } = handleError(error, "Unable fetch all users.");
        return res.status(status).send(message);
    }
});

userRouter.post("/update-user-data", async (req: Request, res: Response) => {
    try {
        const user: User = UserSchema.parse(req.body);
        const { uid, ...rest } = user;
        const updatedUser = await admin.auth().updateUser(user.uid, rest);
        const userResponse: UserResponse = UserResponseSchema.parse(updatedUser);
        return res.status(200).json(userResponse);
    } catch (error) {
        const { status, message } = handleError(error, "Unable to update user");
        return res.status(status).send(message);
    }
});

export default userRouter;
