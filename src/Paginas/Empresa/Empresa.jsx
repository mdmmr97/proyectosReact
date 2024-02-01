import { IdiomaProvider, useIdiomaContext } from '../../Contexto/contextoIdiomas';

const Empresa = () => {
    const {idiomacontext} = useIdiomaContext(IdiomaProvider);
    return (
        <div>
            <h1>{idiomacontext.PAGE_EMPRESAS_TITULO}</h1>
        </div>
    )
};
export default Empresa;