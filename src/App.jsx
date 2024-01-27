import React from 'react'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'; 

import Filtros from './componentes/Filtros/Filtros'
import Cuerpo from './componentes/Cuerpo/Cuerpo'

import { GeneroProvider } from './contexto/GeneroContext'
import { PlataformaProvider } from './contexto/PlataformaContext'
import { OrdenProvider } from './contexto/OrdenContext'

function App() {
  const titulo = "Free Games";

  return (
    <>
      <h1>{titulo}</h1>
      <div className='row'>
        <GeneroProvider>
          <PlataformaProvider>
            <OrdenProvider>
              <div className='col-3'>
                <Filtros></Filtros>
              </div>
              <div className='col-9'>
                <Cuerpo></Cuerpo>
              </div>
            </OrdenProvider>
          </PlataformaProvider>
        </GeneroProvider>
      </div>
    </>
  )
}

export default App

