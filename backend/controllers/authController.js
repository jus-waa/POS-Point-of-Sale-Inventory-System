import db from "../db/index.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
export const signupRoute = async (req, res) => {
    try {
        const { name, email, phone_number, password } = req.body;

        // Debugging
        console.log("Received password:", password);
        // check if all fields have values
        if (!name || !email || !phone_number || !password) {
            return res.status(400).json({
                status: "failed",
                message: "All fields are required.",
            });
        }
        // password and otp
        const hashedPassword = await bcryptjs.hash(password, 10);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
        const verificationTokenExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

        // email query
        const selectEmail = "SELECT email FROM users WHERE email = $1";
        const valueEmail = [email];

        // check if the user already exists
        const userExists = await db.query(selectEmail, valueEmail);
        if (userExists.rows.length > 0) {
            return res.status(400).json({
                status: "failed",
                message: "User Already Exists.",
            });
        }

        // insert user into DB
        const insertUser =
            "INSERT INTO users (name, email, phone_number, password, verificationToken, verificationTokenExpiresAt) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
        const valueUser = [name, email, phone_number, hashedPassword, verificationToken, verificationTokenExpiresAt];

        const results = await db.query(insertUser, valueUser);
        const user = results.rows[0];

        // generate JWT token
        generateTokenAndSetCookie(res, user.id);

        res.status(201).json({
            status: "success",
            message: "User created successfully. OTP has been sent.",
            user: {
                ...user,
                password: undefined, // Hide password in response
            },
        });
    } catch (err) {
        console.error("Signup error:", err);
        return res.status(500).json({
            status: "failed",
            message: err.message,
        });
    }
};

export const loginRoute = async (req, res) => {
    res.send("Login Route");
};

export const logoutRoute = async (req, res) => {
    res.send("Logout Route");
};