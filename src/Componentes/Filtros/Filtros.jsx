import React from 'react'
import './Filtros.css'

//Importo el componente Ordenar y Filtrar
import Ordenar from '../Ordenar/Ordenar'
import Filtrar from '../Filtrar/Filtrar'

//Este componente muestra los filtros de ordenacion y filtrado
const Filtros = () => {
    return (
      <div className='filtros'>
        <div className='row'>
         <div className='col-6'>
            <Ordenar titulo="Nombre"></Ordenar>
          </div>
          <div className='col-6'>
            <Filtrar titulo="Genero"></Filtrar>
          </div>
        </div>
      </div>
    )
}
export default Filtros