import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Imagen from './componentes/Imagen'

const App = () => {
  const tweet = 'Comenzamos con React en el módulo de Desarrollo web en entorno cliente. 2ª Evaluación';
  const nombre = 'Víctor M. Garrido';
  const nick   ='@vgc02g';
  const cuando = '3h ago ';

  return (
    <div className="tweet">
      <Imagen></Imagen>
        <div className="content">
          <span className="author" >
            <span className="name" > {nombre} </span>
            <span className="handle" > {nick} </span>
            <span className="time" > {cuando} </span>
          </span>
          <div className="message" >
            {tweet}
          </div>    
          <div className="buttons" >
          <i className="fa fa-reply reply-button" />
          <i className="fa fa-retweet retweet-button" />
          <i className="fa fa-heart like-button" />
          <i className="fa fa-ellipsis-h more-options-button" />
          </div>            
        </div>                
    </div>
  )
}

export default App
