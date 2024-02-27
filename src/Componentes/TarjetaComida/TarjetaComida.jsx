import './TarjetaComida.css'
import { Link } from "wouter";
import Favoritos from '../Favoritos/Favoritos';

const TarjetaComida = (props) => {
    return (
        <div className='col-3 tarjetaComida'>
            <Link to={`/comida/${props.id}`}>
                <div>
                    <img src={props.imagen} alt={props.nombre} />
                    <h2>{props.nombre}</h2>
                </div>
            </Link>
            <Favoritos id={props.id} />   
        </div>
    )
}
export default TarjetaComida;