import React, { useState } from "react";

const Contador = () => {

    const [contador, setContador] = useState({left : 0, 
                                              right : 0});
    

    function incrementarIzquierdo() {
        setContador({...contador, 
                    left: contador.left + 1});
    }

    function incrementarDerecho() {
        setContador({...contador, 
                    right: contador.right + 1});
    }

    return (
        <div>
            {contador.left}
            <button onClick={incrementarIzquierdo}> Left </button>
            <button onClick={incrementarDerecho}> Right</button>
            {contador.right}
        </div>
    )
}
export default Contador