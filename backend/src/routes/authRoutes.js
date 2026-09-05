const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(400).json({
            message: "User with this email already exists"
        });
    }

    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log("Generated OTP:", otp);

    const otpExpires = new Date(Date.now() + 5 * 60 * 1000);
    console.log("OTP Expires:", otpExpires);

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        otp,
        otpExpires
    });

    res.json({
        message: "User signed up successfully",
        user
    });
});

router.post("/verify-otp", async (req, res) => {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    console.log("OTP from request:", otp);
    console.log("OTP from database:", user?.otp);

    if (!user) {
        return res.status(400).json({
            message: "User not found"
        });
    }

    if (String(user.otp) !== String(otp)) {
        return res.status(400).json({
            message: "Invalid OTP"
        });
    }

    if (new Date() > user.otpExpires) {
        return res.status(400).json({
            message: "OTP has expired"
        });
    }

    user.isVerified = true;
    user.otp = null;
    user.otpExpires = null;

    
    await user.save();

    console.log(email);
    console.log(otp);

    res.json({
        message: "OTP verification successful"
    });
});

module.exports = router;