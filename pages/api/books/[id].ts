import { NextApiRequest, NextApiResponse } from "next";
import { books } from "../../../db/data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id } = req.query;
    const bookId = parseInt(id as string, 10);

    if (!isNaN(bookId)) {
      const book = books.find((book) => book.id === bookId);

      if (book) {
        res.status(200).json(book);
      } else {
        res.status(404).json({ message: "Book not found" });
      }
    } else {
      res.status(400).json({ message: "Invalid book ID" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
