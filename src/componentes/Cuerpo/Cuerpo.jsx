import ListaJuegos from "./Listajuegos/Listajuegos"

const Cuerpo = () => {
    return (
        <div className='col-12'>
            <ListaJuegos></ListaJuegos>
            <button className='btn btn-primary'>Nuevo Juego</button>
        </div>
    )
}
export default Cuerpo