import './ListaFamiliasProfesionales.css'
import useFamiliasProfesionales from "../../Hooks/useFamiliasProfesionales";
import AjaxLoader from "../../AjaxLoader/AjaxLoader";
import { FamiliaProvider, useFamiliaContext } from '../../Contexto/contextoFamProf';

import BotonesFiltros from "../BotonesFiltros/BotonesFiltros";

const ListaFamiliasProfesionales = () => {
    const {busqueda, datosFamilias} = useFamiliasProfesionales();
    const {familiacontext, setFamiliaContext} = useFamiliaContext(FamiliaProvider);

    function guardarFamilia(familia_id) {
        setFamiliaContext([...familiacontext, familia_id]);
        console.log(familiacontext);
        console.log(familia_id + " guardado");
    }

    function borrarFamilia(familia_id) {
        setFamiliaContext(familiacontext.filter(id => id !== familia_id));
        console.log(familiacontext);
        console.log(familia_id + " borrado");
    }

    function mostrarFamilias(familia) {
        return <BotonesFiltros key={familia.id}
                               idBoton={`FP_${familia.id}`} 
                               id={familia.id} 
                               nombre={familia.nombre}
                               guardar={guardarFamilia}
                               borrar={borrarFamilia}
                />
    }

    return (
        <div>
            {busqueda ? <AjaxLoader></AjaxLoader> : 
            <div className="familia">
                <div className="row">
                    {datosFamilias.map(mostrarFamilias)}
                </div>
            </div>
            }
        </div>
    );
};
export default ListaFamiliasProfesionales;