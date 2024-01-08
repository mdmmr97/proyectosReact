import { useState } from 'react'
import './App.css'
import Nota from './componentes/Nota'
import notas from './mock-notas'

function App() {
  const [count, setCount] = useState(0)
  const [mostrarTodos, setMostrarTodos] = useState('true');

  function manejarMostrarNotas() {
    setMostrarTodos(!mostrarTodos);
  }

  function filtrarNotas(nota) {
    if (mostrarTodos) return true;
    else return nota.importante;
  }

  function devolverNota(nota) {
    return  <Nota key={nota.id} nota={nota}></Nota>;
  }

  return (
    <div>
      <h1>Notas</h1>
      <button onClick={manejarMostrarNotas}>{mostrarTodos ? "Mostrar importantes" : "MostrarTodos"}</button>
      <ul>
        {notas.filter(filtrarNotas).map(devolverNota)}
      </ul>
    </div>
  )
}

export default App