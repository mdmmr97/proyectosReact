import './ListaFamiliasProfesionales.css'
import useFamiliasProfesionales from "../../Hooks/useFamiliasProfesionales";
import AjaxLoader from "../../AjaxLoader/AjaxLoader";

import BotonesFiltros from "../BotonesFiltros/BotonesFiltros";

const ListaFamiliasProfesionales = () => {
    const {busqueda, datosFamilias} = useFamiliasProfesionales();

    function mostrarFamilias(familia) {
        return <BotonesFiltros key={familia.id} id={familia.id} nombre={familia.nombre}></BotonesFiltros>
    }

    return (
        <div>
            {busqueda ? <AjaxLoader></AjaxLoader> : 
            <div className="familia">
                <h3>Familias Profesionales</h3>
                <div className="row">
                    {datosFamilias.map(mostrarFamilias)}
                </div>
            </div>
            }
        </div>
    );
};
export default ListaFamiliasProfesionales;