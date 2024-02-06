import { IdiomaProvider, useIdiomaContext } from '../../Contexto/contextoIdiomas';
import MenuEmpresa from "../../Componentes/MenuEmpresa/MenuEmpresa";
import ListaFamiliasProfesionales from '../../Componentes/ListaFamiliasProfesionales/ListaFamiliasProfesionales';
import ResultadosBusquedaProyectos from '../../Componentes/ResultadosBusquedaProyectos/ResultadosBusquedaProyectos';

const BusquedaProyectos = () => {
    const {idiomacontext} = useIdiomaContext(IdiomaProvider);
    return (
        <div>
            <MenuEmpresa></MenuEmpresa>
            <ListaFamiliasProfesionales></ListaFamiliasProfesionales>
            <ResultadosBusquedaProyectos></ResultadosBusquedaProyectos>
        </div>
    )
};
export default BusquedaProyectos;