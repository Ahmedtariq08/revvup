// src/index.js
import express, { Express, Request, Response } from "express";
import userRouter from "../routes/userRoutes";
import cors from "cors";
import { CLIENT_URL, PORT } from "../config/config";

const app: Express = express();
app.use(express.json());

// Configure CORS
app.use(
    cors({
        origin: CLIENT_URL!,
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    }),
);

app.use("/users", userRouter);
app.get("/", (req: Request, res: Response) => {
    res.send("Ebuddy test backend running...");
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
