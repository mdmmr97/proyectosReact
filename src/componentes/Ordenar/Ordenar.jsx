import Orden from "../Orden/Orden";

const Ordenar = (props) => {
    return (
        <div>
            <h2>{props.titulo}</h2>
            <div className='col-12'>
                <Orden titulo="Título" lista={null}></Orden>
            </div>
        </div>
    )
};
export default Ordenar;