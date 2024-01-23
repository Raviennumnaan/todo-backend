import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import userRouter from "./routes/userRoutes.mjs";
import todoRouter from "./routes/todoRoutes.mjs";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: "./.env" });

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/todo", todoRouter);

export default app;
