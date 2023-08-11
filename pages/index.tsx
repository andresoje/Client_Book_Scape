import React from 'react'
import CardsBooks from '@/components/CardsBooks/CardsBooks'
import { useEffect, useState } from "react";
import axios from "axios";
import { books } from '../db/data';

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

function Home() {
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
    <div>
      <h1>Home</h1>
      <CardsBooks books={books}/>
    </div>
  )
}

export default Home
