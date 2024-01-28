import React, { useState, useEffect, useContext } from "react";
import '../../App.css';
//Importo el contexto y el hook del contexto para poder usarlo en el componente
import {OrdenProvider, useOrdenContext} from '../../contexto/OrdenContext';
import {GeneroProvider, useGeneroContext} from '../../contexto/GeneroContext';
import {PlataformaProvider, usePlataformaContext} from '../../contexto/PlataformaContext';

//Importo el componente Juego, getAllPosts, con el que obtengo la lista de juegos, y
//el componente AjaxLoader, que muestro mientras se estan buscando los juegos
import Juego from "../Juego/Juego";
import { getAllPosts } from "../../servicios/posts/getAllPosts";
import AjaxLoader from "../AjaxLoader";

//Con este componente cargo la lista de juegos, aplico los filtros y paso los juegos filtrados
//al componente Juego para que los muestre
const ListaJuegos = () => {

    //Guardo la lista de juegos en un estado, y creao un estado para saber si estoy buscando
    //juegos o no
    const [listaJuegos, setListaJuegos] = useState([]);
    const [buscando, setBuscando] = useState(false);

    //Obtengo el contexto del componente padre para poder aplicar los filtros
    const {ordencontext, setContexto} = useOrdenContext(OrdenProvider);
    const {generocontext, setGeneroContext} = useGeneroContext(GeneroProvider);
    const {plataformacontext, setPlataformaContext} = usePlataformaContext(PlataformaProvider);  

    //Obtengo la lista de juegos y la guardo en el estado
    function obtenerPosts(){

        setBuscando(true);
        getAllPosts().then(juegos => {
          
            setListaJuegos(juegos);
            setBuscando(false);
        });                    
    }

    //Cuando se monta el componente obtengo la lista de juegos
    useEffect(obtenerPosts, []);

    //Compruebo si el juego cumple con el filtro de genero pasado por el contexto
    function filtrarGenero(juego){
        return generocontext === 'Todos' || juego.genre === generocontext;
    }

    //Compruebo si el juego cumple con el filtro de plataforma pasado por el contexto
    function filtrarPlataforma(juego){
        return plataformacontext === 'Todos' || juego.platform === plataformacontext;
    }

    //Ordeno los juegos por titulo segun el orden pasado por el contexto
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

    //Muestro el componente Juego con los datos del juego
    function mostrarJuegos(juego){
        return <Juego key={juego.id} juego={juego}></Juego>;
    };

    //Muestro el componente AjaxLoader mientras se estan buscando los juegos, y
    //muestro la lista de juegos filtrados cuando se termina de buscar
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