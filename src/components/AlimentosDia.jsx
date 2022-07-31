import React, { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase_alimentos/init-firebase'

export const AlimentosDia = () => {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name === '') {
            return
        }
        const products_dayCollectionRef = collection(db, 'alimentosdeldia')
        addDoc(products_dayCollectionRef, {name: name, amount: amount})
        .then((response) => {
            console.log("response")
        })
        .catch((error) => {
            console.log(error.message)
        })
        alert('¡Registro exitoso!')
      }

    return (
        <div id="alimentosDia">
            <form onSubmit={ handleSubmit} >
                <div>
                    <input 
                        type="text" 
                        id="nombre-plato" 
                        name="plato"
                        placeholder="NOMBRE DEL PLATO"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        /* onChange={handleInputChange} value={inputs.plato} */>
                    </input>
                </div>
    
                <div className="col-md-3">
                    <input 
                        type="text" 
                        id="granaje" 
                        name="granaje"
                        placeholder="GRANAJE DEL PLATO"
                        className="form-control"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        /* onChange={handleInputChange} value={inputs.granaje} */>
                    </input>
                </div>
                <div className="col-md-3">
                    <button id="boton-plato" type="submit">
                        AGREGAR
                    </button>
                </div>
            </form>
        </div>
    )

}


