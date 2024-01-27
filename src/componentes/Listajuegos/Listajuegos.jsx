import React, { useState, useEffect, useContext } from "react";
import {OrdenProvider, useOrdenContext} from '../../contexto/OrdenContext';
import {GeneroProvider, useGeneroContext} from '../../contexto/GeneroContext';
import {PlataformaProvider, usePlataformaContext} from '../../contexto/PlataformaContext';

import Juego from "../Juego/Juego";
import { getAllPosts } from "../../servicios/posts/getAllPosts";
import AjaxLoader from "../AjaxLoader";

const ListaJuegos = () => {

    const [listaJuegos, setListaJuegos] = useState([]);
    const [buscando, setBuscando] = useState(false);

    const {ordencontext, setContexto} = useOrdenContext(OrdenProvider);
    const {generocontext, setGeneroContext} = useGeneroContext(GeneroProvider);
    const {plataformacontext, setPlataformaContext} = usePlataformaContext(PlataformaProvider);  

    function obtenerPosts(){

        setBuscando(true);
        getAllPosts().then(juegos => {
          
            setListaJuegos(juegos);
            setBuscando(false);
        });                    
    }

    useEffect(obtenerPosts, []);

    function filtrarGenero(juego){
        return generocontext === 'Todos' || juego.genre === generocontext;
    }

    function filtrarPlataforma(juego){
        return plataformacontext === 'Todos' || juego.platform === plataformacontext;
    }

    function ordenarTitulo(juego1, juego2){
        switch (ordencontext) {
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