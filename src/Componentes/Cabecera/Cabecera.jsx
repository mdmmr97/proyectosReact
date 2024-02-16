import LogoMarcaPersonal from '../../assets/Imagenes/mp-logoNaranja100.png'
import { IdiomaProvider, useIdiomaContext } from '../../Contexto/contextoIdiomas';
import BanderaEspana from '../../assets/Imagenes/banderaSP.svg'
import BanderaUK from '../../assets/Imagenes/banderaUK.svg'

import {Link} from "wouter";

const Cabecera = () => {
    const { cambiarIdioma} = useIdiomaContext(IdiomaProvider);

    function darIdioma(idioma){
        cambiarIdioma(idioma);
        console.log("Idioma seleccionado: " + idioma);
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid navegador">
                <Link to="/" className="navbar-brand">
                    <div className='col-2 d-flex justify-content-center'>
                        <img className="m-1" src={LogoMarcaPersonal} alt="Logo Pagina" width='50px' height='50px'/>
                    </div>
                </Link>
                <h1 className='col-8 text-center'>Marca Personal FP</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-1 ">
                            <div className='d-flex justify-content-end justify-content-lg-center' onClick={() => darIdioma('es')}>
                                <img src={BanderaEspana} alt="Idioma Español" width={40} height={30}/>
                            </div>
                        </li>
                        <li className="nav-item mx-1">
                            <div className='d-flex justify-content-end justify-content-lg-center' onClick={() => darIdioma('en')}>
                                <img src={BanderaUK} alt="Idioma Ingles" width={40} height={30}/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Cabecera