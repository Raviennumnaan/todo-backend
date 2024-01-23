import mongoose from "mongoose";

const todoListSchema = new mongoose.Schema({
  title: { type: String, required: true },

  body: { type: String, required: true },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  createdAt: { type: Date, default: Date.now() },
});

const TodoList = mongoose.model("TodoList", todoListSchema);

export default TodoList;
