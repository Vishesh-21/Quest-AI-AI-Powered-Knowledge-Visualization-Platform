import jwt from "jsonwebtoken";

export const getToken = (userId: string) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
      expiresIn: "5d",
    });
    return token;
  } catch (error) {
    return { error };
  }
};
