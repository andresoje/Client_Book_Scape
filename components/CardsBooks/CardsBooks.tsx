import CardBook from "../CardBook/CardBook";
import styles from "./CardsBooks.module.css";

type Book = {
  id: number;
  title: string;
  authors: string[];
  price: number;
  tags: string[];
  image: string;
  rating_ave: number;
};

type CardsBooksProps = {
  books: Book[];
};

const CardsBooks: React.FC<CardsBooksProps> = ({ books }) => {
  return (
    <div className={styles.container}>
      {books.map(({ title, authors, price, tags, image, id, rating_ave }, index) => (
        <CardBook
          key={index}
          id={id}
          title={title}
          authors={authors}
          price={price}
          tags={tags}
          image={image}
          rating_ave={rating_ave}
        />
      ))}
    </div>
  );
};

export default CardsBooks;
