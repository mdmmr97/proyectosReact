import React, { useState } from 'react';
import './App.css';
import BarraHeramientas from './componentes/BarraHerramientas';
import TemaContext from './contextos/TemaContext';
import IdiomaContext from './contextos/IdiomaContex';
import temas from './mock-temas';
import SelectorTema from './componentes/SelectorTema';
import SelectorIdioma from './componentes/SelectorIdioma';

function App() {

  const ES="es";

  const [temaElegido, setTemaElegido] = useState(temas.light);
  const [idiomaElegido, setIdiomaElegido] = useState(ES);

  function manejarSeleccionTema(valor)  {
    setTemaElegido(valor==="1"?temas.light:temas.dark);
  }

  function manejarSeleccionIdioma(valor)  {
    setIdiomaElegido(valor);
  }  

  return (
    <div>
      <SelectorIdioma idioma={idiomaElegido}  manejarSeleccion={manejarSeleccionIdioma}></SelectorIdioma>
      <IdiomaContext.Provider value={idiomaElegido}>
        <SelectorTema tema={1} manejarSeleccion={manejarSeleccionTema} ></SelectorTema>
        {/*Definimos el proveedor del contexto.*/}
        <TemaContext.Provider value={temaElegido}>
          <BarraHeramientas></BarraHeramientas>
        </TemaContext.Provider>
      </IdiomaContext.Provider>
    </div>
  );
}

export default App;