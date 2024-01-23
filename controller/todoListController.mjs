import TodoList from "../modals/todoListModal.mjs";
import User from "../modals/userModal.mjs";

export const createTodo = async (req, res) => {
  try {
    console.log(req.body);
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res
        .status(404)
        .json({ status: "fail", message: "User not found" });

    const todo = await TodoList.create({ title, body, user: existingUser._id });
    existingUser.todoList.push(todo);
    await existingUser.save();

    res.status(201).json({ status: "success", data: todo });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res
        .status(404)
        .json({ status: "fail", message: "User not found" });

    const updatedTodo = await TodoList.findByIdAndUpdate(
      req.params.id,
      { title, body },
      { new: true }
    );

    res.status(200).json({ status: "success", data: updatedTodo });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOneAndUpdate(
      { email },
      { $pull: { todoList: req.params.id } }
    );

    if (!existingUser)
      return res
        .status(404)
        .json({ status: "fail", message: "User not found" });

    await TodoList.findByIdAndDelete(req.params.id);

    res.status(200).json({ status: "success", data: null });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await TodoList.find({ user: req.params.id }).sort({
      createdAt: -1,
    });

    res.status(200).json({ status: "success", data: todos });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error });
  }
};
