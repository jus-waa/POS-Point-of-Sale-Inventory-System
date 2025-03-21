import express from "express";
import {
    signupRoute,
    loginRoute,
    logoutRoute
} from "../controllers/authController.js"

const router = express.Router();

router.get("/signup", signupRoute);
router.get("/login", loginRoute);
router.get("/logout", logoutRoute);


export default router;