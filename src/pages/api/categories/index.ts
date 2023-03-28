import path from "path";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { Category } from "@/interfaces/interfaces";

type Data = {
  data: Object;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(
    jsonDirectory + "/categories.json",
    "utf8"
  );
  const categories: Category[] = JSON.parse(fileContents);

  res.status(200).json({
    data: categories,
  });
}
