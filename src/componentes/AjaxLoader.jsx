import '../App.css';
import imagenLoader from '../img/ajax-loader.gif';

//Con este componente muestro un loader mientras se cargan los datos de la API
const AjaxLoader = () => {
    return (
        <div className='colajaxloader'>
            <img src={imagenLoader} alt="ajax-loader"/>
        </div>
    )
}

export default AjaxLoader;