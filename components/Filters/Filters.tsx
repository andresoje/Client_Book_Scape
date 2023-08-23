import React, { useState } from "react";
import styles from "./Filters.module.css";
import CardBook from "../CardBook/CardBook";
import { useFilterContext } from "@/context/FilterContext";
import axios from "axios";

interface Author {
  name: string;
}

interface Tags {
  name: string;
}

interface Book {
  id_book: number;
  title: string;
  Authors: Author[];
  price: number;
  Tags: Tags[];
  image: string;
  rating_ave: number;
}

interface FilterState {
  price: number;
  language: string;
  category: string;
  selectedTags: string[];
}

const Filtros: React.FC = () => {
  const { books, uniqueLanguages, uniqueTags } = useFilterContext();

  const [filters, setFilters] = useState<FilterState>({
    price: 0,
    language: "",
    category: "",
    selectedTags: [],
  });

  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);

  const applyFilters = async () => {
    try {
      const response = await axios.get("http://localhost:3001/books/filter", {
        params: {
          tags: filters.selectedTags.join(","),
          language: filters.language,
          price: filters.price,
        },
      });
      setFilteredBooks(response.data);
    } catch (error) {
      console.error("Error applying filters:", error);
    }
  };

  return (
    <div className={styles.container}>
      {/* Filtros por precio */}
      <label>Precio</label>
      <br />
      0{" "}
      <input
        value={filters.price}
        type="range"
        id="filters.price"
        name="filters.price"
        min="0"
        max="50"
        onChange={(e) =>
          setFilters({ ...filters, price: Number(e.target.value) })
        }
      />
      <span>{filters.price}</span>
      <br />

      {/* Filtros por idioma */}
      <select
        className={styles.input}
        value={filters.language}
        id="filters.language"
        name="filters.language"
        onChange={(e) => setFilters({ ...filters, language: e.target.value })}
      >
        <option value="">Todos los idiomas</option>
        {uniqueLanguages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>

        <br/>
      {/* Filtros por tags */}
      {uniqueTags.map((tag) => (
        <label key={tag}>
          <input
            type="checkbox"
            value={tag}
            checked={filters.selectedTags.includes(tag)}
            onChange={(e) => {
              if (e.target.checked) {
                setFilters({
                  ...filters,
                  selectedTags: [...filters.selectedTags, tag],
                });
              } else {
                setFilters({
                  ...filters,
                  selectedTags: filters.selectedTags.filter(
                    (selectedTag) => selectedTag !== tag
                  ),
                });
              }
            }}
          />
          {tag}
        </label>
      ))}

      {/* Botón de aplicar filtros */}
      <button className={styles.button} onClick={applyFilters}>
        Aplicar Filtros
      </button>

      {/* Lista de libros filtrados */}
      <div className={styles.container}>
        {filteredBooks.map((book, index) => (
          <CardBook
            key={index}
            id_book={book.id_book}
            title={book.title}
            Authors={book.Authors}
            price={book.price}
            Tags={book.Tags}
            image={book.image}
            rating_ave={book.rating_ave}
          />
        ))}
      </div>
    </div>
  );
};

export default Filtros;
