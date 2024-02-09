import { FamiliaProvider } from '../../Contexto/contextoFamProf';

import MenuEmpresa from "../../Componentes/MenuEmpresa/MenuEmpresa";
import ListaPerfilesCompetencias from '../../Componentes/ListaPerfilesCompetenciales/ListaPerfilesCompetenciales';
import ListaFamiliasProfesionales from '../../Componentes/ListaFamiliasProfesionales/ListaFamiliasProfesionales';
import ResultadosBusquedaAlumnos from '../../Componentes/ResultadosBusquedaAlumnos/ResultadosBusquedaAlumnos';

const BusquedaAlumnos = () => {
    return (
        <div>
            <MenuEmpresa></MenuEmpresa>
            <FamiliaProvider>
                <div className='container-fluid'>
                    <ListaPerfilesCompetencias></ListaPerfilesCompetencias>
                    <ListaFamiliasProfesionales></ListaFamiliasProfesionales>
                    <ResultadosBusquedaAlumnos></ResultadosBusquedaAlumnos>
                </div>
            </FamiliaProvider>
        </div>
    )
};
export default BusquedaAlumnos;