import React, { useState, useEffect } from 'react';
import { useFilterContext } from '@/context/FilterContext';
import styles from "./Filters.module.css"
import CardBook from '../CardBook/CardBook';
interface Book {
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
  Tags: string[];
  language: string;
  stock: number;
}

interface FilterState {
  price: number;
  language: string;
  category: string;
}

const Filtros: React.FC = () => {
 // const { books } = useFilterContext();
  const [filters, setFilters] = useState<FilterState>({
    price: 0,
    language: '',
    category: '',
  });

  const [uniqueLanguages, setUniqueLanguages] = useState<string[]>([]);
  const [uniqueTags, setUniqueTags] = useState<string[]>([]);
  const [filteredbooks, setFilteredbooks] = useState<Book[]>([]);

  // useEffect(() => {
  //   // Obtener las opciones únicas para los filtros
  //   const languages = Array.from(new Set(books.map(Book => Book.language.toLowerCase())));
  //   const Tags = Array.from(new Set(books.flatMap(Book => Book.Tags)));

  //   setUniqueLanguages(languages);
  //   setUniqueTags(Tags);
  // }, []);

  // useEffect(() => {
  //   // Filtrar Bookos basados en los filtros seleccionados
  //   const filtered = books.filter(Book => {
  //     const priceFilter = filters.price === 0 || (filters.price === 999 ? Book.price > 50 : Book.price <= filters.price);
  //     const languageFilter = filters.language === '' || Book.language.toLowerCase() === filters.language.toLowerCase();
  //     const categoryFilter = filters.category === '' || Book.Tags.includes(filters.category);
      
  //     return priceFilter && languageFilter && categoryFilter;
  //   });

  //    setFilteredbooks(filtered);
  // }, [filters]);

  return (
    <div className= {styles.filtros} >
     
      {/* Filtros por precio */}
      <select
        value={filters.price} id='filters.price' name='filters.price'
        onChange={(e) => setFilters({ ...filters, price: Number(e.target.value) })}
      >
        <option value={0}>Cualquier Precio</option>
        <option value={10}>$1 - $10</option>
        <option value={20}>$11 - $20</option>
        <option value={50}>$21 - $30</option>
        <option value={50}>$31 - $40</option>
        <option value={50}>$41 - $50</option>
        <option value={999}>Más de $51</option>
      </select>

      {/* Filtros por idioma */}
      <select
        value={filters.language} id='filters.language' name='filters.language'
        onChange={(e) => setFilters({ ...filters, language: e.target.value })}
      >
        <option value="">Todos los idiomas</option>
        {uniqueLanguages.map(language => (
          <option key={language} value={language}>{language}</option>
        ))}
      </select>

      {/* Filtros por género */}
      <select
        value={filters.category} id='filters.category' name='filters.category'
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
      >
        <option value="">Todos los géneros</option>
        {uniqueTags.map(Tags => (
          <option key={Tags} value={Tags} >{Tags}</option>
        ))}
      </select>

      {/* Botón de aplicar filtros */}
      <button onClick={() => setFilteredbooks(filteredbooks)}>Aplicar Filtros</button>
      
      {/* Lista de Bookos filtrados */}
      <div className={styles.container} >
        {filteredbooks.map(Book => (
          <CardBook
            key={Book.id}
            id={Book.id}
            title={Book.title}
            authors={Book.authors}
            price={Book.price}
            Tags={Book.Tags}
            image={Book.image}
            ratingCount={Book.ratingCount}
          />
        ))}
      </div>

    </div>
  );
}

export default Filtros;