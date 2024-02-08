import { useState, useEffect } from 'react';
import { getProyectoss } from '../Servicios/posts/getProyectos';

const useProyectos = () => {
    const [busqueda, setBusqueda] = useState(false);
    const [datosProyectos, setProyectos] = useState([]);

    function ObtenerPostProyectos(){
        setBusqueda(true);
        getProyectoss().then(datos => {
            setProyectos(datos);
            setBusqueda(false);
        });
    }
    useEffect(ObtenerPostProyectos, []);

    return {busqueda, datosProyectos};
}
export default useProyectos;