import { Router } from "express";
import { getCurrentUser } from "../controllers/user.controller";
import { isAuth } from "../middleware/isAuth";

const userRouter = Router();

// routes for user
userRouter.get("/", (req, res) => {
  res.json({ message: "Hello from user route!" });
});
userRouter.get("/current-user", isAuth, getCurrentUser);

export default userRouter;
