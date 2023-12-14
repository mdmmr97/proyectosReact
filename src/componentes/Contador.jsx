import React, { useState } from "react";

const Contador = (props) => {

    const [contador, setContador] = useState(+props.contador);
    const [clicks, setClicks] = useState([]);

    function incrementarContador() {
        setContador(contador+1)
        setClicks(clicks.concat("i"));
    }

    function resetearContador() {
        setContador(+props.contador)
        setClicks([...clicks, "r"]);
    }

        const esPar = contador % 2 === 0;
        const mensaje = esPar ? "Es Par" : "Es Impar";

    return (
        <div>
            <h1>{contador}</h1>
            <p>{mensaje}</p>
            <p>{clicks}</p>
            <p> Nº Clicks: {clicks.length}</p>
            <p> Clicks "I": {clicks.filter(e => e === "i").length}</p>
            <p> Clicks "R": {clicks.filter(e => e === "r").length}</p>
            <button onClick={incrementarContador}> Incrementar Contador</button>
            <button onClick={resetearContador}> Resetear Contador</button>
        </div>
    )
}
export default Contador