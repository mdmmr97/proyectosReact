// Importamos el componente que creamos para mostrar la botonera donde seleccioanra la letra por la que quiere 
//filtrar
import Botonera from '../Componentes/Botonera/Botonera';
import Buscador from '../Componentes/Buscador/Buscador';
// Importamos el componente que creamos para mostrar la lista de comidas
import ListaComida from "../Componentes/ListaComida/ListaComida";
// Importamos el componente que creamos para que el usuario pueda volver al inicio de la pagina
import ScrollUp from "../Componentes/ScrollUp/ScrollUp";

// Importamos el provider que creamos para obtener la letra que esta seleccionada en la botonera y poder filtrar ´
//la comida por esa letra
import { BotonesProvider } from '../Contexto/BotonesContex';
import { BuscadorProvider } from '../Contexto/BuscadorContext';

const Home = () => {
    
    return (
        <div>
            <BotonesProvider>
            <BuscadorProvider>
                <Botonera></Botonera>
                <Buscador></Buscador>
                <ListaComida></ListaComida>
                <ScrollUp></ScrollUp>
            </BuscadorProvider>
            </BotonesProvider>
        </div>
    )
};
export default Home