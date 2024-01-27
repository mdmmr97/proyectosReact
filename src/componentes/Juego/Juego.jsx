import '../../App.css';
const Juego = (props) => {

    const SEPARADOR = '-';

    function formatoFecha(fecha){

        let date = new Date(fecha);
        const dia = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        const mes = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        const anio = date.getFullYear();

        return dia + SEPARADOR + mes + SEPARADOR + anio;
    }

    return (
        <div className="col-3">
            <div className="card">
            <img src={props.juego.thumbnail} className="card-img-top" alt="Portada del Juego"/>
                <div className="card-body">
                    <h2 className="card-title">{props.juego.title}</h2>
                    <p className="card-text"><span>Plataforma: <br/></span>{props.juego.platform}</p>
                    <p className="card-text"><span>Lanzamiento: <br/></span>{formatoFecha(props.juego.release_date)}</p>
                    <p className="card-text"><span>Género: <br/></span>{props.juego.genre}</p>
                    <a href={props.juego.freetogame_profile_url} className="card-link">Descargatelo</a>
                </div>
            </div>
        </div>
    )
};
export default Juego;
