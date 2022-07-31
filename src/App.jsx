import React, { useState } from "react";
import { Restaurante } from './components/Restaurante';

export function App() {
    const [alimentos, setAlimentos] = useState([]);

    return(
        <div className="container">
            <Restaurante alimentos={alimentos}/>
        </div>
        
    )
}