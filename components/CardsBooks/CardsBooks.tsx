import CardBook from "../CardBook/CardBook";
import styles from "./CardsBooks.module.css";

type Book = {
  id: number;
  title: string;
  authors: string;
  price: number;
  genre: string[];
  image: string;
};

type CardsBooksProps = {
  books: Book[];
};

const CardsBooks: React.FC<CardsBooksProps> = ({ books }) => {
  return (
    <div className={styles.container}>
      {books.map(({ title, authors, price, genre, image, id }, index) => (
        <CardBook
          key={id}
          id={id}
          title={title}
          authors={authors}
          price={price}
          genre={genre}
          image={image}
        />
      ))}
    </div>
  );
};

export default CardsBooks;
