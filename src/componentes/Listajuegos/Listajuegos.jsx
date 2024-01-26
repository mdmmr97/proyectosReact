import React, { useState, useEffect } from "react";
import Juego from "../Juego/Juego";
import { getAllPosts } from "../../servicios/posts/getAllPosts";
import AjaxLoader from "../AjaxLoader";

const ListaJuegos = () => {

    const [listaJuegos, setListaJuegos] = useState([]);
    const [buscando, setBuscando] = useState(false);

    function obtenerPosts(){

        setBuscando(true);
        getAllPosts().then(juegos => {
          
            setListaJuegos(juegos);
            setBuscando(false);
        
        });                    
    }

    useEffect(obtenerPosts, []);

    function mostrarJuegos(juego){
        //console.log(juego.id);
        return <Juego key={juego.id} juego={juego}></Juego>;
    };

    return (
        <div className="col-12">
            {buscando ? 
                <AjaxLoader></AjaxLoader> 
            :
              <div className='row'>
                {listaJuegos.map(mostrarJuegos)}
              </div>
            }
        </div>
    );
};
export default ListaJuegos;