import React from "react";
import styles from "./CardBook.module.css";
import Link from "next/link";
import { IoIosCart } from "react-icons/io";
import Rating from "../Rating/Rating";
import { useBookContext } from "@/context/BookContext";

type CardBookProps = {
  id: number;
  title: string;
  authors: string;
  price: number;
  genre: string[];
  image: string;
  ratingCount: number;
};

const CardBook: React.FC<CardBookProps> = ({
  id,
  title,
  authors,
  price,
  image,
  ratingCount,
}) => {
  return (
    <div>
    <Link key={id} href={`/detalle/${id}`} className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
         <Rating ratingCount={ratingCount} />
        </div>
        <div className={styles.cardContent}>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.cardAuthors}>{authors}</h3>
          <p className={styles.cardPrice}>Price: ${price}</p>
        </div>
    </Link>

          <div className={styles.carrito}><p className={styles.button}><Link key={id} href={`/carrito-de-compra/${id}`}><IoIosCart /></Link></p>
</div>
          
    </div>
  );
};

export default CardBook;