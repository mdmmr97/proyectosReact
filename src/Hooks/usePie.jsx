import { useState, useEffect } from 'react';
import { getAllPie } from '../Servicios/posts/getAllPie';

const usePie = () => {
    const [busqueda, setBusqueda] = useState(false);
    const [datosPie, setDatosPie] = useState([]);

    function ObtenerPostPie(){
        setBusqueda(true);
        getAllPie().then(datos => {
            setDatosPie(datos);
            setBusqueda(false);
        });
    }
    useEffect(ObtenerPostPie, []);

    return {busqueda, datosPie};
}
export default usePie;