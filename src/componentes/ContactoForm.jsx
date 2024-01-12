import React, { useState } from 'react'

const ContactoForm = (props) => {

    const ESTADOINICIAL={id         : 0,
                         nombre     : "",
                         telefono   : ""}
    
    const NOMBRE    = "nombre";
    const TELEFONO  = "telefono";

    const [nuevaContacto, setNuevoContacto] = useState(ESTADOINICIAL);

    function asignarContacto(event){

        console.log(event.target.id);
        console.log(event.target.value);

        switch(event.target.id) {
            case NOMBRE: setNuevoContacto({...nuevaContacto,
                                           nombre:event.target.value});
            break;
            case TELEFONO: setNuevoContacto({...nuevaContacto,
                                            telefono:event.target.value});
            break;
            default: break;
        }
    }
    
    function manejarFormulario(event){
        event.preventDefault();
        props.manejarNuevoContacto(nuevaContacto);
        setNuevoContacto(ESTADOINICIAL);
    }

    return (
        <form id="formulario" onSubmit={manejarFormulario}>
            <label>Nombre</label> 
            <input id={NOMBRE} type="text" onChange={asignarContacto} value={nuevaContacto.nombre}></input><br></br>
            <label>Teléfono</label> 
            <input id={TELEFONO} type="text" onChange={asignarContacto} value={nuevaContacto.telefono}></input><br></br>
            <button>Añadir Contacto</button>
        </form>
    )
}

export default ContactoForm;