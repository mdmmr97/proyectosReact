import { IdiomaProvider, useIdiomaContext } from '../../Contexto/contextoIdiomas';
import MenuEmpresa from "../../Componentes/MenuEmpresa/MenuEmpresa";

const BusquedaProyectos = () => {
    const {idiomacontext} = useIdiomaContext(IdiomaProvider);
    return (
        <div>
            <MenuEmpresa></MenuEmpresa>
            <h2>Proyectos</h2>
        </div>
    )
};
export default BusquedaProyectos;