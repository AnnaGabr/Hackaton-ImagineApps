import React from 'react'
import { AlimentosDia } from './AlimentosDia'
import { AlimentosPerecederos } from './AlimentosPerecederos'


export const Restaurante = ({ alimentos }) => {


  return (
    <div className='principalForm'>
      <div>
        <form className='alimentos-dia'>
          <h3>ALIMENTOS DEL DÍA</h3><br></br>
          <p>¡Recuerda!, aquí debes agregar los alimentos que preparaste hoy y no alcanzaste a vender.
          ¡Entre todos nos ayudamos!</p> 
        </form>
        <AlimentosDia />
      </div>
      <div>
        <form className='alimentos-perecederos'>
          <h3>ALIMENTOS PERECEDEROS</h3> <br></br>
          <p>¡Recuerda!, aquí puedes agregar cualquier alimento que tenga una fecha de vencimiento pronta pero que no haya sido abierto, 
          así podrás ofrecerlo a un buen precio.
          ¡Entre todos nos ayudamos!</p> 
        </form>
      <AlimentosPerecederos />
      </div>

    </div>
  )
}
