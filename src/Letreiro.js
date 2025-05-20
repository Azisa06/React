import './Letreiro.css';

function Letreiro() {
  const frase = 'Conheça a Fatec!';
  let index = 0;

  function tick() {
    const h1 = document.getElementById('letreiro');
    if (index <= frase.length) {
      if (h1) {
        h1.innerText = frase.slice(0, index);
      }
      index++;
      setTimeout(tick, 150);
    }
  }

  tick();

  return (
    <div className="letreiro-container">
      <h1 id="letreiro"></h1>
    </div>
  );
}

export default Letreiro;
