import React from "react";
import styles from "./CardBook.module.css";

type CardBookProps = {
  id: number;
  title: string;
  authors: string;
  price: number;
  genre: string[];
  image: string;
};

const CardBook: React.FC<CardBookProps> = ({
  id,
  title,
  authors,
  price,
  genre,
  image,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.cardAuthors}>Authors: {authors}</p>
        <p className={styles.cardPrice}>Price: ${price}</p>
        <p className={styles.cardGenre}>Genre: {genre.join(", ")}</p>
      </div>
    </div>
  );
};

export default CardBook;
