import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    //@ts-ignore
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error!", error });
  }
};
