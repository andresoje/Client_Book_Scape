import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

const Buscar = () => {

    const router = useRouter();
    const { query: { q }} = router;
  
    // Todos los productos
    const { productos } = useProductos('creado');
    const [ resultado, guardarResultado ] = useState([]);
}