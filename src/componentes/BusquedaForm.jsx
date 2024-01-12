import React, { useState } from 'react'

const BusquedaForm = (props)  => {

    const NOMBRE    = "bnombre";
    const ESTADOINICIAL = "";

    const [nuevaBusqueda, setnuevaBusqueda] = useState(ESTADOINICIAL);

    function asignarContacto(event){
        setnuevaBusqueda(event.target.value);
    }

    function devolverBusqueda(){
        props.manejarBusqueda(nuevaBusqueda);
    }

    return (
        <div>
            <input id={NOMBRE} type="text" onChange={asignarContacto} onKeyUp={devolverBusqueda} value={nuevaBusqueda}></input><br></br>
        </div>
    )
}
export default BusquedaForm;