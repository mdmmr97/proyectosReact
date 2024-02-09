import './ListaPerfilesCompetencias.css'
import usePerfilesCompetencias from "../../Hooks/usePerfilesCompetencias";
import AjaxLoader from "../../AjaxLoader/AjaxLoader";

import BotonesFiltros from "../BotonesFiltros/BotonesFiltros";

const ListaPerfilesCompetencias = () => {
    const {busqueda, datosCompetencias} = usePerfilesCompetencias();

    function mostrarPerfiles(competencia) {
        return <BotonesFiltros key={competencia.idPerfil} id={competencia.idPerfil} nombre={competencia.nombrePerfil}></BotonesFiltros>
    }

    console.log(datosCompetencias);

    return (
        <div>
            {busqueda ? <AjaxLoader></AjaxLoader> : 
            <div className="perfil">
                <h3>Perfiles Competencia</h3>
                <div className="row">
                    {datosCompetencias.map(mostrarPerfiles)}
                </div>
            </div>
            }
        </div>
    );
};
export default ListaPerfilesCompetencias;