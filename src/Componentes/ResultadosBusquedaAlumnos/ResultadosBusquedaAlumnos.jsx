import useAlumnos from "../../Hooks/useAlumnos";
import { FamiliaProvider, useFamiliaContext } from '../../Contexto/contextoFamProf';
import AjaxLoader from "../../AjaxLoader/AjaxLoader";

import AlumnoMinCard from "../AlumnoMinCard/AlumnoMinCard";

const ResultadosBusquedaAlumnos = () => {
    const {busqueda, datosAlumnos} = useAlumnos();
    const {familiacontext } = useFamiliaContext(FamiliaProvider);

    function FiltrarDatos(alumno) {
        return familiacontext.length === 0 || alumno.ciclos.some(ciclo => familiacontext.includes(ciclo.familia_profesional.id.toString()));
    }
    
    function mostrarAlumnos(alumno) {
        return  <AlumnoMinCard key={alumno.id}
                              nombre={alumno.nombre}
                              apellidos={alumno.apellidos}
                              avatar={alumno.avatar}
                              idiomas={alumno.idiomas}
                              ciclo={alumno.ciclos}
                              informacion={alumno.sobre_mi}
                />           
    }

    let alumnos = datosAlumnos.filter(FiltrarDatos);

    return (
        <div className="row">
            {busqueda ? <AjaxLoader></AjaxLoader> : 
            <div className="col-12">
                <div className="row">
                    {alumnos.length > 0 ? 
                        alumnos.map(mostrarAlumnos)
                    : 
                       <p>No hay alumnos que mostrar</p>
                    } 
                </div>
            </div>
            }
        </div>
    );
};
export default ResultadosBusquedaAlumnos;