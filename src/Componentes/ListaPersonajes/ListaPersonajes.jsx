import usePersonajes from '../../Hook/usePersonajes'
import AjaxLoader from '../Ajax-loader/Ajax-Loader'

import {GeneroProvider, useGeneroContext} from '../../Contexto/GeneroContext';
import {OrdenProvider, useOrdenContext} from '../../Contexto/OrdenContext';
import TarjetaPersonaje from '../TarjetaPersonaje/TarjetaPersonaje';

const ListaPersonajes = () =>{
    const {buscando, listaPersonajes} = usePersonajes()
    const {generocontext} = useGeneroContext(GeneroProvider);
    const {ordencontext} = useOrdenContext(OrdenProvider);
    
    function ordenarNombre(personaje1, personaje2){
        switch (ordencontext) {
            case 'Z .. A':
                return personaje2.name.localeCompare(personaje1.name);
            case 'A .. Z':
                return personaje1.name.localeCompare(personaje2.name);
            default:
                return 0;
        }
    }

    function filtrarGenero(personaje){
        return generocontext === 'Todos' || personaje.gender === generocontext;
    }

    function MostrarPersonaje(personaje){
        return <TarjetaPersonaje key={personaje.id} 
                                 id={personaje.id} 
                                 nombre={personaje.name}
                                 img={personaje.image}
                />
    }

    return (
        <div className='row alturaLista'>
            {buscando 
            ? <AjaxLoader></AjaxLoader>
            : listaPersonajes.filter(filtrarGenero).toSorted(ordenarNombre).map(MostrarPersonaje)

            }
        </div>
    )
};
export default ListaPersonajes