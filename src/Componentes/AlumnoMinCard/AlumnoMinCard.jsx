import './AlumnoMinCard.css';
import IdiomaAlumno from '../IdiomaAlumno/IdiomaAlumno';

const AlumnoMinCard = (props) => {

    function ObtenerIdiomas(idiomas) {
        return <IdiomaAlumno key={idiomas.alpha2} 
                             id={idiomas.alpha2} 
                             nombre={idiomas.native_name}
                             nivel={idiomas.nivel}
                             certificado={idiomas.certificado}
               />
    }

    function ObtenerCiclos(ciclo) {
        return <span data-toggle="tooltip" data-placement="top" title={ciclo.nombre} key={ciclo.id}> {ciclo.codCiclo} |</span>
    }

    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="card m-2 mt-3 rounded-5">
                <div className="card-image2 text-center">
                    <img src={props.avatar}
                         alt="Alumno"
                    />
                </div>
                <h5 className="card-title text-center mx-0">{props.nombre} {props.apellidos}</h5>
                <div className="card-body m-0 p-2 ">
                    {props.idiomas.map(ObtenerIdiomas)}
                    <p className="card-text"><span className="by-name">Perfiles:</span></p>
                    <p className="card-text"><span className="by-name">Ciclos:</span>{props.ciclo.map(ObtenerCiclos)}</p>     
                </div>
                <div className="card-footer m-0 p-1">
                    <p>{props.informacion}</p>
                </div>
            </div>
        </div>
    );
}
export default AlumnoMinCard;