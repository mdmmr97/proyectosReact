import './App.css'
import Menu from './componentes/Menu'
import Municipio from './componentes/Municipio'
import {Route} from "wouter";


function App() {

  return (
    <>
      <Menu></Menu>
      <Route path="/:name" component={Municipio}></Route>
    </>
  )
}
export default App
