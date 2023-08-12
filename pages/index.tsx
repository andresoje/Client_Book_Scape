import React from 'react'
import CardsBooks from '@/components/CardsBooks/CardsBooks'
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css"

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
    <div className={styles.description}>
      {/* //columna izquierda */}
    <div className={styles.descriptionIzq}> 
    <h3>Consulta por categorias</h3>
    <p>Poseia</p>
    <p>Poseia</p>
    <p>Poseia</p>
    <p>Poseia</p>
    
    </div>
    {/* //columna derecha */}
    <div className={styles.descriptionDer}>
      <h3 className={styles.h1}>Bienvenidos</h3>
      <CardsBooks books={books}/>
    </div>
  </div>
)}

export default Home
