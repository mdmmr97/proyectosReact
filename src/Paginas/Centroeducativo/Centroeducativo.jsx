import { IdiomaProvider, useIdiomaContext } from '../../Contexto/contextoIdiomas';

const Centroeducativo = () => {
    const { idiomacontext } = useIdiomaContext(IdiomaProvider);
    return (
        <div>
            <h1>{idiomacontext.PAGE_CENTRO_TITULO}</h1>
        </div>
    )
};
export default Centroeducativo;