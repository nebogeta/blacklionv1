import { PrismaClient } from "@prisma/client";

const globalWithPrisma = global;
globalWithPrisma.cachedPrisma = globalWithPrisma.cachedPrisma || new PrismaClient();

const prisma =
  process.env.NODE_ENV === "production"
    ? new PrismaClient()
    : globalWithPrisma.cachedPrisma;

export const db = prisma;







