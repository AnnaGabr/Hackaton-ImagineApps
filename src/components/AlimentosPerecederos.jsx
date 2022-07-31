import React from "react";

export const AlimentosPerecederos = () => {

    return (
        <div id="alimentosPerecederos">
            <form /* onSubmit={guardarDatos} */>
                <div>
                    <input 
                        type="text" 
                        id="nombre-producto" 
                        name="producto"
                        placeholder="NOMBRE DEL PRODUCTO" 
                        /* onChange={handleInputChange} value={inputs.producto} */>
                    </input>
                </div>
    
                <div>
                    <input 
                        type="date" 
                        id="fecha" 
                        name="fecha-producto"
                        placeholder="FECHA PRODUCTO" 
                        /* onChange={handleInputChange} value={inputs.fecha} */>
                    </input>
                </div>

                <div>
                    <input 
                        type="value" 
                        id="precio" 
                        name="precio"
                        placeholder="PRECIO" 
                        /* onChange={handleInputChange} value={inputs.precio} */>
                    </input>
                </div>

                <div>
                    <button id="boton-producto" type="submit">
                        AGREGAR
                    </button>
                </div>
            </form>
        </div>
    )

}
