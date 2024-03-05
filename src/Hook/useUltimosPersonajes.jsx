import { useEffect, useState } from "react";
import { getPersonajeId } from "../Servicios/getPersonajeId"

const useUltimosPersonajes = (lista) =>{
    const [listaPersonajes, setPersonaje] = useState([]);
    const [buscando, setBuscando] = useState(true);
    
    function ObtenerUltimosPersonajes(){
        console.log(lista);
        setBuscando(true);

        lista.forEach(id => {
            getPersonajeId(id).then(personajeId =>{
                console.log(personajeId);
                setPersonaje(prevState => [...prevState, personajeId]);  
                setBuscando(false);
            });
        });
        console.log(listaPersonajes);
    }
    useEffect(ObtenerUltimosPersonajes, [lista])
    return {buscando, listaPersonajes}
};
export default useUltimosPersonajes