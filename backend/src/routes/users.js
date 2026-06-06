import express from "express";
import prisma from "../../lib/prisma.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const user = await prisma.user.findMany();

    res.json(user);
});

router.post("/create", async (req, res) => {
    const { fullName, email, passwordHash } = req.body;

    const user = await prisma.user.create({
        data: {
            fullName,
            email,
            passwordHash,
        },
    });

    res.json(user);
});

export default router;