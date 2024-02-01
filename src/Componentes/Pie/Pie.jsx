import React, { useEffect, useState } from 'react';
import Logo from '../../assets/Imagenes/mp-logoNaranja100.png';
import datos from '../../Mocks/mock-pie';


const Pie = () => {
    const [datosPie, setDatosPie] = useState(datos);
    return (
        <footer>
            <div className="container-fluid">
                <div className="d-flex justify-content-center">
                    <div>
                        <p>Empresas</p>
                        <p>{datosPie.empresas}</p>
                    </div>
                    <div>
                        <p>Proyectos</p>
                        <p>{datosPie.proyectos}</p>
                    </div>
                    <div>
                        <p>Alumnos</p>
                        <p>{datosPie.alumnos}</p>
                    </div>
                </div>
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
                        Marca Personal FP | Diseño Web CFGS Desarrollo de Aplicaciones Web © 2023
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Pie