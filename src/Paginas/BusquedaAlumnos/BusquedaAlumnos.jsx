import { IdiomaProvider, useIdiomaContext } from '../../Contexto/contextoIdiomas';
import MenuEmpresa from "../../Componentes/MenuEmpresa/MenuEmpresa";

const BusquedaAlumnos = () => {
    const {idiomacontext} = useIdiomaContext(IdiomaProvider);
    return (
        <div>
            <MenuEmpresa></MenuEmpresa>
            <h2>Alumnos</h2>
        </div>
    )
};
export default BusquedaAlumnos;