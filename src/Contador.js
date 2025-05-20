import React, { useState } from 'react';
import './contador.css';

function Grupo({ nome, imagemSrc, contador, setContador }) {
  return (
    <div className="grupo">
      <img src={imagemSrc} alt={nome} className="icone" />
      <div className="botoes">
        <button
          className="botao verde"
          onClick={() => setContador(prev => prev + 1)}
        >
          +
        </button>
        <button
          className="botao vermelho"
          onClick={() => setContador(prev => (prev > 0 ? prev - 1 : 0))}
        >
          -
        </button>
      </div>
      <div style={{ fontWeight: 'bold' }}>{nome}</div>
      <div>{contador}</div>
    </div>
  );
}

export default function App() {
  const [countHomens, setCountHomens] = useState(0);
  const [countMulheres, setCountMulheres] = useState(0);

  const resetar = () => {
    setCountHomens(0);
    setCountMulheres(0);
  };

  const total = countHomens + countMulheres;

  return (
    <div className="container-app">
      <div className="contador">
        <div className="total">Total</div>
        <input className="input-total" type="text" readOnly value={total} />
        <div className="reset" onClick={resetar}>
          &#x21bb;
        </div>
        <div className="container">
          <Grupo
            nome="Homens"
            imagemSrc="https://cdn-icons-png.flaticon.com/512/145/145843.png"
            contador={countHomens}
            setContador={setCountHomens}
          />
          <Grupo
            nome="Mulheres"
            imagemSrc="https://cdn-icons-png.flaticon.com/512/145/145852.png"
            contador={countMulheres}
            setContador={setCountMulheres}
          />
        </div>
      </div>
    </div>
  );
}