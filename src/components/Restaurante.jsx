import React from 'react'
import { AlimentosDia } from './AlimentosDia'
import { AlimentosPerecederos } from './AlimentosPerecederos'


export const Restaurante = ({ alimentos }) => {


  return (
    <div>
      <form>
        ALIMENTOS DEL DÍA
        ¡Recuerda!, aquí debes agregar los alimentos que preparaste hoy y no alcanzaste a vender.
        ¡Entre todos nos ayudamos!
        <button>
          +
        </button>
      </form>
      <AlimentosDia />
      
      <form>
        ALIMENTOS PERECEDEROS
        ¡Recuerda!, aquí puedes agregar cualquier alimento que tenga una fecha de vencimiento pronta pero que no haya sido abierto, 
        así podrás ofrecerlo a un buen precio.
        ¡Entre todos nos ayudamos!
        <button>
          +
        </button>
      </form>

      <AlimentosPerecederos />

    </div>
  )
}
