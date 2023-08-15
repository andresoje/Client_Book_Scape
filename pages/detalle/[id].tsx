import React from "react";
import { useRouter } from "next/router";
import { useBookContext } from "@/context/BookContext";
import styles from "./detail.module.css";
import Rating from "../../components/Rating/Rating";
import Link from "next/link";
import { IoIosCart } from "react-icons/io";


const DetallesBook = () => {
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
              Valoracion:
              <Rating ratingCount={detallebook.ratingCount} />
            </div>
          </div>
          <div className={styles.derecha}>
            <div className={styles.titulo}>
              {" "}
              <h1>{detallebook.title}</h1>{" "}
            </div>
            <div className={styles.autor}>
              {" "}
              <h3>{detallebook.authors}</h3>{" "}
            </div>
            <div className={styles.descripcion}>
              {" "}
              <h4>Descripción:</h4> <p> {detallebook.description}</p>{" "}
            </div>

            <div className={styles.detalles}>
              <div>
                {" "}
                <h2>Precio: ${detallebook.price}</h2>{" "}
              </div>
              <div> Vendidos: {detallebook.ratingCount} </div>
              <div>Genero: {detallebook.genre}</div>
              <Link href={`http://localhost:3000/carritoDeCompra/${id}`}>
              <button className={styles.button} type="button">
        <IoIosCart />Agregar al carrito
        </button>
        </Link>   
            </div>
          </div>
        </div>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
};

export default DetallesBook;
