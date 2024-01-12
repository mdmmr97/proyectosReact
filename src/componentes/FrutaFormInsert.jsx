import React, { useState } from 'react'

const FrutaFormInsert = (props) => {
    const [nuevaFruta, setNuevaFruta] = useState("");

    function asignarFruta(event){
        
        setNuevaFruta(event.target.value);
    }

    function manejarInsercion(event){

        event.preventDefault();

        if (nuevaFruta ==="") alert ("Debes introducir un nombre para la fruta");
        else {
            props.manejarInsercion(nuevaFruta);
            setNuevaFruta("");
        }
    }
    return (
        <div>
            <form id="formulario" onSubmit={manejarInsercion}>
                    <label>Escribe la fruta que quieres añadir</label> 
                    <input id="añadir" type="text" onChange={asignarFruta} value={nuevaFruta}></input><br></br>
                    <button>Añadir Fruta</button>
            </form>
        </div>
    )
}
export default FrutaFormInsert;