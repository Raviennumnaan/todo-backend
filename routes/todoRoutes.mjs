import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controller/todoListController.mjs";

const router = express.Router();

router.route("/").post(createTodo);
router.route("/:id").patch(updateTodo).delete(deleteTodo).get(getTodos);

export default router;
