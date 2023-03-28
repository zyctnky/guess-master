import path from "path";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { DifficultyLevel } from "@/interfaces/interfaces";

type Data = {
  data: Object;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(
    jsonDirectory + "/difficulty-levels.json",
    "utf8"
  );
  const difficultLevels: DifficultyLevel[] = JSON.parse(fileContents);

  res.status(200).json({
    data: difficultLevels,
  });
}
