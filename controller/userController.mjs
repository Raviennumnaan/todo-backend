import User from "../modals/userModal.mjs";
import { hashPassword, isPasswordMatches } from "../utils/helpers.mjs";

export const createUser = async (req, res) => {
  try {
    console.log(req.body);
    if (req.body.password) req.body.password = hashPassword(req.body.password);
    const newUser = await User.create(req.body);

    const { password, ...userData } = newUser._doc;
    console.log(userData);

    res.status(201).json({ status: "success", data: userData });
  } catch (error) {
    res.status(200).json({ status: "fail", message: error });
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(200)
        .json({ status: "fail", message: "User not found" });

    if (!isPasswordMatches(req.body.password, user.password))
      return res
        .status(200)
        .json({ status: "fail", message: "password does not match" });

    const { password, ...data } = user._doc;

    res.status(200).json({ status: "succcess", data: data });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error });
  }
};
