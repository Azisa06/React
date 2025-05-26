import { books } from './Books';
import BookCard from './BookCard';

export default function BookGallery() {
  return (
    <section>
      <h1>Livros da Série ACOTAR</h1>
      <div className="gallery">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            cover={book.cover}
            read={book.read}
          />
        ))}
      </div>
    </section>
  );
}
