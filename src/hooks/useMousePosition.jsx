import {useState, useEffect} from 'react';

const useMousePosition = () => {

     // Estado para alamacenar la posición del cursor del ratón
     const [position, setPosition] = useState({x:0, 
                                               y:0});

    function recuperarPosicionRaton(event) {

        setPosition ({x:event.clientX, 
                    y:event.clientY});
    }

    function activarPosicionador() {

        window.onmousemove= recuperarPosicionRaton;
    }

    // Activamos el evento "onmouseover" del ratón a la ventana. Como
    // lo hacemos solo una vez, lo encapsulamos en un useEffect
    useEffect(activarPosicionador,[])

    return {position};
}
export default useMousePosition;