import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './componentes/Contador';

function App() {

  return (
    <Contador contador={5}></Contador>
  )
}

export default App
