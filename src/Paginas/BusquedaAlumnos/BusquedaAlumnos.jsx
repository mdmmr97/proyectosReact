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
                    <div className="col-12 my-3">
                        <h3>Perfiles Competenciales</h3>
                    </div>
                    <ListaPerfilesCompetencias></ListaPerfilesCompetencias>
                    <div className="col-12 my-3">
                        <h3>Familias Profesionales</h3>
                    </div>
                    <ListaFamiliasProfesionales></ListaFamiliasProfesionales>
                    <div className="col-12 my-3">
                        <h3>Resultados</h3>
                    </div>
                    <ResultadosBusquedaAlumnos></ResultadosBusquedaAlumnos>
                </div>
            </FamiliaProvider>
        </div>
    )
};
export default BusquedaAlumnos;