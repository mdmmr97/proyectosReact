import '../../App.css';
import ListaJuegos from "../Listajuegos/Listajuegos"
import ScrollUp from "../ScrollUp/ScrollUp"

const Cuerpo = () => {

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