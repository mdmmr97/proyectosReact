import ListaJuegos from "../Listajuegos/Listajuegos"
import ScrollUp from "../ScrollUp/ScrollUp"

const Cuerpo = () => {

    return (
        <div id='inicio' className='col-12'>
            <div className='row'>
                <div className="col-11">
                    <ListaJuegos></ListaJuegos>
                </div>
                <div className="col-1">
                    <ScrollUp></ScrollUp>
                </div>
            </div>
        </div>
    )
}
export default Cuerpo;