const User = require("../models/user-model");

const registerUser = async (req, res, next) => {
  const { fullName, email, password } = req.body;
  // checking for empty or missing  fields
  if (!fullName) {
    return res.json({
      successful: false,
      message: "fullName is required",
    });
  }
  if (!email) {
    return res.json({
      successful: false,
      message: "email is required",
    });
  }
  if (!password) {
    return res.json({
      successful: false,
      message: "password is required",
    });
  }

  try {
    // check if already registered
    const existedUser = await User.findOne({ email });
    if (existedUser) {
      return res.status(400).json({
        message: "User already exist. Try to login instead.",
      });
    }
    const user = new User({
      fullName,
      email,
      password,
    });
    await user.save();
    res.status(201).json({ message: "User created successfully.", user });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email) {
    return res.json({
      successful: false,
      message: "email is required",
    });
  }
  if (!password) {
    return res.json({
      successful: false,
      message: "password is required",
    });
  }

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message:
          "Could not found user.Check your Email or register an account.",
      });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Your password is incorrect.",
      });
    }

    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
