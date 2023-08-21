import React, { useState } from "react";
import { useRouter } from "next/router";
import { useBookContext } from "@/context/BookContext";
import styles from "./detail.module.css";
import Rating from "../../components/Rating/Rating";
import Link from "next/link";
import { IoIosCart } from "react-icons/io";
import { useCartContext } from "@/context/CartContext";

const DetallesBook = () => {
  const { books } = useBookContext();

  const {
    query: { id },
  } = useRouter();

  const detallebook = books.find((book) => book.id === Number(id));

  // carrito de compra
  const { addToCart } = useCartContext();

  return (
    <div>
      {detallebook ? (
        <div className={styles.container}>
          <div className={styles.izquierda}>
            <Link href={"/"}>Regresar</Link>
            <div className={styles.imagen}>
              <img src={detallebook.image} alt={detallebook.title} />

              <Rating ratingCount={detallebook.rating_ave} />
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
              <div>Genero: {detallebook.tags}</div>
              <form className={styles.formulario}>
                <label htmlFor="cantidad">Cantidad:</label>
                <select id="cantidad">
                  <option value="0">-- Seleccione --</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <input type="submit" value="Agregar al Carrito" />
              </form>
              <Link href={`/CarritoDeCompra`}>
                <button
                  onClick={() => addToCart(detallebook)}
                  className={styles.button}
                >
                  <IoIosCart />
                  ir al carrito
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
