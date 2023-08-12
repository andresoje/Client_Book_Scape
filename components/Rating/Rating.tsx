import React from "react";
import styles from "./Rating.module.css";

type RatingProps = {
  ratingCount: number; // Valor original del ratingCount de la base de datos
};

const Rating: React.FC<RatingProps> = ({ ratingCount }) => {
  const maxStars = 5;
  const scaledRating = ratingCount / 2; // Escala de 1-10 a 1-5

  return (
    <div className={styles.rating}>
      {Array.from({ length: maxStars }).map((_, index) => (
        <span
          key={index}
          className={index < scaledRating ? styles.starFilled : styles.star}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;