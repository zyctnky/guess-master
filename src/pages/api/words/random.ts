import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Word } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

type Data = {
  success: boolean;
  message: string;
  data: Word;
};

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const session = await getServerSession(req, res, authOptions);
    const { category, difficultyLevel } = req.query;

    const wordList: Word[] = await prisma.word.findMany({
      where: {
        categoryId: category?.toString(),
        difficultyLevelId: difficultyLevel?.toString(),
      },
      include: {
        category: true,
        difficultyLevel: true,
      },
    });

    const filteredWordList: Word[] = wordList.filter(
      (word) => word.learnedUsers.indexOf(session?.user?.email!) < 0
    );

    let word: Word = {
      id: "",
      categoryId: "",
      description: "",
      difficultyLevelId: "",
      word: "",
      learnedUsers: [],
    };

    if (filteredWordList.length <= 0)
      return res.status(200).json({
        success: false,
        message:
          "You have learned all the words in this category and difficulty level.",
        data: word,
      });

    if (filteredWordList) {
      var randomIndex = Math.floor(Math.random() * filteredWordList.length);
      word = filteredWordList[randomIndex];
    }

    res.status(200).json({
      success: true,
      message: "",
      data: word,
    });
  } catch (error) {
    console.log(error);
  }
}
