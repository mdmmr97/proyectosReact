import { useState, useEffect } from 'react';
import { getFamiliasProfesionales} from '../Servicios/posts/getFamiliasProfesionales';

const useFamiliasProfesionales = () => {
    const [busqueda, setBusqueda] = useState(false);
    const [datosFamilias, setFamilias] = useState([]);

    function ObtenerPostFamilias(){
        setBusqueda(true);
        getFamiliasProfesionales().then(datos => {
            setFamilias(datos);
            setBusqueda(false);
        });
    }
    useEffect(ObtenerPostFamilias, []);

    return {busqueda, datosFamilias};
}
export default useFamiliasProfesionales;