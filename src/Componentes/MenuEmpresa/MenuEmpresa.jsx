import { Link, Switch } from "wouter";
import { IdiomaProvider, useIdiomaContext } from '../../Contexto/contextoIdiomas';

const MenuEmpresa = () => {
    const {idiomacontext} = useIdiomaContext(IdiomaProvider);

    return (
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid navegador">
                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item">
                        <Link to="/empresa" className="navbar-brand">
                            <h2>[{idiomacontext.PAGE_EMPRESAS_TITULO}]</h2>
                        </Link>
                    </li>
                    <li className="nav-item px-2">
                        <Link to="/empresa/proyectos"className="nav-link">{idiomacontext.PAGES_EMPRESAS_PROYECTOS}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/empresa/alumnos" className="nav-link">{idiomacontext.PAGES_EMPRESAS_ALUMNOS}</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
export default MenuEmpresa;
