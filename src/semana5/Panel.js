import './Panel.css';

export default function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="semana5-panel">
      <h3 className="semana5-panel-title">{title}</h3>
      {isActive ? (
        <p className="semana5-panel-content">{children}</p>
      ) : (
        <button onClick={onShow} className="semana5-panel-button">
          Mostrar
        </button>
      )}
    </section>
  );
}