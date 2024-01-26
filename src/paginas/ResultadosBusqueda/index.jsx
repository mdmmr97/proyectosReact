import ListaGifs from "../../componentes/ListaGifs";
//import { getGifs } from "../../servicios/getGifs";
//import { useState, useEffect } from "react";
import imagenLoader from '../../img/ajax-loader.gif';
import AjaxLoader  from "../../componentes/AjaxLoader";
import useGifs from "../../hooks/useGifs";

const ResultadosBusqueda = (props) => {

    const {buscando, listaGifs, setPage} = useGifs(props.params);

    function obtenerSiguientePagina(){
        setPage(prevPage => prevPage + 1);
    }

    //console.log(props);
    return (
        <div className="Home">
            {buscando 
                ? <AjaxLoader loader={imagenLoader}></AjaxLoader> 
                : <ListaGifs listaGifs={listaGifs}></ListaGifs>}
            <div>
                <button className="r-boton" onClick={obtenerSiguientePagina}>MAs resultados</button>
            </div>
        </div>
    )
}

export default ResultadosBusqueda;