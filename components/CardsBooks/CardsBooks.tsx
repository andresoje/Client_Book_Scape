import { useEffect, useState } from "react";
import axios from "axios";
import CardBook from "../CardBook/CardBook";
import styles from "./CardsBooks.module.css";

type Book = {
  id: number;
  title: string;
  authors: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  flag: string;
  currency: string;
  ratingCount: number;
  genre: string[];
  language: string;
  stock: number;
};

const CardsBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("/api/books"); // Asegúrate de que la ruta sea correcta
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div className={styles.container}>
      {books.map(({ title, authors, price, genre, image, id }, index) => (
        <CardBook
          key={id}
          id={id}
          title={title}
          authors={authors}
          price={price}
          genre={genre}
          image={image}
        />
      ))}
    </div>
  );
};

export default CardsBooks;
