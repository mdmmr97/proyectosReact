import { useEffect, useState } from "react";
import { getComidas } from "../Servicios/getComidas";
//Obtenemos el contexto de la botonera para saber que letra se ha seleccionado
import { BotonesProvider, useBotonesContext } from '../Contexto/BotonesContex'

const useBuscarComida = () => {
    //Obtenemos la letra seleccionada en la botonera
    const {botonescontext} = useBotonesContext(BotonesProvider)
    //Creamos un estado para guardar la comida que obtendremos del endpoint
    const [resultadosComida, setresultadosComida] = useState([]);
    //La busqueda la ponemos a true para evitar que en la primra renderización el componente muestre un error
    const [buscando, setBuscando] = useState(true);
    console.log(botonescontext)

    function ObtenerComidas(){
        setBuscando(true);
        //Si la letra seleccionada es Ñ, no hacemos la petición al endpoint y ponemos el estado a null
        if (botonescontext === 'Ñ') {
            setresultadosComida({meals: null});
            setBuscando(false);
        } 
        else {
        getComidas(botonescontext).then(comida =>{
            setresultadosComida(comida);
            console.log(comida)
            setBuscando(false);
        })}
        console.log(resultadosComida);
    }
    //Hacemos la petición al endpoint cada vez que cambie la letra seleccionada
    useEffect(ObtenerComidas, [botonescontext])
    return {buscando, resultadosComida}
}
export default useBuscarComida