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
      date: "2022-12-05T12:00:00.201Z",
      firstTeamCountryCode: "DE",
      secondTeamCountryCode: "BR",
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-12-06T12:00:00.201Z",
      firstTeamCountryCode: "JP",
      secondTeamCountryCode: "MX",
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-12-10T12:00:00.201Z",
      firstTeamCountryCode: "NL",
      secondTeamCountryCode: "MX",
    },
  });
}

main();
