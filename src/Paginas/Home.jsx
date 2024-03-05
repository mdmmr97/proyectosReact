import Filtros from '../Componentes/Filtros/Filtros';
import ListaPersonajes from '../Componentes/ListaPersonajes/ListaPersonajes';
import ScrollUp from "../Componentes/ScrollUp/ScrollUp";

import React, { Suspense } from 'react';
import LazyLoad from 'react-lazy-load';
import { GeneroProvider } from '../Contexto/GeneroContext';
import { OrdenProvider } from '../Contexto/OrdenContext';

const PiePagina = React.lazy( () => import('../Componentes/PiePagina/PiePagina'));

const Home = () => {
    
    return (
        <div>
            <GeneroProvider>
                <OrdenProvider>
                    <Filtros></Filtros>
                    <ListaPersonajes></ListaPersonajes>
                    <ScrollUp></ScrollUp>
                </OrdenProvider>
            </GeneroProvider>
            <Suspense fallback={"Cargando"}>
                <LazyLoad offset={100}>
                    <PiePagina></PiePagina>
                </LazyLoad>
            </Suspense>
        </div>
    )
};
export default Home
/*
<Suspense fallback={"Cargando"}>

</Suspense>
*/