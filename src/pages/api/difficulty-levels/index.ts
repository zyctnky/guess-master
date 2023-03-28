import path from "path";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { DifficultyLevel } from "@/interfaces/interfaces";
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
      jsonDirectory + "/difficulty-levels.json",
      "utf8"
    );
    const difficultLevels: DifficultyLevel[] = JSON.parse(fileContents);

    res.status(200).json({
      data: difficultLevels,
    });
  } else {
    res.status(401).json({ data: "Unauthorized" });
  }
}
