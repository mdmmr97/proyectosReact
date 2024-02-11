import { useState, useEffect } from 'react';
import { getAlumnos } from '../Servicios/posts/getAlumnos';

const useAlumnos = () => {
    const [busqueda, setBusqueda] = useState(false);
    const [datosAlumnos, setAlumnos] = useState([]);

    function ObtenerPostAlumnos(){
        setBusqueda(true);
        getAlumnos().then(datos => {
            setAlumnos(datos);
            setBusqueda(false);
        });
    }
    useEffect(ObtenerPostAlumnos, []);

    return {busqueda, datosAlumnos};
}
export default useAlumnos;