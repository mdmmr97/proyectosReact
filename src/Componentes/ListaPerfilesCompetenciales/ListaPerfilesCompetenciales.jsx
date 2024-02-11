import './ListaPerfilesCompetencias.css'
import usePerfilesCompetencias from "../../Hooks/usePerfilesCompetencias";
import AjaxLoader from "../../AjaxLoader/AjaxLoader";

import BotonesFiltros from "../BotonesFiltros/BotonesFiltros";

const ListaPerfilesCompetencias = () => {
    const {busqueda, datosCompetencias} = usePerfilesCompetencias();

    function guardarPerfil(perfil_id) {
        console.log(perfil_id + " guardado");
    }

    function borrarPerfil(perfil_id) {
        console.log(perfil_id + " borrado");
    }

    function mostrarPerfiles(competencia) {
        return <BotonesFiltros key={competencia.idPerfil}
                               idBoton={`PC_${competencia.idPerfil}`} 
                               id={competencia.idPerfil} 
                               nombre={competencia.nombrePerfil}
                               guardar={guardarPerfil}
                               borrar={borrarPerfil}
                />
    }

    console.log(datosCompetencias);

    return (
        <div>
            {busqueda ? <AjaxLoader></AjaxLoader> : 
            <div className="perfil">
                <div className="row">
                    {datosCompetencias.map(mostrarPerfiles)}
                </div>
            </div>
            }
        </div>
    );
};
export default ListaPerfilesCompetencias;