import React from "react";
import { useRouter } from "next/router";


const DetallesBook = () => {
  const {
    query: { id },
  } = useRouter();
  return (
    <div>
      <h2>Producto: {id}</h2>
    </div>
  );
};

export default DetallesBook;