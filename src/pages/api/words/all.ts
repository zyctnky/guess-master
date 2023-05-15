import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Word } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { WordLearned } from "@/interfaces/interfaces";

type Data = {
  success: boolean;
  message: string;
  data: WordLearned[];
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
      orderBy: [
        {
          word: "asc",
        },
      ],
      include: {
        category: true,
        difficultyLevel: true,
      },
    });

    const newWordList = wordList.map((word) => {
      if (word.learnedUsers.indexOf(session?.user?.email as string) >= 0) {
        return {
          word: word,
          learned: true,
        };
      } else {
        return {
          word: { ...word, learnedUsers: [], description: "", word: "" },
          learned: false,
        };
      }
    });

    res.status(200).json({
      success: true,
      message: "",
      data: newWordList,
    });
  } catch (error) {
    console.log(error);
  }
}
