import React, { useState } from "react";
import { Restaurante } from './components/Restaurante';
import { Header } from "./components/Header";

export function App() {
    const [alimentos, setAlimentos] = useState([]);

    return(
        <div>
            <Header />
            <Restaurante alimentos={alimentos}/>
        </div>
        
    )
}