import { useState } from 'react'

const NotaForm = (props) => {
    const NOTASINICIALES = {id: 0,
                            contenido : "", 
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
                setNuevaNota({...nuevaNota, importante : JSON.parse(event.target.value)});
            break;
            case NOIMPORTANTE:
                setNuevaNota({...nuevaNota, importante : JSON.parse(event.target.value)});
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
            <input type="datetime-local" id={FECHA} onChange={asignarNota} value={nuevaNota.fecha}/>
            <br/>
            <div>
                <input type="radio" id={IMPORTANTE} value={true} onChange={asignarNota} name="importante" checked={nuevaNota.importante}/>Importante
                <input type="radio" id={NOIMPORTANTE} value={false} onChange={asignarNota} name="importante" checked={!nuevaNota.importante}/>No Importante
            </div>
            <br/>
            <button>Añadir Nota</button>
        </form>
    );
};

export default NotaForm;