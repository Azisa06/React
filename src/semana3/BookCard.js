export default function BookCard({ title, author, description, cover, read }) {
  return (
    <div className="book-card" style={{ opacity: read ? 0.6 : 1 }}>
      <img src={cover} alt={title} className="book-cover" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{description}</p>
      {read && <p className="status">📖 Já lido</p>}
    </div>
  );
}
