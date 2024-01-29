import LogoMarcaPersonal from '../assets/Imagenes/mp-logoNaranja100.png'
import BanderaEspana from '../assets/Imagenes/banderaSP.svg'
import BanderaUK from '../assets/Imagenes/banderaUK.svg'

import {Link} from "wouter";

const Cabecera = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={LogoMarcaPersonal} alt="Logo Pagina" width='50px' height='50px'/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li>
                            <h1>Marca Personal FP</h1>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img src={BanderaEspana} alt="Idioma Español" width={40} height={30}/>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img src={BanderaUK} alt="Idioma Español" width={40} height={30}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Cabecera