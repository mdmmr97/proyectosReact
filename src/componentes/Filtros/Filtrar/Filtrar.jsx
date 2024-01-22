import Select from './Select'
import genero from '../../../mocks/mock-genero';
import plataforma from '../../../mocks/mock-genero';

const Filtrar = (props) => {
    


    return(
        <div>
            <h2>{props.titulo}</h2>
            <div className='col-12'>
                <Select titulo="Género"></Select>
            </div>
            <div className='col-12'>
                <Select titulo="Plataforma"></Select>
            </div>
        </div>
    )
};
export default Filtrar;