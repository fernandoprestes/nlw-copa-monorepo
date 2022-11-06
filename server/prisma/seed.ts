import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Ane Maria",
      email: "ane.maria@gmail.com",
      avatarUrl: "https://i.pravatar.cc/150?img=41",
    },
  });

  const pool = await prisma.pool.create({
    data: {
      title: "Bolão Seed",
      code: "B0LS33",
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id,
        },
      },
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-20T13:00:00.201Z",
      firstTeamCountryCode: "QA",
      secondTeamCountryCode: "EC",
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-21T13:00:00.201Z",
      firstTeamCountryCode: "SN",
      secondTeamCountryCode: "NL",
    },
  });
}

main();
