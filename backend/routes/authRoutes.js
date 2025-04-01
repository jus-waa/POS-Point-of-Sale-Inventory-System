import express from "express";
import {
    signupRoute,
    loginRoute,
    logoutRoute,
    verifyEmail,
} from "../controllers/authController.js"

const router = express.Router();

router.post("/signup", signupRoute);
router.post("/login", loginRoute);
router.post("/logout", logoutRoute);
router.post("/verify-email", verifyEmail);

export default router;