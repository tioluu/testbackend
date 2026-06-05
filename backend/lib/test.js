// test.js
import { PrismaClient } from "@prisma/client";

console.log("Before");

const prisma = new PrismaClient();

console.log("After");

await prisma.$connect();

console.log("Connected");

await prisma.$disconnect();