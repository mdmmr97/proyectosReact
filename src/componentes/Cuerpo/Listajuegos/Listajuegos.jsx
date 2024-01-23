import { getAllPosts } from "../../../servicios/posts/getAllPosts";
import Juego from "../Juego/Juego";
import { useEffect } from "react";

const ListaJuegos = () => {

    function mostrarPosts(Posts){
        return <Juego></Juego>;
    };
    return (
        <ul className="row">
            <li className="col-4">
                <Juego titulo='Juego 1'></Juego>
            </li>
        </ul>
    );
};
export default ListaJuegos;