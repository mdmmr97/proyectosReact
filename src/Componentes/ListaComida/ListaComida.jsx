import useBuscarComida from '../../Hook/useBuscarComida'
import useBuscarNombre from '../../Hook/useBuscarNombre'
import MostrarComida from '../MostrarComida/MostarComida'
import AjaxLoader from '../Ajax-loader/Ajax-Loader'

const ListaComida = () =>{
    const {buscando, resultadosComida} = useBuscarComida()
    //const {buscando, resultadosComida} = useBuscarNombre()
    //Pasamos la lista de comidas que obtenemos del endpoint. Como lo obtenido es un array de objetos, 
    //dentro de otro array (meals), pasamos el array de objetos directamente

    //La clase alturaLista es para que el contenedor de la lista de comidas tenga una altura fija y para poder 
    //hacer el LazyLoad y el Suspense del PiePagina funcione.(Esto es necesario ponerlo en el componente 
    //anterior al componente que queremos que haga el LazyLoad)
    return (
        <div className='alturaLista'>
            {buscando 
            ? <AjaxLoader></AjaxLoader>
            : <MostrarComida lista={resultadosComida.meals}></MostrarComida>
            }
        </div>
    )
};
export default ListaComida