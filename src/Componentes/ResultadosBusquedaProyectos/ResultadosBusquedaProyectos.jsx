import useProyectos from "../../Hooks/useProyectos";
import AjaxLoader from "../../AjaxLoader/AjaxLoader";

const ResultadosBusquedaProyectos = () => {
    
        const {busqueda, datosProyectos} = useProyectos();

    function mostrarFamilias(familia) {
        return 
    }

    return (
        <div>
            {busqueda ? <AjaxLoader></AjaxLoader> : 
            <div className="">
                <h3>Resultados</h3>
                <div className="row">
                    {datosFamilias.map(mostrarFamilias)}
                </div>
            </div>
            }
        </div>
    );
    
};
export default ResultadosBusquedaProyectos;