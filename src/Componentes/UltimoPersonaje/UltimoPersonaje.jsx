import { useLocation } from "wouter";
import { useState } from 'react';

const UltimoPersonaje = (props) =>{
    const [personajesLocal, setPersonajesLocal] = useState(JSON.parse(localStorage.getItem("ultimosPersonajes")) || []);
    const [location, setLocation] = useLocation();
    console.log(personajesLocal);

    function RutaDetalle(){
        setLocation(`/personaje/${props.id}`);
        let guardarPersonaje = [...personajesLocal];
        if(guardarPersonaje.length === 3 ){
            guardarPersonaje.shift();
            console.log(guardarPersonaje)
        }
        guardarPersonaje = [...guardarPersonaje, props.id];
        setPersonajesLocal(guardarPersonaje);
        console.log(guardarPersonaje);
        localStorage.setItem("ultimosPersonajes", JSON.stringify(guardarPersonaje));
    }

    return (
        <div className="col-3" >
            <img src={props.imagen} alt={props.nombre} onClick={RutaDetalle}/>
        </div>
    )
}

export default UltimoPersonaje;