import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

interface FilterState {
  price: number;
  language: string;
  category: string;
  selectedTags: string[];
}

type Author = {
  name: string;
};

type Tags = {
  name: string;
};

type Language = {
  language: string;
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


type FilterContextType = {
  uniqueLanguages: string[];
  uniqueTags: string[];
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  applyFilters: () => Promise<void>;
  booksFilters: Book[];
};

type FilterProviderProps = {
  children: React.ReactNode;
};


const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext debe usarse dentro de un FilterProvider");
  }
  return context;
};

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {

  const [booksFilters, setBooksFilters] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/books/");
      const booksWithRandomRating = response.data.map((book: Book) => ({
        ...book,
        rating_ave:
          book.rating_ave !== null ? book.rating_ave : (Math.random() * 3 + 4).toFixed(1),
          page_count:
          book.page_count !== null ? book.page_count : (Math.random() * 200).toFixed(0),
      }));
      setBooksFilters(booksWithRandomRating);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const [filters, setFilters] = useState<FilterState>({
    price: 50,
    language: "",
    category: "",
    selectedTags: [],
  });

  const [uniqueLanguages, setUniqueLanguages] = useState<string[]>([]);
  const [uniqueTags, setUniqueTags] = useState<string[]>([]);

  useEffect(() => {
    fetchLanguages();
    fetchTags();
  }, []);


  const fetchLanguages = async () => {
    try {
      const response = await axios.get("http://localhost:3001/books/language");
      const languages = response.data.map((language: Language) => language.language);
      setUniqueLanguages(languages);
    } catch (error) {
      console.error("Error fetching languages:", error);
    }
  };

  const fetchTags = async () => {
    try {
      const response = await axios.get("http://localhost:3001/books/tags");
      const tags = response.data.map((tag: Tags) => tag.name);
      setUniqueTags(tags);
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  };

  
  // const [filteredBooks, setFilteredBooks] = useState(books);

  const applyFilters = async () => {
    try {
      const response = await axios.get("http://localhost:3001/books/filter", {
        params: {
          tags: filters.selectedTags.join(","),
          language: filters.language,
          price: filters.price,
        },
      });
      const booksWithRandomRating = response.data.map((book: Book) => ({
        ...book,
        rating_ave:
          book.rating_ave !== null ? book.rating_ave : (Math.random() * 3 + 4).toFixed(1),
          page_count:
          book.page_count !== null ? book.page_count : (Math.random() * 200).toFixed(0),
      }));
      setBooksFilters(booksWithRandomRating);
    } catch (error) {
      console.error("Error applying filters:", error);
    }
  };

  const contextValue: FilterContextType = {
    uniqueLanguages,
    uniqueTags,
    filters,
    setFilters,
    applyFilters,
    booksFilters,
  };

  return (
    <FilterContext.Provider value={contextValue}>{children}</FilterContext.Provider>
  );
};
