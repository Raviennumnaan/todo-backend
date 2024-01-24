import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import userRouter from "./routes/userRoutes.mjs";
import todoRouter from "./routes/todoRoutes.mjs";

dotenv.config({ path: "./.env" });

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/todo", todoRouter);

app.get("/home", (req, res) => {
  res.status(200).json({ status: "success", data: null });
});

export default app;
