// src/index.js
import cors from "cors";
import express, { Express, Request, Response } from "express";
import { CLIENT_URL, PORT } from "../config/config";
import userRouter from "../routes/userRoutes";

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
    res.status(200).send("Application backend up and running...");
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at ${PORT}`);
});

export { app };
