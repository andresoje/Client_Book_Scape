import { NextApiRequest, NextApiResponse } from "next";
import { books } from "../../../db/data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    res.status(200).json(books);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
