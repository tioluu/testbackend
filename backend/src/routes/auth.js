import express from "express";
import prisma from "../../lib/prisma.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/register", async (req, res) => {
    const { fullName, email, passwordHash } = req.body;

    const password = await bcrypt.hash(passwordHash, 10);

    const emailExists = await prisma.user.findUnique({
        where: {email: email}, 
    });

    if (emailExists) {
        return res.
        status(400)
        .json({ error: "Email is already taken" });
    }

    const user = await prisma.user.create({
        data: {
            fullName,
            email,
            passwordHash: password,
        },
    });

    res.status(201).json({
        message: "User created",
});
});

router.post("/login", async (req, res) => {
    const { email, passwordHash } = req.body;
})
export default router;
