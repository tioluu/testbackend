import { PrismaClient } from "@Prisma/client"; 
import { PrismaPg } from "@prisma/adapter-pg"; 

const adapter = new PrismaPg({
  connectionString: process.env.POSTGRES_URL,
});

const prisma =
  new PrismaClient({
    adapter, 
  }); 

export default prisma; 
