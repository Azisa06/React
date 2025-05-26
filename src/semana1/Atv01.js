import { Link } from "react-router-dom";
import Letreiro from "./Letreiro";
import Relogio from "./Relogio";
import "./Atv01.css"

export default function Atv01() {
  return (
    <div className="semana1-page">
        <h2>Semana 1</h2>
        <Letreiro/>
        <Relogio/>
        <Link className="btn-voltar1" to="/">Voltar</Link>
    </div>
  );
}