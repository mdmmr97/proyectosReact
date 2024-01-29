import { Route, Switch} from 'wouter'
import './App.css'

import Cabecera from './Componentes/Cabecera'
import Home from './Componentes/Home'
import Empresa from './Componentes/Empresa'
import Centroeducativo from './Componentes/Centroeducativo'
import Alumno from './Componentes/Alumno'

function App() {

  return (
    <>
      <header>
        <Cabecera></Cabecera>
      </header>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/empresa" component={Empresa} />
        <Route path="/centroeducativo" component={Centroeducativo} />
        <Route path="/alumno" component={Alumno} />
      </Switch>
    </>
  )
}

export default App
