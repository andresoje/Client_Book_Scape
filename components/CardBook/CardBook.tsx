import React from "react";
import styles from "./CardBook.module.css";
import Link from "next/link";
import { IoIosCart } from "react-icons/io";

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
  // genre,
  image,
}) => {
  return (
    <div>
    <Link key={id} href={`/book/${id}`} className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
        </div>
        <div className={styles.cardContent}>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.cardAuthors}>{authors}</h3>
          <p className={styles.cardPrice}>Price: ${price}</p>
          <p className={styles.button}><Link href={"/carrito-de-compra"}><IoIosCart /></Link></p>
        </div>
    </Link>
    
    </div>
  );
};

export default CardBook;
