import express from "express";
import {
    signupRoute,
    loginRoute,
    logoutRoute
} from "../controllers/authController.js"

const router = express.Router();

router.post("/signup", signupRoute);
router.post("/login", loginRoute);
router.post("/logout", logoutRoute);

export default router;