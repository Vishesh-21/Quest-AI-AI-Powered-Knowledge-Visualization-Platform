import { UserModel } from "../models/user.model";
import { getToken } from "../utils/token";
import { Request, Response } from "express";

export const googleAuth = async (req: Request, res: Response) => {
  try {
    const { name, email, imageURL } = req.body;
    let user = await UserModel.findOne({ email });

    if (!user) {
      user = await UserModel.create({ name, email, imageURL });
    }

    const token = getToken(user._id.toString());
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ message: "Login successfully!", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Google authentication failed !", error });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    await res.clearCookie("token");
    res.status(200).json({ message: "Logout successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Logout failed !", error });
  }
};
