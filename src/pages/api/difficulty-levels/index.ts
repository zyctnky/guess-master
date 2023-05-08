import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
  data: Object;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const difficultLevels = await prisma.difficultyLevel.findMany();

  res.status(200).json({
    data: difficultLevels,
  });
}
