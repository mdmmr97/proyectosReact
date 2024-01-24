const Juego = (props) => {

    
    return (
        <div className="col-4">
            <div class="card" style="width: 18rem;">
                <img src={props.juego.thumbnail} class="card-img-top" alt="Portada del Juego"/>
                <div class="card-body">
                    <h2 class="card-title">{props.juego.title}</h2>
                    <p class="card-text"><span>Plataforma: </span>{props.juego.platform}</p>
                    <p class="card-text"><span>Lanzamiento: </span>{props.juego.release_date}</p>
                    <p class="card-text"><span>Género: </span>{props.juego.genre}</p>
                    <a href={props.juego.game_url} class="card-link">Descargatelo</a>
                </div>
            </div>
        </div>
    )
};
export default Juego;