import React, { useState } from 'react'

const FrutaFormDelete = (props) => {
    const [borraFruta, delborraFruta] = useState("");

    function borrarFruta(event){

        delborraFruta(event.target.value);
    }

    function manejarBorrado(event){

        event.preventDefault();

        if (props.elementos===0) alert ("No hay elementos en la lista");
        else if (borraFruta === "") alert ("Debes introducir un número de fruta a borrar");
        else if (props.elementos >= +borraFruta) props.manejarBorrado(+borraFruta-1);
        else alert ("Ese elemento no existe en la lista");

        delborraFruta("");
    }
    return (
        <div>
            <form id="formulario" onSubmit={manejarBorrado}>
                    <label>Escribe el número de la fruta a eliminar</label> 
                    <input id="eliminar" type="text" onChange={borrarFruta} value={borraFruta}></input><br></br>
                    <button>Eliminar Fruta</button>
            </form>
        </div>
    )
}
export default FrutaFormDelete;