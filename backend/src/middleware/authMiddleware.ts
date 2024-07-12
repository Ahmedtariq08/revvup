import { NextFunction, Request, Response } from "express";
import { admin } from "../config/firebaseConfig";

// Middleware to verify Firebase ID token
export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const idToken = req.headers.authorization?.split("Bearer ")[1];
    if (!idToken) {
        return res.status(400).send("Auth token not provided.");
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        res.locals.uid = decodedToken.uid;
        next();
    } catch (error) {
        return res.status(403).send("Invalid token.");
    }
};
