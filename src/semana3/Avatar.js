export default function Avatar({ name, avatar, size = 60 }) {
  return (
    <div className="avatar">
      <img
        src={avatar}
        alt={`Foto de ${name}`}
        width={size}
        height={size}
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
      <p>{name}</p>
    </div>
  );
}
