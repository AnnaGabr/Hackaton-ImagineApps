import React from "react";

export const AlimentosDia = () => {

    return (
        <div id="alimentosDia">
            <form /* onSubmit={guardarDatos} */>
                <div>
                    <input 
                        type="text" 
                        id="nombre-plato" 
                        name="plato"
                        placeholder="NOMBRE DEL PLATO"
                        className="form-control"
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


