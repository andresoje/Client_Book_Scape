import React from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";


const DetallesBook = () => {
  const {
    query: { id },
  } = useRouter();
  return (
    <div>
      <Navbar/>
      <h2>Producto: {id}</h2>
    </div>
  );
};

export default DetallesBook;