import './PiePagina.css';
import { useState } from 'react';
import useUltimosPersonajes from '../../Hook/useUltimosPersonajes';

import AjaxLoader from '../Ajax-loader/Ajax-Loader'
import UltimoPersonaje from '../UltimoPersonaje/UltimoPersonaje';


const PiePagina = () =>{
    const [personajesLocal, setPersonajesLocal] = useState(JSON.parse(localStorage.getItem("ultimosPersonajes")) || []);
    const {buscando, listaPersonajes} = useUltimosPersonajes(personajesLocal)

    function MostrarPersonaje(personaje) {
        return <UltimoPersonaje key={personaje.id}
                                id={personaje.id}
                                imagen={personaje.image}
                                nombre={personaje.name}
                />
    }

    return (
        <div className="row footer m-0 p-0" >
            {buscando 
            ? <AjaxLoader></AjaxLoader>
            : listaPersonajes.map(MostrarPersonaje)
            }
        </div>
    )
};
export default PiePagina