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
    <div className={styles.imageContainer}>
      <Link href={`/detalle/${id}`} className={styles.card}>
        <div>
          <img src={image} alt={title} className={styles.image} />
          <Rating ratingCount={ratingCount} />
        </div> </Link>
        <div className={styles.cardContent}>
          <h6 className={styles.title}>{title}</h6>
          <h4 className={styles.cardAuthors}>{authors}</h4>
          <h3 className={styles.cardPrice}>${price}</h3>
        </div>
     
      {/* <Link href={`/carritoDeCompra/${id}`}>
        <button className={styles.button} type="button">
        <IoIosCart />Agregar al carrito
        </button>
      </Link> */}
    </div>
  );
};

export default CardBook;
