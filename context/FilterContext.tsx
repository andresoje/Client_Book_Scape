import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

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

type Author = {
  name: string;
};

type Tags = {
  name: string;
};

type Language = {
  language: string;
};

type FilterContextType = {
  books: Book[];
  uniqueLanguages: string[];
  uniqueTags: string[];
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
  const [books, setBooks] = useState<Book[]>([]);
  const [uniqueLanguages, setUniqueLanguages] = useState<string[]>([]);
  const [uniqueTags, setUniqueTags] = useState<string[]>([]);

  useEffect(() => {
    fetchBooks();
    fetchLanguages();
    fetchTags();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/books/");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

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

  const contextValue: FilterContextType = {
    books,
    uniqueLanguages,
    uniqueTags,
  };

  return (
    <FilterContext.Provider value={contextValue}>{children}</FilterContext.Provider>
  );
};
