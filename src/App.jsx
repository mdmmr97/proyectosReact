import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Curso from './componentes/curso'
import Parrafo from './componentes/Parrafo'
import Resumen from './componentes/Resumen'

const App = () => {
  const curso = 'Desarrollo web en entorno cliente. 2ª Evaluación'
  const parte1 = 'Fundamentos de React'
  const ejercicios1 = 10
  const parte2 = 'React avanzado'
  const ejercicios2 = 7
  const parte3 = 'Otros frameworks'
  const ejercicios3 = 14

  return (
    <div>
      <Curso curso={curso}></Curso>
      <Parrafo parte={parte1} ejercicio={ejercicios1}></Parrafo>
      <Parrafo parte={parte2} ejercicio={ejercicios2}></Parrafo>
      <Parrafo parte={parte3} ejercicio={ejercicios3}></Parrafo>

      <Resumen numero={"Numero de ejercicios"} ejercicios={ejercicios1 + ejercicios2 + ejercicios3}></Resumen>
    </div>
  )
}

export default App
