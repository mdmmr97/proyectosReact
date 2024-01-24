import Juego from "../Juego/Juego";
const ListaJuegos = (props) => {

    function mostrarJuegos(juego){
        console.log(juego.id);
        //return <Juego key={juego.id} juego={juego}></Juego>;
    };

    return (
        <div className="row">
            <p>{mostrarJuegos(props.juegos)}</p>
        </div>
    );
};
export default ListaJuegos;

/*{props.juegos.map(mostrarJuegos)} */