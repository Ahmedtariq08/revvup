// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import userRouter from "../routes/userRoutes";

dotenv.config();

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use("/users", userRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("Ebuddy test backend running...");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
