import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <h1>Página inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/semana1">Semana 1</Link>
                    </li>
                    <li>
                        <Link to="/semana2">Semana 2</Link>
                    </li>
                    <li>
                        <Link to="/semana3">Semana 3</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Home;