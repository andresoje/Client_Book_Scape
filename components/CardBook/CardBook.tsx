import React from "react";
import styles from "./CardBook.module.css";
import Link from "next/link";
import { IoIosCart, IoLogoHtml5 } from "react-icons/io";
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
    <Link key={id} href={`/detalle/${id}`} className={styles.card}>
        <div>
          <img src={image} alt={title} className={styles.image} />
         <Rating ratingCount={ratingCount} />
        </div> </Link>
        <div className={styles.cardContent}>
          <h3 className={styles.title}>{title}</h3>
          <h5 >{authors}</h5>
          <h3 >${price}</h3>
        </div>
   
   
<Link key={id} href={`/carritoDeCompra/${id}`}>
          <button className={styles.button} type="button">Comprar <IoIosCart /></button>
        </Link>    </div>
  );
};

export default CardBook;