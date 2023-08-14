import React, { useState } from "react";
import { useUsuarioContext } from "@/context/UsuarioContext";
import styles from "./login.module.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

// validaciones
import useValidacion from "../../hooks/useValidacion";
import validarIniciarSesion from "../../validacion/validarIniciarSesion";

const STATE_INICIAL = {
  email: '',
  password: ''
}

interface Usuario {
  id: number
  nombre: string;
  email: string;
  password: string;
}

const login = () => {

  const [error, guardarError] = useState(false);

  const { valores, errores, handleSubmit, handleChange, handleBlur } =
    useValidacion({
      stateInicial: STATE_INICIAL,
      validar: validarIniciarSesion ,
      fn: IniciarSesion,
    });

  const { email, password } = valores;
  

  async function IniciarSesion() {
    console.log("Inicindo sesion...");
    
  }

  return (
    <div className={styles.container}>
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
        {errores.email && <p>{errores.email}</p>}
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
        {errores.password && <p>{errores.password}</p>}
        
        {error && <p>{error} </p>}

        <button className={styles.button} type="submit" >Iniciar sesión</button>
      </form>
    
      <div>¿Eres nuevo en BookScape?</div>
      <div>
        <Link href="/crearCuenta">
          <button className={styles.button} type="button">Crea tu cuenta de BookScape</button>
        </Link>
      </div>
    </div>
   
  );
};

export default login;
