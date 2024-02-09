import useProyectos from "../../Hooks/useProyectos";
import AjaxLoader from "../../AjaxLoader/AjaxLoader";

import ProyectoMinCard from "../ProyectoMinCard/ProyectoMinCard";

const ResultadosBusquedaProyectos = () => {
    const {busqueda, datosProyectos} = useProyectos();

    function mostrarProyectos(proyecto) {
        return <ProyectoMinCard key={proyecto.id} 
                                nombre={proyecto.nombre}
                                alumnos={proyecto.estudiantes}
                                tutor={proyecto.docente_id}
                                ciclo={proyecto.ciclos}
               />
    }

    return (
        <div>
            {busqueda ? <AjaxLoader></AjaxLoader> : 
            <div className="col-12">
                <h3>Resultados</h3>
                <div className="row">
                    {datosProyectos.map(mostrarProyectos)}
                </div>
            </div>
            }
        </div>
    );
    
};
export default ResultadosBusquedaProyectos;
/*
{
    "id": 1,
    "docente_id": 1,
    "nombre": "Tecnolog\u00edas de la Informaci\u00f3n",
    "dominio": "TecnologiaInformacion",
    "metadatos": "a:3:{s:12:\"fecha_inicio\";s:10:\"2023-01-15\";s:9:\"fecha_fin\";s:10:\"2023-05-30\";s:12:\"calificacion\";d:9.5;}",
    "created_at": "2024-01-25T10:53:03.000000Z",
    "updated_at": "2024-01-25T10:53:03.000000Z",
    "calificacion": 4,
    "fichero": null,
    "ciclos": [
        {
            "id": 136,
            "codCiclo": "INAM2",
            "codFamilia": "MAM",
            "familia_id": 18,
            "grado": "G.M.",
            "nombre": "T\u00e9cnico en Instalaci\u00f3n y Amueblamiento",
            "created_at": null,
            "updated_at": null,
            "pivot": {
                "proyecto_id": 1,
                "ciclo_id": 136
            },
            "familia_profesional": {
                "id": 18,
                "codigo": "MAM",
                "nombre": "MADERA, MUEBLE Y CORCHO",
                "created_at": null,
                "updated_at": null
            }
        }
    ],
    "estudiantes": []
},
*/