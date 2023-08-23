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
  return (
    <div className= {styles.container} >
     <div >
   {/* Filtros por precio */}
  <label>Precio</label><br />
  0 <input  value={filters.price} type="range" id="filters.price" name="filters.price" min="0" max="50" 
  onChange={(e) => setFilters({ ...filters, price: Number(e.target.value) })} />50
</div> <br />

    

      {/* Filtros por idioma */}
      <select className= {styles.input}
        value={filters.language} id='filters.language' name='filters.language'
        onChange={(e) => setFilters({ ...filters, language: e.target.value })}
      >
        <option value="">Todos los idiomas</option>
        {uniqueLanguages.map(language => (
          <option key={language} value={language}>{language}</option>
        ))}
      </select>

      {/* Filtros por género */}
      <select className= {styles.input}
        value={filters.category} id='filters.category' name='filters.category'
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
      >
        <option value="">Todos los géneros</option>
        {uniqueTags.map(Tags => (
          <option key={Tags} value={Tags} >{Tags}</option>
        ))}
      </select>

      {/* Botón de aplicar filtros */}
      <button className= {styles.button} onClick={() => setFilteredbooks(filteredbooks)}>Aplicar Filtros</button>
      
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