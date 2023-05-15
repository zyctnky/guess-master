import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Word } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const word = req.body as Word;
  const session = await getServerSession(req, res, authOptions);

  const checkWord: Word = (await prisma.word.findUnique({
    where: { id: word.id as string },
  })) as Word;

  if (!checkWord) {
    return res.status(200).json({ success: false, message: "Word not found!" });
  }

  if (checkWord.learnedUsers.indexOf(session?.user?.email as string) >= 0) {
    return res.status(200).json({ success: false, message: "Word already saved as learned." });
  }

  await prisma.word.update({
    data: {
      learnedUsers: {
        set: [...checkWord.learnedUsers, session?.user?.email] as string[],
      },
    },
    where: { id: word.id as string },
  });

  res.status(200).json({ success: true, message: `${word.word} saved as learned.` });
}
