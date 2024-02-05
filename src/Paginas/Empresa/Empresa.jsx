import { IdiomaProvider, useIdiomaContext } from '../../Contexto/contextoIdiomas';
import { Route, Switch} from 'wouter'

import MenuEmpresa from '../../Componentes/MenuEmpresa/MenuEmpresa';
import BusquedaProyectos from '../BusquedaProyectos/BusquedaProyectos';
import BusquedaAlumnos from '../BusquedaAlumnos/BusquedaAlumnos';


const Empresa = () => {
    const {idiomacontext} = useIdiomaContext(IdiomaProvider);
    return (
        <div>
            <header>
                <MenuEmpresa></MenuEmpresa>
            </header>
            <Switch>
                <Route path="/empresa/proyectos" component={BusquedaProyectos} />
                <Route path="/empresa/alumnos" component={BusquedaAlumnos} />
            </Switch>
           
        </div>
    )
};
export default Empresa;