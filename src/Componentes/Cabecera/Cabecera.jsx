import './Cabecera.css'
import Logo from '../../assets/Imagenes/logoRestaurante.png'
import {Link} from "wouter";

const Cabecera = () => {
    return (
        <div className="cabecera">
            <nav className="navbar bg-body-tertiary p-0 m-0">
                <div className="container-fluid p-0 m-0">
                    <Link to='/' className="navbar-brand">
                        <img src={Logo} alt="Logo" height="50" className="d-inline-block align-text-top me-2"/>
                        preparaTuComida<span>.com</span>
                    </Link>
                </div>
            </nav>
        </div>
    )
};
export default Cabecera