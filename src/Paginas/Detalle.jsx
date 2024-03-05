import usePersonaje from '../Hook/usePersonajeId'
import AjaxLoader from '../Componentes/Ajax-loader/Ajax-Loader'

const Detalle = (props) => {
    const {buscando, personaje} = usePersonaje(props.params.idPersonaje)

    function DarAfiliacion (afiliado, index) {
        return <li key={index}>{afiliado}</li>
    }

    return (
        <div className='py-4'>
            {buscando 
            ? <AjaxLoader></AjaxLoader>
            : <div className='row'>
                <div className='col-6 imagendetalle d-flex justify-content-center'>
                    <img src={personaje.image} alt={personaje.name} />
                </div>
                <div className='col-6 info d-flex flex-column'>
                    <h1>{personaje.name}</h1>
                    <h2>Afiliaciones</h2>
                    <ul>
                        {personaje.affiliations.map(DarAfiliacion)}
                    </ul>
                </div>
              </div>
            }
        </div>
    )
};
export default Detalle