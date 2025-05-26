import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atv01 from "./semana1/Atv01";
import Atv02 from "./semana2/Atv02";
import Atv03 from "./semana3/Atv03";

export default function MinhasRotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/semana1" element={<Atv01 />} />
                <Route path="/semana2" element={<Atv02 />} />
                <Route path="/semana3" element={<Atv03 />} />
            </Routes>
        </BrowserRouter>
    );
}