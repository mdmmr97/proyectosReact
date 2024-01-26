import ListaGifs from "../../componentes/ListaGifs";
//import { getGifs } from "../../servicios/getGifs";
//import { useState, useEffect } from "react";
import imagenLoader from '../../img/ajax-loader.gif';
import AjaxLoader  from "../../componentes/AjaxLoader";
import useGifs from "../../hooks/useGifs";

import InfiniteScroll from "react-infinite-scroll-component";

const ResultadosBusqueda = (props) => {

    const {buscando, listaGifs, setPage} = useGifs(props.params);

    function obtenerSiguientePagina(){
        setPage(prevPage => prevPage + 1);
    }

    //console.log(props);
    return (
        <div className="Home">
            <InfiniteScroll
                dataLength={listaGifs.length}
                next={obtenerSiguientePagina}
                hasMore={true}
                loader={<AjaxLoader loader={imagenLoader}></AjaxLoader>}
            >
                <ListaGifs listaGifs={listaGifs}></ListaGifs>
            </InfiniteScroll>
        </div>
    )
}

export default ResultadosBusqueda;
