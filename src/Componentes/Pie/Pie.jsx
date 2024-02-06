import React, { useEffect, useState } from 'react';
import Logo from '../../assets/Imagenes/mp-logoNaranja100.png';

import { IdiomaProvider, useIdiomaContext } from '../../Contexto/contextoIdiomas';
import usePie from '../../Hooks/usePie';
import DatosFoter from '../DatosFoter/DatosFoter';
import EnlacesRedes from '../EnlacesRedes/EnlacesRedes';


const Pie = () => {
    const {idiomacontext} = useIdiomaContext(IdiomaProvider);
    const {busqueda, datosPie} = usePie();

    return (
        <footer>
            <div className="container-fluid">
                {busqueda ? <p>Cargando...</p> :
                <div className="d-flex justify-content-center">
                    <div className='col-3'></div>
                    <DatosFoter Nombre={idiomacontext.FOOTER_EMPRESAS} Cantidad={datosPie.empresas}/>
                    <DatosFoter Nombre={idiomacontext.FOOTER_PROYECT} Cantidad={datosPie.proyectos}/>
                    <DatosFoter Nombre={idiomacontext.FOOTER_ALUMNOS} Cantidad={datosPie.alumnos}/>
                    <div className='col-3'></div>
                </div> 
                }
                <div className="text-center centro">
                    <a href="https://cifpcarlos3.es/es">
                        <h2>CIFP Carlos III</h2>
                    </a>
                    <p>
                        C/ Carlos III, 30201 - Cartagena | <a href="mailto:30019702@murciaeduca.es">30019702@murciaeduca.es</a> | <a href="tel:968321301">968321301</a>
                    </p>
                </div>
                <div className="row d-flex justify-content-center redes">  
                    <EnlacesRedes enlace="https://www.facebook.com/cifpcarlos3" tipo="bi bi-facebook"/>
                    <EnlacesRedes enlace="https://www.twitter.com/cifpcarlos3" tipo="bi bi-twitter-x"/>
                    <EnlacesRedes enlace="https://www.instagram.com/cifpcarlos3" tipo="bi bi-instagram"/>
                    <EnlacesRedes enlace="https://www.tiktok.com/@cifpcarlos3" tipo="bi bi-tiktok"/>
                    <EnlacesRedes enlace="https://www.youtube.com/c/cifpcarlosiiicartagena" tipo="bi bi-youtube"/>
                </div>
                <hr/>
                <div className="row d-flex justify-content-center copi">
                    <div className='col-1 d-flex justify-content-end align-items-center pe-0'>
                        <img  src={Logo} alt="Logo Pagina" width={40} height={40}/>
                    </div>
                    <div className='col-8 d-flex align-items-center m-0'>
                        <p>
                            Marca Personal FP | {idiomacontext.FOOTER_MESSAGE} CFGS Desarrollo de Aplicaciones Web © 2024
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Pie