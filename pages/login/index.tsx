import React, { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import logo2 from "../../public/images/BookScapeLogo.png"


// validaciones
import useValidacion from "../../hooks/useValidacion";
import validarIniciarSesion from "../../validacion/validarIniciarSesion";
import axios from "axios";




const STATE_INICIAL = {
  email: "",
  password: "",
};

const login = () => {
  const router = useRouter();

  const [error, guardarError] = useState("");

  const { valores, errores, handleSubmit, handleChange, handleBlur } =
    useValidacion({
      stateInicial: STATE_INICIAL,
      validar: validarIniciarSesion,
      fn: IniciarSesion,
    });

  const { email, password } = valores;

  async function IniciarSesion() {
    try {
      const response = await axios.post("/api/login", { email, password });

      if (response.status === 200) {
        const token = response.data.token; // Suponiendo que el backend devuelve un token
        localStorage.setItem("token", token); // Almacena el token en el localStorage
        console.log("Inicio de sesión exitoso");
        router.push("/");
      }
    } catch (error: any) {
      console.error("Hubo un error al iniciar sesión ", error.response);
      guardarError(
        "No pudimos encontrar una cuenta con esa dirección de correo electrónico, te invitamos a crear una cuenta"
      ); // Mostrar mensaje de error en el frontend
    }
  }

  return (
    <div className={styles.container}>
      <img className={styles.logo2} src={logo2.src} alt="" />
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            className={styles.input}
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errores.email && <p className={styles.alert}>{errores.email}</p>}
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Como mínimo 6 caracteres"
            name="password"
            className={styles.input}
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errores.password && <p className={styles.alert}>{errores.password}</p>}

        {error && <p className={styles.alert}>{error} </p >}

        <button className={styles.button} type="submit">
          Iniciar sesión
        </button>
      </form>
      <div>¿Eres nuevo en BookScape?</div>
      <div>
        <Link href="/crearCuenta">
            Crea tu cuenta de BookScape
        </Link>
      </div>
    </div>
  );
};

export default login;
