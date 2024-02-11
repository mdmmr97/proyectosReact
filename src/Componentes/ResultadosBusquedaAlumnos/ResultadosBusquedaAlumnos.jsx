import useAlumnos from "../../Hooks/useAlumnos";
import AjaxLoader from "../../AjaxLoader/AjaxLoader";

import AlumnoMinCard from "../AlumnoMinCard/AlumnoMinCard";

const ResultadosBusquedaAlumnos = () => {
    const {busqueda, datosAlumnos} = useAlumnos();

    function mostrarAlumnos(alumno) {
        return <AlumnoMinCard key={alumno.id}
                              nombre={alumno.nombre}
                              apellidos={alumno.apellidos}
                              avatar={alumno.avatar}
                              idiomas={alumno.idiomas}
                              ciclo={alumno.ciclos}
                              informacion={alumno.sobre_mi}
              />
    }

    return (
        <div className="row">
            {busqueda ? <AjaxLoader></AjaxLoader> : 
            <div className="col-12">
                <h3 className="col-12">Resultados</h3>
                <div className="row">
                    {datosAlumnos.map(mostrarAlumnos)}
                </div>
            </div>
            }
        </div>
    );
};
export default ResultadosBusquedaAlumnos;
/*
	{ 
    "id": 1,
	  "nombre": "José",
	  "apellidos": "García Sánchez",
	  "email": "torphy.serenity@example.com",
	  "avatar":"https://source.unsplash.com/random/200x200/?{persona}",
	  "ciclos": [{"id":1, 
               "codCiclo":"DAW",  
               "nombre": "Desarrollo de aplicaciones web",
               "familia_profesional" : {"id":13, "nombre":"Informática y comunicaciones"}
              }],
    "sobre_mi" : "Buen profesional y trabajador. Me gusta el trabajo en equipo",
    "idiomas" : [{"alpha2":"EN", "native_name": "Inglés",  "nivel": "B1", "certificado" :1},
                 {"alpha2":"FR", "native_name": "Francés", "nivel": "B2", "certificado" :1}],
    "competencias" : [{"nombre": "Comunicación", "nivel": 30},
            {"nombre": "Inteligencia emocional", "nivel": 10},
            {"nombre": "Pensamiento crítico", "nivel": 10},
            {"nombre": "Responsabilidad", "nivel": 20},
            {"nombre": "Gestión del cambio", "nivel": 10},
            {"nombre": "Creatividad", "nivel": 20}]
	},
*/