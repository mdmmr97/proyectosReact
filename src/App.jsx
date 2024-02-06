import { Route, Switch} from 'wouter'
import './App.css'

import Cabecera from './Componentes/Cabecera/Cabecera'
import Home from './Paginas/Home/Home'

import Empresa from './Paginas/Empresa/Empresa'
import BusquedaProyectos from './Paginas/BusquedaProyectos/BusquedaProyectos';
import BusquedaAlumnos from './Paginas/BusquedaAlumnos/BusquedaAlumnos';

import Centroeducativo from './Paginas/Centroeducativo/Centroeducativo'
import Alumno from './Paginas/Alumno/Alumno'
import {IdiomaProvider} from './Contexto/contextoIdiomas'

function App() {
  return (
    <>
      <IdiomaProvider>
        <header>
          <Cabecera></Cabecera>
        </header>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/empresa" component={Empresa} />
          <Route path='/empresa/proyectos' component={BusquedaProyectos} />
          <Route path='/empresa/alumnos' component={BusquedaAlumnos} />
          <Route path="/centroeducativo" component={Centroeducativo} />
          <Route path="/alumno" component={Alumno} />
        </Switch>
      </IdiomaProvider>
    </>
  )
}

export default App
