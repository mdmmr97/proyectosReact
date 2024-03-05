import { useEffect, useState } from "react";
import { getPersonajes } from "../Servicios/getPersonajes";

const usePersonajes = () => {
    const [listaPersonajes, setlistaPersonajes] = useState([]);
    const [buscando, setBuscando] = useState(true);

    function ObtenerPersonajes(){
        setBuscando(true);
 
        getPersonajes().then(personaje =>{
            setlistaPersonajes(personaje);
            console.log(personaje)
            setBuscando(false);
        })
        console.log(listaPersonajes);
    }

    useEffect(ObtenerPersonajes, [])
    return {buscando, listaPersonajes}
}
export default usePersonajes