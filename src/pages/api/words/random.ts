import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { RandomWord, Word } from "@/interfaces/interfaces";

type Data = {
  data: RandomWord;
};

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { category, difficultyLevel } = req.query;

  const wordList: Word[] = await prisma.word.findMany({
    where: { categoryId: category?.toString(), difficultyLevelId: difficultyLevel?.toString() },
  });

  let word: Word = {
    id: "",
    categoryId: "",
    description: "",
    difficultyLevelId: "",
    word: "",
  };

  if (wordList) {
    var randomIndex = Math.floor(Math.random() * wordList.length);
    word = wordList[randomIndex];
  }

  const wordCategory = await prisma.category.findUnique({ where: { id: category?.toString() } });
  const wordDifficultyLevel = await prisma.difficultyLevel.findUnique({ where: { id: difficultyLevel?.toString() } });

  const randomWord: RandomWord = {
    id: word.id,
    categoryId: word.categoryId,
    description: word.description,
    difficultyLevelId: word.difficultyLevelId,
    word: word.word,
    categoryName: wordCategory?.name,
    difficultyLevelName: wordDifficultyLevel?.name
  };

  res.status(200).json({
    data: randomWord,
  });
}
