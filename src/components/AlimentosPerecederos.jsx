import React from "react";

export const AlimentosPerecederos = () => {

    return (
        <div id="alimentosPerecederos">
            <form /* onSubmit={guardarDatos} */>
                <div>
                    <input className= "inputs"
                        type="text" 
                        id="nombre-producto" 
                        name="producto"
                        placeholder="Ingresa el nombre del alimento" 
                        /* onChange={handleInputChange} value={inputs.producto} */>
                    </input>
                </div>
    
                <div>
                    <input className= "inputs"
                        type="date" 
                        id="fecha" 
                        name="fecha-producto"
                        placeholder="Ingresa cantidad del alimento" 
                        /* onChange={handleInputChange} value={inputs.fecha} */>
                    </input>
                </div>
                <div>
                    <input className= "inputs"
                        type="value" 
                        id="fecha" 
                        name="fecha"
                        placeholder="Fecha de vencimiento" 
                        /* onChange={handleInputChange} value={inputs.precio} */>
                    </input>
                </div>

                <div>
                    <input className= "inputs"
                        type="value" 
                        id="precio" 
                        name="precio"
                        placeholder="Precio" 
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
