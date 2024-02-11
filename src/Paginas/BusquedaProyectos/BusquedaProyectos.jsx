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
                    <div className="col-12 my-3">
                        <h3>Familias Profesionales</h3>
                    </div>
                    <ListaFamiliasProfesionales></ListaFamiliasProfesionales>
                    <div className="col-12 my-3">
                        <h3>Resultados</h3>
                    </div>
                    <ResultadosBusquedaProyectos></ResultadosBusquedaProyectos>
                </div>
            </FamiliaProvider>
        </div>
    )
};
export default BusquedaProyectos;