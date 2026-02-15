import jwt from "jsonwebtoken";

export const getToken = async (userId: string) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
      expiresIn: "5d",
    });
    return token;
  } catch (error) {
    console.log(error);
  }
};
