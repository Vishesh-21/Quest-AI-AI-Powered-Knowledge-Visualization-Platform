import { Router, type Router as ExpressRouter } from "express";
import { googleAuth, logout } from "../controllers/auth.controller";

const router: ExpressRouter = Router();
/**
 * @route POST /api/auth/google
 * @desc Authenticate with Google
 * @access Public
 */

router.post("/google", googleAuth);
router.get("/logout", logout);

export default router;
