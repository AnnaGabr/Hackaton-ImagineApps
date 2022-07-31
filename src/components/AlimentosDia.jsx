import React from "react";


export const AlimentosDia = () => {

    return (
        <div id="alimentosDia">
            <form /* onSubmit={guardarDatos} */>
                <div>
                    <input className="inputs"
                        type="text"
                        id="nombre-plato"
                        name="plato"
                        placeholder="Ingresa el nombre del alimento"
                        /* onChange={handleInputChange} value={inputs.plato} */>
                    </input>

                </div>

                <div className="col-md-3">
                    <input className="inputs"
                        type="text"
                        id="gramaje"
                        name="gramaje"
                        placeholder="Ingresa la cantidad del alimento"
                        /* onChange={handleInputChange} value={inputs.granaje} */>
                    </input>
                </div>
                <div className="col-md-3">
                    <button id="boton-plato" type="submit" >
                        AGREGAR ALIMENTO
                    </button>
                </div>
            </form>
        </div>
    )

}


