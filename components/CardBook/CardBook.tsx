import React from "react";
import styles from "./CardBook.module.css";
import Link from "next/link";
import Rating from "../Rating/Rating";


type CardBookProps = {
  id: number;
  title: string;
  authors: string[];
  price: number;
  tags: string[];
  image: string;
  rating_ave: number;
};

const CardBook: React.FC<CardBookProps> = ({
  id,
  title,
  authors,
  price,
  image,
  rating_ave,
}) => {
  return (
    <div className={styles.imageContainer}>
      <Link href={`/detalle/${id}`} className={styles.card}>
        <div>
          <img src={image} alt={title} className={styles.image} />
          <Rating ratingCount={rating_ave} />
        </div> </Link>
        <div className={styles.cardContent}>
          <h6 className={styles.title}>{title}</h6>
          <h4 className={styles.cardAuthors}>{authors}</h4>
          <h3 className={styles.cardPrice}>${price}</h3>
        </div>
    </div>
  );
};

export default CardBook;
