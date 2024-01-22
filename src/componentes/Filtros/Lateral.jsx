import React from 'react'
import Ordenar from './Ordenar/Ordenar'
import Filtrar from './Filtrar/Filtrar'

const Lateral = () => {
    return (
        <>
         <div className='col-12'>
            <Ordenar titulo="Ordenacion"></Ordenar>
          </div>
          <div className='col-12'>
            <Filtrar titulo="Filtros"></Filtrar>
          </div>
        </>
    )
}
export default Lateral