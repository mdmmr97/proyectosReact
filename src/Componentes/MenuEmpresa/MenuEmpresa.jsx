import { Link, Switch } from "wouter";
import { IdiomaProvider, useIdiomaContext } from '../../Contexto/contextoIdiomas';

const MenuEmpresa = () => {
    const {idiomacontext} = useIdiomaContext(IdiomaProvider);

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid navegador">
                <Link to="/" className="navbar-brand">
                    <div className='col-2 d-flex justify-content-center'>
                        <h2>[{idiomacontext.PAGE_EMPRESAS_TITULO}]</h2>
                    </div>
                </Link>
                <div className="justify-content-start" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-1 ">
                            <div className='d-flex justify-content-start'>
                                <Link to="/empresa/proyectos"className="nav-link">Proyectos</Link>                            
                            </div>
                        </li>
                        <li className="nav-item mx-1">
                            <div className='d-flex justify-content-start'>
                                <Link to="/empresa/alumnos" className="nav-link">Alumnos</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};
export default MenuEmpresa;