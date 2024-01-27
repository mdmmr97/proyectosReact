import '../App.css';
import imagenLoader from '../img/ajax-loader.gif';

const AjaxLoader = () => {

    return (
        <div className='colajaxloader'>
            <img src={imagenLoader} alt="ajax-loader"/>
        </div>
    )
}

export default AjaxLoader;