import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: [true, "Username already exists"],
  },

  username: { type: String, require: true, unique: true },

  password: { type: String, require: true, unique: true },

  todoList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TodoList",
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
