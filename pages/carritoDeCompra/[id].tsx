import React from "react";
import { useRouter } from "next/router";
import { useBookContext } from "@/context/BookContext";
import styles from "../carritoDeCompra/carrito.module.css";
import Rating from "../../components/Rating/Rating";
import Link from "next/link";

const carritoDeCompra = () => {
  const { books } = useBookContext();

  const {
    query: { id },
  } = useRouter();

  const detallebook = books.find((book) => book.id === Number(id));

  return (
    <div>
      {detallebook ? (
        <div className={styles.container}>
          <div className={styles.izquierda}>
            <Link href={"/"}>Regresar</Link>
            <div className={styles.imagen}>
              <img src={detallebook.image} alt={detallebook.title} />
            </div>
          </div>
          <div className={styles.derecha}>
            <div className={styles.titulo}>
              <h1>{detallebook.title}</h1>
              <Rating ratingCount={detallebook.ratingCount} />
            </div>
            <div className={styles.autor}>
              <h3>{detallebook.authors}</h3>
            </div>
            <div className={styles.detalles}>
              <div>
                <h2>Price: ${detallebook.price}</h2>
              </div>
              <div>Genero: {detallebook.genre}</div>
              <Link href={`/carritoDeCompra/${id}`}>
                <button className={styles.button} type="button">
                  Comprar
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
       
        </div>
      )}
    </div>
  );
};

export default carritoDeCompra;
