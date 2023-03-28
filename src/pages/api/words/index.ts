import path from "path";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { WordList } from "@/interfaces/interfaces";

type Data = {
  data: Object;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(jsonDirectory + "/words.json", "utf8");
  const words: WordList[] = JSON.parse(fileContents);

  const { category, difficultyLevel } = req.query;

  const result = words.filter(
    (r: WordList) => r.level === difficultyLevel && r.category === category
  )[0];

  res.status(200).json({
    data: result,
  });
}
