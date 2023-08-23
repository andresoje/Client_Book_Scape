import React, { useState } from "react";
import styles from "./Filters.module.css";
import { useFilterContext } from "@/context/FilterContext";
import Link from "next/link";

interface Author {
  name: string;
}

interface Tags {
  name: string;
}

const Filtros: React.FC = () => {
  const { filters, setFilters, uniqueLanguages, uniqueTags, applyFilters } =
    useFilterContext();

  const [showAllTags, setShowAllTags] = useState(false);

  const toggleShowAllTags = () => {
    setShowAllTags(!showAllTags);
  };

  const toggleShowLessTags = () => {
    setShowAllTags(false);
  };

  return (
    <div className={styles.container}>
      {/* Filtros por precio */}
      <label style={{ fontWeight: "bold" }}>Precio</label>
      <br />0{" "}
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
      <br />
      {/* Filtros por idioma */}
      <label style={{ fontWeight: "bold" }}>Idioma</label>
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
      <br />
      <br />
      {/* Filtros por tags */}
      <label  style={{ fontWeight: "bold" }}>Tags</label>
      {showAllTags ? (
        uniqueTags.map((tag) => (
          <div key={tag}>
            <label >
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
            <br />
          </div>
        ))
      ) : (
        <>
          {uniqueTags.slice(0, 5).sort().map((tag) => (
            <div key={tag}>
              <label>
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
              <br />
            </div>
          ))}
          <button onClick={toggleShowAllTags}>Ver más</button>
          <br />
        </>
      )}
      {showAllTags && (
        <>
          <button onClick={toggleShowLessTags}>Ver menos</button>
          <br />
        </>
      )}
      {/* Botón de aplicar filtros */}
      <br />
      <Link href="/filtrar">
        <button className={styles.button} onClick={applyFilters}>
          Aplicar Filtros
        </button>
      </Link>
    </div>
  );
};

export default Filtros;
