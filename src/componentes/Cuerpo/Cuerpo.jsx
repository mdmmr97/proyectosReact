import ListaJuegos from "./Listajuegos/Listajuegos"
import ScrollUp from "./ScrollUp/ScrollUp"

const Cuerpo = (props) => {

    return (
        <div id='inicio' className='col-12'>
            <ListaJuegos juegos={props.juegos}></ListaJuegos>
            <ScrollUp></ScrollUp>
        </div>
    )
}
export default Cuerpo