import React, { useEffect, useState } from 'react';
import Logo from '../../assets/Imagenes/mp-logoNaranja100.png';

import { IdiomaProvider, useIdiomaContext } from '../../Contexto/contextoIdiomas';
import { getAllPie } from '../../Servicios/posts/getAllPie';


const Pie = () => {
    const [busqueda, setBusqueda] = useState(false);
    const {idiomacontext} = useIdiomaContext(IdiomaProvider);
    const [datosPie, setDatosPie] = useState([]);

    function ObtenerPostPie(){
        setBusqueda(true);
        getAllPie().then(datos => {
            setDatosPie(datos);
            console.log(datos);
            setBusqueda(false);
        });
        console.log("Idioma seleccionado a: " + idiomacontext.FOOTER_PROYECT);
        console.log("datos pie a: " + datosPie.empresas);
    }
    useEffect(ObtenerPostPie, []);

    return (
        <footer>
            <div className="container-fluid">
                {busqueda ? <p>Cargando...</p> :
                <div className="d-flex justify-content-center">
                    <div>
                        <p>{idiomacontext.FOOTER_EMPRESAS}</p>
                        <p>{datosPie.empresas}</p>
                    </div>
                    <div>
                        <p>{idiomacontext.FOOTER_PROYECT}</p>
                        <p>{datosPie.proyectos}</p>
                    </div>
                    <div>
                        <p>{idiomacontext.FOOTER_ALUMNOS}</p>
                        <p>{datosPie.alumnos}</p>
                    </div>
                </div> 
                }
                <div className="text-center">
                    <a href="https://cifpcarlos3.es/es">
                        <h2>CIFP Carlos III</h2>
                    </a>
                    <p>
                        C/ Carlos III, 30201 - Cartagena | <a href="mailto:30019702@murciaeduca.es">30019702@murciaeduca.es</a> | <a href="tel:968321301">968321301</a>
                    </p>
                </div>
                <div className="text-center">  
                    <a href="https://www.facebook.com/cifpcarlos3">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://www.twitter.com/cifpcarlos3">
                        <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="https://www.instagram.com/cifpcarlos3">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.tiktok.com/@cifpcarlos3">
                        <i className="bi bi-tiktok"></i>
                    </a>
                    <a href="https://www.youtube.com/c/cifpcarlosiiicartagena">
                        <i className="bi bi-youtube"></i>
                    </a> 
                </div>
                <hr/>
                <div className="d-flex justify-content-center">
                    <img src={Logo} alt="Logo Pagina" width={40} height={40}/>
                    <p>
                        Marca Personal FP | {idiomacontext.FOOTER_MESSAGE} CFGS Desarrollo de Aplicaciones Web © 2023
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Pie