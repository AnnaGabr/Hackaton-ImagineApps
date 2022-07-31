import React, { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase_alimentos/init-firebase'

export const AlimentosPerecederos = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [date, setDate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if ( name === '' || price === 0 || date === '' ) {
            return
        }
        const products_prishableCollectionRef = collection(db, 'alimentosperecederos')
        addDoc(products_prishableCollectionRef, {name: name, date: date, price: price})
        .then((response) => {
            console.log("response")
        })
        .catch((error) => {
            console.log(error.message)
        })
        alert('¡Registro exitoso!')
      }

    return (
        <div id="alimentosPerecederos">
            <form onSubmit={ handleSubmit } >
                <div>
                    <input className= "inputs"
                        type="text" 
                        id="nombre-producto" 
                        name="producto"
                        placeholder="Ingresa el nombre del alimento" 
                        value={ name }
                        onChange={(e) => setName(e.target.value)}
                        /* onChange={handleInputChange} value={inputs.producto} */>
                    </input>
                </div>
    
                <div>
                    <input className= "inputs"
                        type="value" 
                        id="fecha" 
                        name="fecha-producto"
                        placeholder="Fecha de vencimiento" 
                        value={ date }
                        onChange={(e) => setDate(e.target.value)}
                        /* onChange={handleInputChange} value={inputs.fecha} */>
                    </input>
                </div>
                <div>
                    <input className= "inputs"
                        type="value" 
                        id="precio" 
                        name="precio"
                        placeholder="PRECIO" 
                        value={ price }
                        onChange={(e) => setPrice(e.target.value)}
                        /* onChange={handleInputChange} value={inputs.precio} */>
                    </input>
                </div>

                <div>
                    <button id="boton-producto" type="submit" >
                        AGREGAR ALIMENTO
                    </button>
                </div>
            </form>
        </div>
    )

}
