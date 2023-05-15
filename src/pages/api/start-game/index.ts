import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { StartGameResponse } from "@/interfaces/interfaces";

const prisma = new PrismaClient();

type Data = {
  data: StartGameResponse;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const categories = await prisma.category.findMany();
  const difficultLevels = await prisma.difficultyLevel.findMany();

  const startGame: StartGameResponse = {
    categories: categories,
    difficultyLevels: difficultLevels,
  };

  res.status(200).json({
    data: startGame,
  });
}
