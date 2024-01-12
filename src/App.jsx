import { useState } from 'react'
import './App.css'
import Fruta from './componentes/Fruta'
import frutas from './mock-frutas'
import FrutaFormInsert from './componentes/FrutaFormInsert'
import FrutaFormDelete from './componentes/FrutaFormDelete'


function App() {
  const [listaFrutas, setListaFrutas] = useState(frutas)

  function manejarInsercion(fruta) {
    console.log("valor componetne hijo ", fruta, " lo añadimos a la lista");
    setListaFrutas([...listaFrutas, fruta]);
  } 

  function manejarBorrado(id) {
    console.log("valor componetne hijo ", id, " lo eliinamos lista");
    setListaFrutas(listaFrutas.filter(item => item !== listaFrutas[id]));
  }

  function muestraFruta(fruta,index) {  
    return <Fruta  key={index} fruta={fruta}></Fruta>;    
  }

  return (
    <div>
      <div id="divFrutas">
        <h1>Frutas</h1>
        <ol>
        {listaFrutas.map(muestraFruta)}
        </ol>
      </div>
      <div id="divForm">
        <FrutaFormInsert manejarInsercion={manejarInsercion} 
                         elementos={listaFrutas.length}>            
        </FrutaFormInsert>
        <FrutaFormDelete manejarBorrado={manejarBorrado} 
                         elementos={listaFrutas.length}>            
        </FrutaFormDelete>          
      </div>
    </div>
  )
}

export default App
