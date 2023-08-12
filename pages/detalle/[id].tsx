import React from "react";
import { useRouter } from "next/router";
import { useBookContext } from "@/context/BookContext";

const DetallesBook = () => {
  const { books } = useBookContext();

  const {
    query: { id },
  } = useRouter();

  const detallebook = books.find((book) => book.id === Number(id));
  

  return (
    <div>
      <h2>Producto: {id}</h2>
      {detallebook ? (
        <div>
          <p>Title: {detallebook.title}</p>
          <p>Authors: {detallebook.authors}</p>
          {/* Agrega otras propiedades aquí */}
        </div>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
};

export default DetallesBook;
