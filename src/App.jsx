import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import Lateral from './componentes/Filtros/Lateral'
import Cuerpo from './componentes/Cuerpo/Cuerpo'

function App() {
  const titulo = "Free Games";

  return (
    <>
      <h1>{titulo}</h1>
      <div className='row'>
        <div className='col-3'>
          <Lateral></Lateral>
        </div>
        <div className='col-9'>
          <Cuerpo></Cuerpo>
        </div>
      </div>
    </>
  )
}

export default App