import express from "express";
import dotenv from "dotenv";

import userRouter from "./routes/userRoutes.mjs";
import todoRouter from "./routes/todoRoutes.mjs";

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());

// Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/todo", todoRouter);

app.use("/", (req, res) => {
  res.status(200).json({ status: "success", data: null });
});

export default app;
