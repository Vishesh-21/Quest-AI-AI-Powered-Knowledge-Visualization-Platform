import { Request, Response } from "express";
import { UserModel } from "../models/user.model";

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    //@ts-ignore
    const userId = req.userId;

    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
    }

    const user = await UserModel.findById(userId);

    if (!user) {
      res.status(404).json({ message: "User not found!" });
    }

    res.status(200).json({ message: "User found successfully!", user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error!", error });
  }
};
