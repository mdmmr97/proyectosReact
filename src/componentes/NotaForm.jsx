import { useState } from 'react'

const NotaForm = (props) => {
    const NOTASINICIALES = {contenido : "", 
                            fecha : "",
                            importante : false };

    const CONTENIDO = "contenido";
    const FECHA = "fecha";
    const IMPORTANTE = "importante";
    const NOIMPORTANTE = "noimportante";

    const [nuevaNota, setNuevaNota] = useState(NOTASINICIALES);
    
    function asignarNota(event) {
        switch (event.target.id) {
            case CONTENIDO:
                setNuevaNota({...nuevaNota, contenido : event.target.value});
            break;
            case FECHA:
                setNuevaNota({...nuevaNota, fecha : event.target.value});
            break;
            case IMPORTANTE:
                setNuevaNota({...nuevaNota, importante : true});
            break;
            case NOIMPORTANTE:
                setNuevaNota({...nuevaNota, importante : false});
            break;
            default: break;
        }
    }

    function manejarFormulario(event) {
        event.preventDefault();
        props.manejarAccion(nuevaNota);
        setNuevaNota(NOTASINICIALES);
    }

    return (
        <form id="formulario" onSubmit={manejarFormulario}>
            <p><strong> Nueva Nota </strong></p> 
            <label>Contenido</label><br/>
            <input type="text" id={CONTENIDO} onChange={asignarNota} value={nuevaNota.contenido}/>
            <br/>
            <label>Fecha</label><br/>
            <input type="date" id={FECHA} onChange={asignarNota} value={nuevaNota.fecha}/>
            <br/>
            
            <input type="checkbox" id={IMPORTANTE} onChange={asignarNota} value={nuevaNota.importante}>Importante</input>
            <input type="checkbox" id={NOIMPORTANTE} onChange={asignarNota} value={nuevaNota.importante}>No Importante</input>
            <br/>
            
            <button>Añadir Nota</button>
        </form>
    );
};

export default NotaForm;