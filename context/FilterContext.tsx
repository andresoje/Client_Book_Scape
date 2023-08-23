import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
// Definición del tipo de objeto "Book"
type Author = {
  name: string;
  // Agrega otras propiedades si es necesario
};

type Tags = {
  name: string;
  // Agrega otras propiedades si es necesario
};

type Book = {
  id_book: number;
  title: string;
  Authors: Author[];
  published_date: number;
  price: number;
  description: string;
  rating_ave: number;
  image: string;
  page_count: number;
  Tags: Tags[];
  Language: string;
};

// Definición del tipo de objeto para el contexto "FilterContextType"
type FilterContextType = {
  books: Book[];
};

type FilterProviderProps = {
  children: React.ReactNode;
};

// Creación del contexto "FilterContext" y establecimiento del valor inicial como "undefined"
const FilterContext = createContext<FilterContextType | undefined>(undefined);

// Hook personalizado "useFilterContext" para consumir el contexto
export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext debe usarse dentro de un FilterProvider");
  }
  return context;
};

// Componente proveedor "FilterProvider" del contexto
export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  // Estado local "books" que almacena la lista de libros
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/filter/");
      const booksWithRandomRating = response.data.map((book: Book) => ({
        ...book,
        rating_ave:
          book.rating_ave !== null ? book.rating_ave : (Math.random() * 3 + 4).toFixed(1),
          page_count:
          book.page_count !== null ? book.page_count : (Math.random() * 200).toFixed(0),
      }));
      setBooks(booksWithRandomRating);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Creación del objeto "contextValue" con la información del contexto
  const contextValue: FilterContextType = {
    books,
  };

  // Retorna el componente "FilterContext.Provider" que envuelve a los componentes hijos
  return (
    <FilterContext.Provider value={contextValue}>{children}</FilterContext.Provider>
  );
};
