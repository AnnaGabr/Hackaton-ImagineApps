import React, { useState } from "react";
import { Restaurante } from './components/Restaurante';
import { Header } from "./components/Header";

function AppRestaurante2() {
    const [alimentos, setAlimentos] = useState([]);

    return(
        <div>
            <Header />
            <Restaurante alimentos={alimentos}/>
        </div>
        
    )
};

export default AppRestaurante2