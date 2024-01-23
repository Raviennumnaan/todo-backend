import express from "express";
import { createUser, login } from "../controller/userController.mjs";

const router = express.Router();

router.post("/register", createUser);

router.post("/signin", login);

export default router;
