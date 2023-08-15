import React from "react";
import Link from "next/link";
import styles from "../carritoDeCompra/carrito.module.css";
import logo from "../../public/images/vcarrito.png";

const carritoDeCompra = () => {
  return (
    <div className={styles.container2}>
      <h1>Tu Carrito de BookScape está vacío</h1>
        <div className={styles.container3}>
          <div className={styles.logo}>
            <img src={logo.src} alt="Logo" />
          </div>
          <div>
            <div>
              <Link href={"/login"}>
                <button className={styles.button} type="button">
                  Inicia sesión en tu cuenta
                </button>
              </Link>{" "}
            </div>
            <div>
              <Link href={"/crearCuenta"}>
                <button className={styles.button} type="button">
                  Regístrate ahora
                </button>
              </Link>{" "}
            </div>
          </div>
        </div>
        <p>El precio y la disponibilidad de los productos de BookScape.com están sujetos a cambio. En el carrito de compras puedes dejar temporalmente los productos que quieras. Aparecerá el precio más reciente de cada producto.</p>
    </div>
  );
};

export default carritoDeCompra;
