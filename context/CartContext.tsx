import React, { createContext, useContext, useState, ReactNode } from "react";

// Definir la interfaz para un artículo en el carrito
interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  authors: string[];
}

// Definir la interfaz para el contexto del carrito
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
}

// Crear el contexto del carrito
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook personalizado "useCartContext" para consumir el contexto
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext debe usarse dentro de un BookProvider");
  }
  return context;
};

// Crear el proveedor del contexto
export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Función para agregar un artículo al carrito
  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  // Puedes agregar más funciones relacionadas con el carrito aquí

  // Creación del objeto "contextValue" con la información del contexto
  const contextValue: CartContextType = {
    cartItems, 
    addToCart
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

