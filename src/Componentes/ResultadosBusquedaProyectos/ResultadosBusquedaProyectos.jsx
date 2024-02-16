import useProyectos from "../../Hooks/useProyectos";
import { FamiliaProvider, useFamiliaContext } from '../../Contexto/contextoFamProf';
import AjaxLoader from "../../AjaxLoader/AjaxLoader";

import ProyectoMinCard from "../ProyectoMinCard/ProyectoMinCard";

const ResultadosBusquedaProyectos = () => {
    const {busqueda, datosProyectos} = useProyectos();
    const {familiacontext } = useFamiliaContext(FamiliaProvider);
    
    function FiltrarDatos(proyecto) {
        return familiacontext.length === 0 || proyecto.ciclos.some(ciclo => familiacontext.includes(ciclo.familia_profesional.id.toString()));
    }

    function mostrarProyectos(proyecto) {
        return  <ProyectoMinCard key={proyecto.id} 
                                 nombre={proyecto.nombre}
                                 alumnos={proyecto.estudiantes}
                                 tutor={proyecto.docente_id}
                                 ciclo={proyecto.ciclos}
                />
    }

    let proyectos = datosProyectos.filter(FiltrarDatos);

    return (
        <div className="row">
            {busqueda ? <AjaxLoader></AjaxLoader> : 
            <div className="col-12">
                <div className="row">
                    {proyectos.length > 0 ?
                        proyectos.map(mostrarProyectos)
                    :
                        <p>No hay proyectos que mostrar</p>
                    }
                </div>
            </div>
            }
        </div>
    );
    
};
export default ResultadosBusquedaProyectos;