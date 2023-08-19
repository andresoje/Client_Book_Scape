
import React from 'react';

interface Book {
  id: number;
  title: string;
  price: number;
}

interface BookCardProps {
  book: Book;
  onAddToCart: (bookId: number) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(book.id);
  };

  return (
    <div>
      <h3>{book.title}</h3>
      <p>${book.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default BookCard;
