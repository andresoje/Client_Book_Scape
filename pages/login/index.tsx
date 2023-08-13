import React from "react";
import styles from "./login.module.css";
import Link from "next/link";
const login = () => {
  return (
    <div className={styles.container}>
      <div><h1>Ingresar</h1></div>
      <div className={styles.form}>
        <form >
          {/* USERNAME */}
          <div>
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Email..."
              name="email"
              value="email"
              className={styles.input}
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Password..."
              name="password"
              value="password"
              className={styles.input}
            />
          </div>
          <div>
            <button className={styles.button}>LOGIN</button>
          </div>
        </form>
      </div>
      <div><br />¿Eres nuevo en BookScape?<br /></div>
      <div>

        <Link href="/crearCuenta">
          Crea tu cuenta de BookScape
        </Link>
      </div>
    </div>
  );
};

export default login;
