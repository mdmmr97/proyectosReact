import { BuscadorProvider, useBuscadorContext } from '../../Contexto/BuscadorContext'

const Buscador = () => {
    const { buscadorcontext, setBuscadorContext } = useBuscadorContext(BuscadorProvider);
    console.log(buscadorcontext);

    function GuardarBusqueda(e){
        console.log(e.target.value);
        setBuscadorContext(e.target.value);
    }

    return (
        
        <div>
            <input type="text" value={buscadorcontext} onChange={GuardarBusqueda}/>
        </div>
    );
}
export default Buscador;