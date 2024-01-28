import '../../App.css';
import ListaJuegos from "../Listajuegos/Listajuegos"
import ScrollUp from "../ScrollUp/ScrollUp"

//Componente que muestra el cuerpo de la pagina
const Cuerpo = () => {

    //Muestro la lista de juegos y el boton para volver al inicio de la pagina
    return (
        <div id='inicio' className='col-12 cuerpo'>
            <div className='row'>
                <div className="col-12">
                    <ListaJuegos></ListaJuegos>
                    <ScrollUp></ScrollUp>
                </div>
            </div>
        </div>
    )
}
export default Cuerpo;