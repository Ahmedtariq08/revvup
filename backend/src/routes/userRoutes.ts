import { Request, Response, Router } from "express";
import { auth, admin } from "../config/firebaseConfig";
import { handleError } from "../entities/ApiError";
import {
    BaseUser,
    BaseUserSchema,
    SignInSchema,
    SignInUser,
    SignUpSchema,
    SignUpUser,
    UpdateUser,
    UpdateUserSchema,
} from "../repository/userCollection";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
// import {
//     LoggedInUserSchema,
//     UserSchema,
//     SignInSchema,
//     SignInUser,
//     SignUpSchema,
//     SignUpUser,
// } from "../validation/auth.schema";
import { convertToDisplayName, splitDisplayName } from "../utils";

const userRouter = Router();

userRouter.post("/sign-up", async (req: Request, res: Response) => {
    try {
        const user: SignUpUser = SignUpSchema.parse(req.body);
        const userCredentials = await admin.auth().createUser(user);
        const userResponse: BaseUser = BaseUserSchema.parse(userCredentials);
        return res.status(200).json(userResponse);
    } catch (error) {
        const { status, message } = handleError(error, "Unable to sign up");
        return res.status(status).send(message);
    }
});

userRouter.post("/sign-in", async (req: Request, res: Response) => {
    try {
        const user: SignInUser = SignInSchema.parse(req.body);
        const response = await signInWithEmailAndPassword(
            auth,
            user.email,
            user.password,
        );
        //TODO -
        return res.status(200).json(response);
    } catch (error) {
        const { status, message } = handleError(error, "Unable to log in the user.");
        console.log(message);
        return res.status(status).send(message);
    }
});

userRouter.get("/fetch-user-data", async (req: Request, res: Response) => {
    try {
        const users = await admin.auth().listUsers();
        const responseUsers = users.users.map((user) => BaseUserSchema.parse(user));
        return res.status(200).json(responseUsers);
    } catch (error) {
        const { status, message } = handleError(error, "Unable fetch all users.");
        return res.status(status).send(message);
    }
});

userRouter.post("/update-user-data", async (req: Request, res: Response) => {
    try {
        const user: UpdateUser = UpdateUserSchema.parse(req.body);
        const { uid, ...rest } = user;
        const updatedUser = await admin.auth().updateUser(user.uid, rest);
        const userResponse: BaseUser = BaseUserSchema.parse(updatedUser);
        return res.status(200).json(userResponse);
    } catch (error) {
        const { status, message } = handleError(error, "Unable to update user");
        return res.status(status).send(message);
    }
});

export default userRouter;
