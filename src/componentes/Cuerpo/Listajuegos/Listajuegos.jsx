import { json } from "stream/consumers";
import { getAllJuegos } from "../Juego/getAllJuegos";
import Juego from "../Juego/Juego";
import { useEffect } from "react";

const ListaJuegos = () => {
    const [listajuegos, setListajuegos] = useState([]);

    function obtenerJuegos(){
        getAllJuegos().then(juegos =>{
            setListajuegos(juegos);
        });
    }

    useEffect(obtenerJuegos,[]);

    function mostrarJuegos(juego){
        return <Juego key={juego.id} post={juego}></Juego>
    };
    return (
        <ul>
            {listajuegos.map(mostrarJuegos)}
        </ul>
    );
};
export default ListaJuegos;