import React, { useState } from "react";
import { useRouter } from "next/router";
import { useBookContext } from "@/context/BookContext";
import styles from "./detail.module.css";
import Link from "next/link";
import { IoIosCart } from "react-icons/io";
import { useCartContext } from "@/context/CartContext";

const DetallesBook = () => {
  const [cantidad, setCantidad] = useState(1);
  const { books } = useBookContext();

  const {
    query: { id },
  } = useRouter();

  const detallebook = books.find((book) => book.id === Number(id));

  // carrito de compra
  const { agregarCarrito, cartItems } = useCartContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Cantidad no válida");
      return;
    }

    if (detallebook) {
      const cartItem = {
        id: detallebook.id,
        title: detallebook.title,
        price: detallebook.price,
        image: detallebook.image,
        authors: detallebook.authors,
        cantidad,
      };

      agregarCarrito(cartItem);
    }
  };

  return (
    <div>
      {detallebook ? (
        <div className={styles.container}>
          {/* ...contenido del detalle... */}
          <div className={styles.detalles}>
            {/* ...otros detalles... */}
            <form className={styles.formulario} onSubmit={handleSubmit}>
              <label htmlFor="cantidad">Cantidad:</label>
              <select
                id="cantidad"
                onChange={(e) => setCantidad(+e.target.value)}
              >
                <option value="0">-- Seleccione --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <button type="submit" className={styles.button}>
                Agregar al Carrito
              </button>
            </form>
            <Link href={`/CarritoDeCompra`}>
              <button className={styles.button}>
                <IoIosCart />
                Ir al Carrito
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
};

export default DetallesBook;
