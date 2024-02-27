import { useEffect, useState } from "react";
import { getComidaId } from "../Servicios/getComidaId"

//Creamos un hook para obtener la comida por su id
const useComida = (id) =>{
    //Creamos un estado para guardar la comida que obtendremos del endpoint y en el guardaremos un objeto
    //(Preferible guardar un objeto cuando solo un objeto lo que vamos a recuperar del endpoint, en vez del array)
    const [comida, setComida] = useState({});
    //La busqueda la ponemos a true para evitar que en la primra renderización el componente muestre un error
    const [buscando, setBuscando] = useState(true);
    
    function ObtenerComida(){
        console.log(id);
        setBuscando(true);
        getComidaId(id).then(comidaId =>{
            console.log(comidaId);
            //Guardamos la comida en el estado (directamente el objeto si obtenemos un objeto del endpoint)
            setComida(comidaId.meals[0]);
            console.log(comida);
            setBuscando(false);
        });
    }
    //Usamos un useEffect para que se ejecute la función que obtiene la comida cuando el id cambie
    useEffect(ObtenerComida, [id])
    return {buscando, comida}
};
export default useComida