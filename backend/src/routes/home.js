import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        name: "VendorHub API",
        version: "1.0.0",
        status: "OK"
    })
});

export default router;