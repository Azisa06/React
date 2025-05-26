import { Link } from "react-router-dom";
import Contador from "./Contador";
import "./Atv02.css"

export default function Atv02() {
    return (
      <div className="semana2-page">
          <h2>Semana 2</h2>
          <Contador/>
          <Link className="btn-voltar2" to="/">Voltar</Link>
      </div>
    );
  }