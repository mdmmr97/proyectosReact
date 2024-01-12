import { useState } from 'react';
import './App.css';
import Agenda from './componentes/Agenda'
import ContactoForm from './componentes/ContactoForm'
import BusquedaForm from './componentes/BusquedaForm'
import listinTelefonico from './mock-telefonos';

function App() {
  
  const [listaContactos, setListaContactos] = useState(listinTelefonico);
  const [busqueda, setBusqueda] = useState("");

  function manejarNuevoContacto(contacto) {
    console.log("valor componente hijo ", contacto, " lo añadimos a la lista");
    contacto.id = listaContactos.length + 1;
    setListaContactos([...listaContactos, contacto]);
  }  

  function manejarBusqueda(busqueda) {
    console.log("valor componetne hijo ", busqueda);
    setBusqueda(busqueda);
  }

  function muestraTelefonos(entrada) {  
    return <Agenda  key={entrada.id} entrada={entrada}></Agenda>; 
  }

  function filtrar(entrada){
    if (entrada.nombre.indexOf(busqueda) !== -1) return true;
    else return false;
  }

  return (
    <div>
        <h1>Buscar</h1>
        <BusquedaForm manejarBusqueda={manejarBusqueda}>
        </BusquedaForm>
        <h1>Nuevo contacto</h1>
        <ContactoForm manejarNuevoContacto={manejarNuevoContacto}>            
        </ContactoForm>       
        <h1>Agenda</h1>
        <ul>
        {listaContactos
            .filter(filtrar)
            .map(muestraTelefonos)}
        </ul>
    </div>
    );
}
export default App;