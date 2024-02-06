import { Link, Switch } from "wouter";
import { IdiomaProvider, useIdiomaContext } from '../../Contexto/contextoIdiomas';

const MenuEmpresa = () => {
    const {idiomacontext} = useIdiomaContext(IdiomaProvider);

    return (
        <nav class="navbar navbar-expand-sm">
            <div class="container-fluid navegador">
                <ul class="navbar-nav d-flex flex-row">
                    <li class="nav-item">
                        <Link to="/empresa" className="navbar-brand">
                            <h2>[{idiomacontext.PAGE_EMPRESAS_TITULO}]</h2>
                        </Link>
                    </li>
                    <li class="nav-item px-2">
                        <Link to="/empresa/proyectos"className="nav-link">{idiomacontext.PAGES_EMPRESAS_PROYECTOS}</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/empresa/alumnos" className="nav-link">{idiomacontext.PAGES_EMPRESAS_ALUMNOS}</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
export default MenuEmpresa;
