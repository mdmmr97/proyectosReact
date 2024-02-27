import TarjetaComida from "../TarjetaComida/TarjetaComida";

const MostrarComida = (props) => {
    function Mostrar(comida){
        return  <TarjetaComida key={comida.idMeal}
                               id={comida.idMeal}
                               imagen={comida.strMealThumb} 
                               nombre={comida.strMeal} 
                />
    }
    //Mostramos la lista de comidas que obtenemos del endpoint, si no hay resultados mostramos un mensaje
    return (
        <div className="row py-3">
            {props.lista !== null ? 
                props.lista.map(Mostrar) 
            : 
                <p>No hay resultados</p>
            }
        </div>
    )
};
export default MostrarComida;