import { useEffect, useState } from "react";
import { getPersonajeId } from "../Servicios/getPersonajeId"

const usePersonaje = (id) =>{
   
    const [personaje, setPersonaje] = useState({});
    const [buscando, setBuscando] = useState(true);
    
    function ObtenerPersonaje(){
        console.log(id);
        setBuscando(true);
        getPersonajeId(id).then(personajeId =>{
            console.log(personajeId);
            setPersonaje(personajeId);
            console.log(personaje);
            setBuscando(false);
        });
    }
    useEffect(ObtenerPersonaje, [id])
    return {buscando, personaje}
};
export default usePersonaje