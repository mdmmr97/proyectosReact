import React from 'react'
import Ordenar from '../Ordenar/Ordenar'
import Filtrar from '../Filtrar/Filtrar'

const Filtros = () => {
    return (
        <>
         <div className='col-12'>
            <h2>Ordenacion</h2>
            <Ordenar titulo="Título"></Ordenar>
          </div>
          <div className='col-12'>
            <Filtrar titulo="Filtros"></Filtrar>
          </div>
        </>
    )
}
export default Filtros