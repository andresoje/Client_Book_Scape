// components/Cart.tsx
import React from 'react';

interface CartItem {
  id: number;
  title: string;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  onTogglePurchase: (itemId: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onTogglePurchase }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.quantity > 0}
              onChange={() => onTogglePurchase(item.id)}
            />
            {item.title} ({item.quantity})
          </label>
        </div>
      ))}
    </div>
  );
};

export default Cart;
