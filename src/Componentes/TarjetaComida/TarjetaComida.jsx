import './TarjetaComida.css'
//Lo importamos para poder redirigir a la página de detalle de la comida
import { useLocation } from "wouter";
import Favoritos from '../Favoritos/Favoritos';

const TarjetaComida = (props) => {
    //Obtenemos la función setLocation para poder redirigir a la página de detalle de la comida
    const  [location, setLocation] = useLocation();

    //Función que redirige a la página de detalle de la comida
    function RutaDetalle(){
        setLocation(`/comida/${props.id}`);
    }

    return (
        <div className='col-4 d-flex justify-content-center'>
            <div className='tarjetaComida'>
                <div onClick={RutaDetalle}>
                    <img src={props.imagen} alt={props.nombre} />
                    <h2>{props.nombre}</h2>
                </div>
                <Favoritos id={props.id} />   
            </div>
        </div>
    )
}
export default TarjetaComida;