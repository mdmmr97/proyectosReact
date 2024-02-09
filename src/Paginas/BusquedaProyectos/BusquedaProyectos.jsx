import { FamiliaProvider } from '../../Contexto/contextoFamProf';

import MenuEmpresa from "../../Componentes/MenuEmpresa/MenuEmpresa";
import ListaFamiliasProfesionales from '../../Componentes/ListaFamiliasProfesionales/ListaFamiliasProfesionales';
import ResultadosBusquedaProyectos from '../../Componentes/ResultadosBusquedaProyectos/ResultadosBusquedaProyectos';

const BusquedaProyectos = () => {
    return (
        <div>
            <MenuEmpresa></MenuEmpresa>
            <FamiliaProvider>
                <div className='container-fluid'>
                    <ListaFamiliasProfesionales></ListaFamiliasProfesionales>
                    <ResultadosBusquedaProyectos></ResultadosBusquedaProyectos>
                </div>
            </FamiliaProvider>
        </div>
    )
};
export default BusquedaProyectos;