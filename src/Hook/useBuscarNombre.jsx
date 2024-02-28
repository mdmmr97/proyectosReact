import { useEffect, useState } from "react";
import { getComidaNombre } from "../Servicios/getComidaNombre";
//Obtenemos el contexto de la botonera para saber que letra se ha seleccionado
import { BuscadorProvider, useBuscadorContext } from '../Contexto/BuscadorContext'

const useBuscarComida = () => {

    //Obtenemos la letra seleccionada en la botonera
    const {buscadorcontext} = useBuscadorContext(BuscadorProvider)
    //Creamos un estado para guardar la comida que obtendremos del endpoint
    const [resultadosComida, setresultadosComida] = useState([]);
    //La busqueda la ponemos a true para evitar que en la primra renderización el componente muestre un error
    const [buscando, setBuscando] = useState(true);
    console.log(buscadorcontext)

    function ObtenerComidas(){
        setBuscando(true);

        getComidaNombre(buscadorcontext).then(comida =>{
            setresultadosComida(comida);
            console.log(comida)
            setBuscando(false);
            localStorage.setItem("ultimaBusqueda", JSON.stringify(buscadorcontext));
        })
        console.log(resultadosComida);
    }
    //Hacemos la petición al endpoint cada vez que cambie la letra seleccionada
    useEffect(ObtenerComidas, [buscadorcontext])
    return {buscando, resultadosComida}
}
export default useBuscarComida