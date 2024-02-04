import { Link } from 'wouter';

const ImagenHome = (props) => {
    return (
        <div className={`col-12 col-md-4 p-2 ${props.nombreclase}`}>
            <Link to={props.rutapagina}>
                <div className='tarjeta' texto={props.texto}>
                    <img src={props.imagen} alt={`imagen ${props.nombreclase}`} />
                </div>
            </Link>
        </div>
    );
};
export default ImagenHome;
