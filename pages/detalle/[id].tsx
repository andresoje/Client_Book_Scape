import React from "react";
import { useRouter } from "next/router";
import { useBookContext } from "@/context/BookContext";
import styles from "./detail.module.css"

const DetallesBook = () => {
  const { books } = useBookContext();

  const {
    query: { id },
  } = useRouter();

  const detallebook = books.find((book) => book.id === Number(id));
  

  return (
    <div className={styles.container}>
       {detallebook ? (
        
        <div className={styles.izquierda}>
          <div>
           <img src={detallebook.image} alt={detallebook.title} />
           </div>
          <p>Title: {detallebook.title}</p>
          <p>Authors: {detallebook.authors}</p>
          <p>Price: ${detallebook.price}</p>
          <p>Genero: {detallebook.genre}</p>
          <p>Descripcion: {detallebook.description}</p>
          <p>Descripcion: {detallebook.ratingCount}</p>

          {/* Agrega otras propiedades aquí */}
        </div>
        
        


      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
};

export default DetallesBook;
