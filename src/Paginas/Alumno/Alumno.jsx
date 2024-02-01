import { IdiomaProvider, useIdiomaContext } from '../../Contexto/contextoIdiomas';
const Alumno = () => {
    const { idiomacontext } = useIdiomaContext(IdiomaProvider);
    return (
        <div>
            <h1>{idiomacontext.PAGE_ALUMNO_TITULO}</h1>
        </div>
    )
};
export default Alumno;