//Con este use obtendremos la comida a la que pertenece el id que le pasamos
import useComida from '../Hook/useComida'
import AjaxLoader from '../Componentes/Ajax-loader/Ajax-Loader'

const Detalle = (props) => {
    //Extraemos el id de la caomida para buscar en el endpoint usando props.params.idMeal el cual se lo pasamos desde la ruta
    //y el id tendrá el nombre que le pusimos en la ruta a la variable
    const {buscando, comida} = useComida(props.params.idMeal)
    return (
        <div className='p-4'>
            {buscando 
            ? <AjaxLoader></AjaxLoader>
            : <div>
                <h2>{comida.strMeal}</h2>
                <h3><span>Categoria: </span>{comida.strCategory}</h3>
                <h3><span>Tipo: </span>{comida.strTags}</h3>
              </div>
            }
        </div>
    )
};
export default Detalle