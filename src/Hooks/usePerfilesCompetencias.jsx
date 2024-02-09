import { useState, useEffect } from 'react';
import { getPerfilesCompetencias} from '../Servicios/posts/getPerfilesCompetencias';

const usePerfilesCompetencias = () => {
    const [busqueda, setBusqueda] = useState(false);
    const [datosCompetencias, setCompetencias] = useState([]);

    function ObtenerPostCompetencias(){
        setBusqueda(true);
        getPerfilesCompetencias().then(datos => {
            console.log(datos);
            
            setCompetencias(datos);
            setBusqueda(false);
        });
    }
    useEffect(ObtenerPostCompetencias, []);

    return {busqueda, datosCompetencias};
}
export default usePerfilesCompetencias;