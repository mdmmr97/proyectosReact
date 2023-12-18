import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tema from './Componentes/Tema'
import misTemas from './mock-misTemas'

function App() {
 
  function devolverTema(tema) {
    return  <li><Tema key={tema.id} tema={tema}></Tema></li>;
  }

  return (
    <ul>
      {misTemas.map(devolverTema)}
    </ul>
  )
}

export default App
