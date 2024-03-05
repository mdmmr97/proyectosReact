import './Cabecera.css'
import Logo from '../../assets/img/starwars.png'
import {Link} from "wouter";

const Cabecera = () => {
    return (
        <div className="cabecera">
            <nav className="navbar bg-body-tertiary p-0 m-0">
                <div className="container-fluid p-0 m-0">
                    <Link to='/' className="navbar-brand m-0">
                        <img src={Logo} alt="Logo"/>
                    </Link>
                </div>
            </nav>
        </div>
    )
};
export default Cabecera