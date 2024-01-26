import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'; 

import Filtros from './componentes/Filtros/Filtros'
import Cuerpo from './componentes/Cuerpo/Cuerpo'

function App() {
  const titulo = "Free Games";

  return (
    <>
      <h1>{titulo}</h1>
      <div className='row'>
        <div className='col-3'>
          <Filtros></Filtros>
        </div>
        <div className='col-9'>
          <Cuerpo></Cuerpo>
        </div>
      </div>
    </>
  )
}

export default App