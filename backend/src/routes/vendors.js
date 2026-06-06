import express from "express";
import prisma from "../../lib/prisma.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const vendor = await prisma.vendor.findMany();

    res.json(vendor);
});

export default router;