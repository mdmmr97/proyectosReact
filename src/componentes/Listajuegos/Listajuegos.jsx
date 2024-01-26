import React, { useState, useEffect, useContext } from "react";
import GeneroContext from "../../contexto/GeneroContext";
import PlataformaContext from "../../contexto/PlataformaContext";
import OrdenContext from "../../contexto/OrdenContext";

import Juego from "../Juego/Juego";
import { getAllPosts } from "../../servicios/posts/getAllPosts";
import AjaxLoader from "../AjaxLoader";

const ListaJuegos = () => {

    const [listaJuegos, setListaJuegos] = useState([]);
    const [buscando, setBuscando] = useState(false);

    const genero = useContext(GeneroContext);
    const plataforma = useContext(PlataformaContext);
    const ordenar = useContext(OrdenContext);

    function obtenerPosts(){

        setBuscando(true);
        getAllPosts().then(juegos => {
          
            setListaJuegos(juegos);
            setBuscando(false);
        });                    
    }

    useEffect(obtenerPosts, []);

    function filtrarGenero(juego){
        return genero === 'Todos' || juego.genre === genero;
    }

    function filtrarPlataforma(juego){
        return plataforma === 'Todos' || juego.platform === plataforma;
    }

    function ordenarTitulo(juego1, juego2){
        switch (ordenar) {
            case 'Z .. A':
                return juego2.title.localeCompare(juego1.title);
            case 'A .. Z':
                return juego1.title.localeCompare(juego2.title);
            default:
                return 0;
        }
    }

    function mostrarJuegos(juego){
        return <Juego key={juego.id} juego={juego}></Juego>;
    };

    return (
        <div className="col-12">
            {buscando ? 
                <AjaxLoader></AjaxLoader> 
            :
              <div className='row'>
                {listaJuegos.filter(filtrarGenero)
                            .filter(filtrarPlataforma)
                            .toSorted(ordenarTitulo)
                            .map(mostrarJuegos)}
              </div>
            }
        </div>
    );
};
export default ListaJuegos;