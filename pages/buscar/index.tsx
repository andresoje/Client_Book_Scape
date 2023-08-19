import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useBookContext } from "@/context/BookContext";
import CardsBooks from "@/components/CardsBooks/CardsBooks";
import styles from "../../styles/Home.module.css";
import autor from "../../public/images/autor.png";
import Pagination from "@/components/Pagination/Pagination";

interface Book {
  id: number;
  title: string;
  authors: string[];
  published_date: number;
  price: number;
  description: string;
  rating_ave: number;
  image: string;
  page_count: number;
  tags: string[];
  language: string;
}

const normalizeString = (str: string) => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

const Buscar: React.FC = () => {
  const router = useRouter();
  const { query } = router;
  const q = typeof query.q === "string" ? normalizeString(query.q) : "";

  // Todos los libros
  const { books } = useBookContext();
  const itemsPerPage = 10; // Cambia esto al número de elementos por página
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [resultado, guardarResultado] = useState<Book[]>([]);

  useEffect(() => {
    const filteredBooks = books.filter((book: Book) => {
      const normalizedTitle = normalizeString(book.title);
      const authorsMatch = book.authors.some((author) =>
        normalizeString(author).includes(q)
      );
      const tagsMatch = book.tags.some((tag) =>
        normalizeString(tag).includes(q)
      );
      return normalizedTitle.includes(q) || authorsMatch || tagsMatch;
    });
    guardarResultado(filteredBooks);
  }, [q, books]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBooks = resultado.slice(startIndex, endIndex);

  return (
    <div className={styles.description}>
      <div className={styles.descriptionIzq}>
        <h3>Consulta por categorias</h3>
        <p>Historia</p>
        <p>Poesia</p>
        <p>Ficción</p>
        <p>Novelas</p>
      </div>
      <div className={styles.descriptionDer}>
        <div>
          {currentBooks.length === 0 ? (
            <div>
              <h3>Sin resultados para {q} en BookScape.</h3>
              <p>Revisa la ortografía o usa términos más generales.</p>
            </div>
          ) : (
            <>
              <CardsBooks books={currentBooks} />
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(resultado.length / itemsPerPage)}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
        <div>
          <h3 className={styles.h1}>Libro Destacado</h3>
        </div>
        <div className={styles.autor}>
          <img src={autor.src} alt="autor" />
        </div>
      </div>
    </div>
  );
};

export default Buscar;
