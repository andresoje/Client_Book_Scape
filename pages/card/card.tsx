import React from "react";
import Link from 'next/link';

interface CardProps {
  id: number;
  name: string;
  background_image: string;
  genres: string;
  rating: number;
  origen: string;
}

const Card: React.FC<CardProps> = ({ id, name, background_image, genres, rating}) => {
  return (
    <div>
      <img src={background_image} alt="falta imagen" />

      <div>
        <div>
          <h3>{name}</h3>
        </div>
        <div>
          <h3>{`Calificacion: ${rating}`}</h3>
          <h3>{genres}</h3>
          <h3>
            <Link href={`/details/${id}`}>
              <a>Detalles</a>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
