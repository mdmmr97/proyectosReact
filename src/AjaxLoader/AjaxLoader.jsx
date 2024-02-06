import Loader from '../assets/Imagenes/loading-white.gif';

const AjaxLoader = () => {
    return (
        <div className="ajax-loader">
            <img src={Loader} alt="Imagen de Carga" />
        </div>
    );
};
export default AjaxLoader;