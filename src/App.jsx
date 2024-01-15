import { useState } from 'react'
/*import './App.css'*/
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';


function App() {
  const titulo = "Free Games";

  return (
    <>
      <h1 className='col 12'>{titulo}</h1>
      <div className='row'>
        <div className='col-2 he'>
          <div className='row'>
            <div className='col-12'>
              <button className='btn btn-primary'>Nuevo Juego</button>
            </div>
            <div className='col-12'>
              <button className='btn btn-primary'>Nuevo Juego</button>
            </div>
            <div className='col-12'>
              <button className='btn btn-primary'>Nuevo Juego</button>
            </div>
          </div>
        </div>
        <div className='col-10'>

        </div>
      </div>
      <div>

      </div>
    </>
  )
}

export default App