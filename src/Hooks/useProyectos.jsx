import { useState, useEffect } from 'react';
import { getProyectos } from '../Servicios/posts/getProyectos';

const useProyectos = () => {
    const [busqueda, setBusqueda] = useState(false);
    const [datosProyectos, setProyectos] = useState([]);

    function ObtenerPostProyectos(){
        setBusqueda(true);
        getProyectos().then(datos => {
            setProyectos(datos);
            setBusqueda(false);
        });
    }
    useEffect(ObtenerPostProyectos, []);

    return {busqueda, datosProyectos};
}
export default useProyectos;