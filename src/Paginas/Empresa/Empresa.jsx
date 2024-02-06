import { IdiomaProvider, useIdiomaContext } from '../../Contexto/contextoIdiomas';
import MenuEmpresa from '../../Componentes/MenuEmpresa/MenuEmpresa';


const Empresa = () => {
    const {idiomacontext} = useIdiomaContext(IdiomaProvider);
    return (
        <div>
            <MenuEmpresa></MenuEmpresa>
        </div>
    )
};
export default Empresa;
