import { Route, Switch } from 'wouter'
import './App.css'

import Cabecera from './Componentes/Cabecera/Cabecera'
import Detalle from './Paginas/Detalle'
import Home from './Paginas/Home'

import React, { Suspense } from 'react';
//Retrasa la carga de un componente hasta que se haga scroll para verlo
//Se instala con npm install react-lazy-load
import LazyLoad from 'react-lazy-load';
//Hasta que no se haga scroll para ver el elemento no se cargará
const PiePagina = React.lazy( () => import('./Componentes/PiePagina/PiePagina'));

function App() {
  //Evitamos que el pie de página se cargue hasta que no se haga scroll para verlo, el pie de página se cargará
  //cuando falten 100px para verlo
  return (
    <>
      <header>
        <Cabecera></Cabecera>
      </header>
      <div className='alturaLista'>
        <Switch>
          <Route path='/' component={Home}/>
          <Route path='/comida/:idMeal' component={Detalle}/>
        </Switch>
      </div>
      <Suspense fallback={"Cargando"}>
        <LazyLoad offset={100}>
            <PiePagina></PiePagina>
        </LazyLoad>
      </Suspense>
    </>
  )
}

export default App
