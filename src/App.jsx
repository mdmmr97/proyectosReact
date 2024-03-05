import { Route, Switch } from 'wouter'
import './App.css'

import Cabecera from './Componentes/Cabecera/Cabecera'
import Detalle from './Paginas/Detalle'
import Home from './Paginas/Home'

function App() {
  return (
    <>
      <header>
        <Cabecera></Cabecera>
      </header>

      <Switch>
        <Route path='/' component={Home}/>
        <Route path='/personaje/:idPersonaje' component={Detalle}/>
      </Switch>

    </>
  )
}

export default App
