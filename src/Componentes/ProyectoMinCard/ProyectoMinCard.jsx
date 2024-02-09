import './ProyectoMinCard.css';

const ProyectoMinCard = (props) => {

    function ObtenerNombre(alumno) {
        return alumno !== null ? <p className='card-text mb-0' key={alumno.id}>{alumno.nombre} {alumno.apellidos}</p> : <p></p>;
    }

    function ObtenerCiclos(ciclo) {
        return <span data-toggle="tooltip" data-placement="top" title={ciclo.nombre} key={ciclo.id}> {ciclo.codCiclo} |</span>
    }

    return (
        <div className="col-6 col-sm-4 col-md-3">
            <div className="card m-2 mt-3 rounded-5">
                <div className="card-image text-center">
                    <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJveWVjdG98fHx8fHwxNzA3NDY1NTAz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200" 
                         alt="Proyecto"
                    />
                </div>
                <h5 className="card-title text-center mx-0">{props.nombre}</h5>
                <div className="card-body m-0">
                    <h6 className='card-subtitle'>Alumnos</h6>
                    {props.alumnos.map(ObtenerNombre)}
                    <p className="card-text mt-1"><span className="by-name">Tutor:</span> {props.tutor}</p>
                    <p className="card-text"><span className="by-name">Ciclos:</span>{props.ciclo.map(ObtenerCiclos)}</p>     
                </div>
            </div>
        </div>
    );
}
export default ProyectoMinCard;