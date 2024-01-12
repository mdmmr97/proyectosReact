import React, { useState } from 'react';
import './App.css';
import BarraHeramientas from './componentes/BarraHeramientas';
import TemaContext from './contextos/TemaContext';
import temas from './mock-temas';
import SelectorTema from './componentes/SelectorTema';

function App() {

  const [temaElegido, setTemaElegido] = useState(temas.light);

  function manejarSeleccion(valor)  {
    setTemaElegido(valor==="1"?temas.light:temas.dark);

  }

  return (
    <div>
      <SelectorTema tema={1} manejarSeleccion={manejarSeleccion} ></SelectorTema>
      {/*Definimos el proveedor del contexto.*/}
      <TemaContext.Provider value={temaElegido}>
        <BarraHeramientas></BarraHeramientas>
      </TemaContext.Provider>
    </div>
  );
}

export default App;
