import React, { useState } from "react";

const Contador = () => {

    const [clicks, setClicks] = useState({rojo : 0, 
                                          amarillo : 0,
                                          verde: 0,
                                          total: 0});

    function incrementarRojo() {
        setClicks({...clicks, 
                    rojo: clicks.rojo + 1,
                    total: clicks.total +1});
                    
    }
    function incrementarAmarillo() {
        setClicks({...clicks, 
                    amarillo: clicks.amarillo + 1,
                    total: clicks.total +1});
    }

    function incrementarVerde() {
        setClicks({...clicks, 
                    verde: clicks.verde + 1,
                    total: clicks.total +1});
    }

    

    return (
        <div>
            <button onClick={incrementarRojo}> Rojo </button>
            <button onClick={incrementarAmarillo}> Amarillo </button>
            <button onClick={incrementarVerde}> Verde </button>
            <p>Rojo: {clicks.rojo}</p>
            <p>Amarillo: {clicks.amarillo}</p>
            <p>Verde: {clicks.verde}</p>
            <p>Total: {clicks.total}</p>
            <p>%Rojo: {(clicks.rojo/clicks.total)*100}</p>
            <p>%Amarillo: {(clicks.amarillo/clicks.total)*100}</p>
            <p>%Verde: {(clicks.verde/clicks.total)*100}</p>
        </div>
    )
}
export default Contador