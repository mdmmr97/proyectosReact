import './TarjetaPersonaje.css'
import { useLocation } from "wouter";
import { useState } from 'react';

const TarjetaPersonaje = (props) => {
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
        <div className='col-4 d-flex justify-content-center p-0'>
            <div className="card tarjetaPersonaje" onClick={RutaDetalle}>
                <div className='d-flex justify-content-center'>
                    <img src={props.img} className="card-img-top" alt={props.nombre}/>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{props.nombre}</h2>
                </div>
            </div>
        </div>
    )
}
export default TarjetaPersonaje;