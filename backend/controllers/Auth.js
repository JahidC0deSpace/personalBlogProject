import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Register = async (req, res) => {
  try {
    const { FullName, email, password } = req.body;

    const existingUser = await UserModel.find({ email });
    
    if (!existingUser) {
      res
        .status(400)
        .json(((success = false), (message = "User already exists")));
    }
    const imagePath = req.file.filename;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
        FullName,
        email,
        password: hashedPassword,
        profile:imagePath
    })

    await newUser.save();
    res
      .status(200)
      .json({
        success: true,
        message: "User registered successfully",
        user: newUser,
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Internal Server Error" });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide email and password" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "No User Found Please Register" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect Password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure:false,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ success: true, message: "Login Successful", user:user });
  } catch (error) {
    
  }
}

const Logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Logout Successful" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Internal Server Error" });
    
  }
}

export { Register, Login, Logout };
