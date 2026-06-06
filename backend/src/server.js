import "dotenv/config";
import express from "express";
import prisma from "../lib/prisma.js";
import listVendor from "./routes/vendors.js";
import homePage from "./routes/home.js";
import listUser from "./routes/users.js";

const app = express();

app.use(express.json());
app.use("/vendor", listVendor);
app.use("/", homePage);
app.use("/user", listUser )
app.use("/create", listUser)

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});