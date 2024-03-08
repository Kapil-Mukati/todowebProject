import express from "express";
import { getLoginPage, getMyProfile, logout, register } from "../controller/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/login", getLoginPage);
router.post("/register", register);
router.get("/logout",  isAuthenticated, logout);
router.get("/me", isAuthenticated, getMyProfile);
export default router;