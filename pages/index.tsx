import React from "react";
import CardsBooks from "@/components/CardsBooks/CardsBooks";
import styles from "../styles/Home.module.css";
import { useBookContext } from "@/context/BookContext";
import autor from "../public/images/autor.png";

function Home() {
  // Utiliza el hook useBookContext para obtener los datos y funciones del contexto
  const { books } = useBookContext();
  
  return (
    <div className={styles.description}>
      {/* //columna izquierda */}
      <div className={styles.descriptionIzq}>
        <h3>Consulta por categorias</h3>
        <p>Historia</p>
        <p>Poesia</p>
        <p>Ficción</p>
        <p>Novelas</p>
      </div>
      {/* //columna derecha */}
      <div className={styles.descriptionDer}>
        <div><h3 className={styles.h1}>Bienvenidos</h3>
        <CardsBooks books={books} /></div>
        <div><h3 className={styles.h1}>Libro Destacado</h3>       
        </div>
        <div  className={styles.autor}><img src={autor.src} alt="autor" /></div>
    
      </div>
    </div>
  );
}

export default Home;
