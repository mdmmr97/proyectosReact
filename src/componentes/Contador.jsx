import React, { useState } from "react";

const Contador = (props) => {

    const [contador, setContador] = useState(+props.contador);

    function incrementarContador() {
        setContador(contador+1)
    }

    function resetearContador() {
        setContador(+props.contador)
    }

    function mostrarMensaje() {
        return contador % 2 === 0 ? "Es Par" : "Es Impar"
    }

    return (
        <div>
            <h1>{contador}</h1>
            <p>{mostrarMensaje(contador)}</p>
            <button onClick={incrementarContador}> Incrementar Contador</button>
            <button onClick={resetearContador}> Resetear Contador</button>
        </div>
    )
}
export default Contador