import { Request, Response, NextFunction } from "express";
import { admin } from "../config/firebaseConfig";
import { UserSchema } from "../repository/userCollection";

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const idToken = req.headers.authorization?.split("Bearer ")[1];

    if (!idToken) {
        return res.status(401).send("Unauthorized");
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        (req as any).user = decodedToken;
        next();
    } catch (error) {
        return res.status(401).send("Invalid authorization token");
    }
};

// export const parseUserData = async (req: Request, res: Response, next: NextFunction) => {
//     const validation = UserSchema.safeParse(req.body);
//     if (!validation.success) {
//         const firstError = validation.error.errors[0];
//         return res.status(400).json(firstError.message);
//     }
//     next();
// };
