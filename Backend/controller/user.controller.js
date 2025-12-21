import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

/* ================= SIGNUP ================= */
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Check existing user
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash password
    const hashPassword = await bcryptjs.hash(password, 10);

    // Create new user
    const createdUser = new User({
      fullname,
      email,
      password: hashPassword,
    });

    await createdUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("Signup Error:", error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

/* ================= LOGIN ================= */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Compare password
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Success
    res.status(200).json({
      message: "Login successfully",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Login Error:", error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
