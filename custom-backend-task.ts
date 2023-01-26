import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function users() {
  try {
    const users = await prisma.user.findMany({
      include: { profile: true },
    });
    return users;
  } catch (error) {
    console.trace(error);
    return ["PRISMA ERROR"];
  }
}
