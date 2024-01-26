import ListaJuegos from "../Listajuegos/Listajuegos"
import ScrollUp from "../ScrollUp/ScrollUp"

const Cuerpo = () => {

    return (
        <div id='inicio' className='col-12'>
            <ListaJuegos></ListaJuegos>
            <ScrollUp></ScrollUp>
        </div>
    )
}
export default Cuerpo;