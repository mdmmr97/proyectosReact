import React from 'react'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'; 

import Filtros from './componentes/Filtros/Filtros'
import Cuerpo from './componentes/Cuerpo/Cuerpo'

import GeneroContext from './contexto/GeneroContext'
import PlataformaContext from './contexto/PlataformaContext'
import OrdenContext from './contexto/OrdenContext'

function App() {
  const titulo = "Free Games";

  return (
    <>
      <h1>{titulo}</h1>
      <div className='row'>
        <GeneroContext.Provider value='Todos'>
          <PlataformaContext.Provider value='Todos'>
            <OrdenContext.Provider value=''>
              <div className='col-3'>
                <Filtros></Filtros>
              </div>
              <div className='col-9'>
                <Cuerpo></Cuerpo>
              </div>
            </OrdenContext.Provider>
          </PlataformaContext.Provider>
        </GeneroContext.Provider>
      </div>
    </>
  )
}

export default App

