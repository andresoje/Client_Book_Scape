// import React, { useState, useEffect } from 'react';
// import {books} from '../../db/data'; // Importa la matriz de Bookos desde el archivo data.ts

// interface Book {
//   id: number;
//   title: string;
//   authors: string;
//   price: number;
//   description: string;
//   rating: number;
//   image: string;
//   flag: string;
//   currency: string;
//   ratingCount: number;
//   genre: string[];
//   language: string;
//   stock: number;
// }

// interface FilterState {
//   price: number;
//   language: string;
//   category: string;
// }

// const Filtros: React.FC = () => {
//   const [filters, setFilters] = useState<FilterState>({
//     price: 0,
//     language: '',
//     category: '',
//   });

//   const [uniqueLanguages, setUniqueLanguages] = useState<string[]>([]);
//   const [uniqueGenres, setUniqueGenres] = useState<string[]>([]);
//   const [filteredbooks, setFilteredbooks] = useState<Book[]>([]);

//   useEffect(() => {
//     // Obtener las opciones únicas para los filtros
//     const languages = Array.from(new Set(books.map(Book => Book.language.toLowerCase())));
//     const genres = Array.from(new Set(books.flatMap(Book => Book.genre)));

//     setUniqueLanguages(languages);
//     setUniqueGenres(genres);
//   }, []);

//   useEffect(() => {
//     // Filtrar Bookos basados en los filtros seleccionados
//     const filtered = books.filter(Book => {
//       const priceFilter = filters.price === 0 || (filters.price === 999 ? Book.price > 50 : Book.price <= filters.price);
//       const languageFilter = filters.language === '' || Book.language.toLowerCase() === filters.language.toLowerCase();
//       const categoryFilter = filters.category === '' || Book.genre.includes(filters.category);
      
//       return priceFilter && languageFilter && categoryFilter;
//     });

//      setFilteredbooks(filtered);
//   }, [filters]);

//   return (
//     <div >
     
//       {/* Filtros por precio */}
//       <select
//         value={filters.price} id='filters.price' name='filters.price'
//         onChange={(e) => setFilters({ ...filters, price: Number(e.target.value) })}
//       >
//         <option value={0}>Cualquier Precio</option>
//         <option value={10}>$1 - $10</option>
//         <option value={20}>$11 - $20</option>
//         <option value={50}>$21 - $30</option>
//         <option value={50}>$31 - $40</option>
//         <option value={50}>$41 - $50</option>
//         <option value={999}>Más de $51</option>
//       </select>

//       {/* Filtros por idioma */}
//       <select
//         value={filters.language} id='filters.language' name='filters.language'
//         onChange={(e) => setFilters({ ...filters, language: e.target.value })}
//       >
//         <option value="">Todos los idiomas</option>
//         {uniqueLanguages.map(language => (
//           <option key={language} value={language}>{language}</option>
//         ))}
//       </select>

//       {/* Filtros por género */}
//       <select
//         value={filters.category} id='filters.category' name='filters.category'
//         onChange={(e) => setFilters({ ...filters, category: e.target.value })}
//       >
//         <option value="">Todos los géneros</option>
//         {uniqueGenres.map(genre => (
//           <option key={genre} value={genre} >{genre}</option>
//         ))}
//       </select>

//       {/* Botón de aplicar filtros */}
//       <button onClick={() => setFilteredbooks(filteredbooks)}>Aplicar Filtros</button>
      
//       {/* Lista de Bookos filtrados */}
//       {/* <div className={styles.container} >
//         {filteredbooks.map(Book => (
//           <CardBook
//             key={Book.id}
//             id={Book.id}
//             title={Book.title}
//             authors={Book.authors}
//             price={Book.price}
//             genre={Book.genre}
//             image={Book.image}
//             ratingCount={Book.ratingCount}
//           />
//         ))}
//       </div> */}

//     </div>
//   );
// }

// export default Filtros;

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importa la biblioteca axios
//import CardBook from '../CardBook/CardBook'; // Asegúrate de importar el componente CardBook correctamente

interface Book {
  // Define la interfaz del libro como la tienes en el componente original
}

interface FilterState {
  price: number;
  language: string;
  category: string;
}

const Filtros: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    price: 0,
    language: '',
    category: '',
  });

  const [uniqueLanguages, setUniqueLanguages] = useState<string[]>([]);
  const [uniqueGenres, setUniqueGenres] = useState<string[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  useEffect(() => {
    // Hacer una llamada a la API para obtener los datos de libros
    axios.get('/books') // Ajusta la ruta de la API según tu configuración
      .then(response => {
        const booksFromAPI: Book[] = response.data;
        
        // Actualizar estados con los datos de la API
        const languages = Array.from(new Set(booksFromAPI.map(book => books.language.toLowerCase())));
        const genres = Array.from(new Set(booksFromAPI.flatMap(book => books.genre)));

        setUniqueLanguages(languages);
        setUniqueGenres(genres);
        setFilteredBooks(booksFromAPI);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  useEffect(() => {
    // Filtrar libros basados en los filtros seleccionados
    const filtered = filteredBooks.filter(book => {
      const priceFilter = filters.price === 0 || (filters.price === 999 ? book.price > 50 : book.price <= filters.price);
      const languageFilter = filters.language === '' || book.language.toLowerCase() === filters.language.toLowerCase();
      const categoryFilter = filters.category === '' || book.genre.includes(filters.category);
      
      return priceFilter && languageFilter && categoryFilter;
    });

    setFilteredBooks(filtered);
  }, [filters]);

  return (
    <div>
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
       {uniqueGenres.map(genre => (
          <option key={genre} value={genre} >{genre}</option>
        ))}
      </select>

      {/* Botón de aplicar filtros */}
      <button onClick={() => setFilteredBooks(filteredBooks)}>Aplicar Filtros</button>
      
      {/* Lista de libros filtrados */}
      {/* <div>
        {filteredBooks.map(book => (
          <CardBook
            key={book.id}
            id={book.id}
            title={book.title}
            authors={book.authors}
            price={book.price}
            genre={book.genre}
            image={book.image}
            ratingCount={book.ratingCount}
          />
        ))}
      </div> */}
    </div>
  );
}

export default Filtros;

