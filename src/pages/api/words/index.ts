import path from "path";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { WordList } from "@/interfaces/interfaces";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

type Data = {
  data: Object;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    const jsonDirectory = path.join(process.cwd(), "json");
    const fileContents = await fs.readFile(
      jsonDirectory + "/words.json",
      "utf8"
    );
    const words: WordList[] = JSON.parse(fileContents);

    const { category, difficultyLevel } = req.query;

    const result = words.filter(
      (r: WordList) => r.level === difficultyLevel && r.category === category
    )[0];

    res.status(200).json({
      data: result,
    });
  } else {
    res.status(401).json({ data: "Unauthorized" });
  }
}
