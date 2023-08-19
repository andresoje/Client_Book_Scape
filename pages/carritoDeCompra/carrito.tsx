import { useCartContext } from "@/context/CartContext";

const CarritoPage = () => {
  const { cartItems } = useCartContext();
  
  return (
    <div>
      <h1>Carrito de Compra</h1>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} />
            <h6>{item.title}</h6>
            <h4>{item.authors}</h4>
            <h3>${item.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarritoPage;
