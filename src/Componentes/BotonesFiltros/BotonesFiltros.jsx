import './BotonesFiltros.css';

const BotonesFiltros = (props) => {

    function ManejarBoton(e) {
        if(e.target.checked){
            props.guardar(e.target.value);
        }else{
            props.borrar(e.target.value);
        }
    }  

    return (
        <div className="checkbox-wrapper-11">
            <input value={props.id} name='r' type="checkbox" id={props.idBoton} onChange={ManejarBoton}/>
            <label htmlFor={props.idBoton}>{props.nombre}</label>
        </div>  
    )
};
export default BotonesFiltros;