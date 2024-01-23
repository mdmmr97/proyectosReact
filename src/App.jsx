import { useEffect, useState } from 'react';
import './App.css';
import AjaxLoader from './componentes/AjaxLoader';
import { getAllPosts } from './servicios/posts/getAllPosts';

import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import Filtros from './componentes/Filtros/Filtros'
import Cuerpo from './componentes/Cuerpo/Cuerpo'

function App() {
  const titulo = "Free Games";
  const [listaPost, setListaPost] = useState([]);
  const [buscando, setBuscando] = useState(false);

  function obtenerPosts(){

    setBuscando(true);
    getAllPosts().then(posts => {

      setListaPost(posts);
      setBuscando(false);

    });                    
  }
  
  //useEffect(obtenerPosts, []);

  return (
    <>
      <h1>{titulo}</h1>
      <div className='row'>
          <div className='col-3'>
            <Filtros></Filtros>
          </div>
          <div className='col-9'>
            <Cuerpo juegos={listaPost}></Cuerpo>
          </div>
        </div>
    </>
  )
}

export default App

/*
{buscando ? 
        <AjaxLoader></AjaxLoader> 
      :
        <div className='row'>
          <div className='col-3'>
            <Filtros></Filtros>
          </div>
          <div className='col-9'>
            <Cuerpo juegos={listaPost}></Cuerpo>
          </div>
        </div>
      }
*/