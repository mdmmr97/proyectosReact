//Importamos las librerias necesarias, los componentes y los contextos
import React from 'react'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'; 

import Filtros from './componentes/Filtros/Filtros'
import Cuerpo from './componentes/Cuerpo/Cuerpo'
//
import { GeneroProvider } from './contexto/GeneroContext'
import { PlataformaProvider } from './contexto/PlataformaContext'
import { OrdenProvider } from './contexto/OrdenContext'

function App() {
  //Titulo de la pagina
  const titulo = "Free Games";

  //Renderizamos los componentes y los contextos 
  return (
    <>
      <h1 className='bg-dark text-white position-sticky top-0'>{titulo}</h1>
      <div className='row'>
        <GeneroProvider>
          <PlataformaProvider>
            <OrdenProvider>
              <div className='col-2 pe-0 filtros bg-dark text-white bottom-0'>
                <Filtros></Filtros>
              </div>
              <div className='col-9 cuerpo'>
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

