import { NextFunction, Request, Response } from "express";
import { admin } from "../config/firebaseConfig";

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
