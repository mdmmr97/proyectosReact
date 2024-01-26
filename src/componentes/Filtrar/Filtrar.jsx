import React, {useState} from 'react';
import Select from '../Select/Select';
import genero from '../../mocks/mock-genero';
import plataforma from '../../mocks/mock-plataforma';

const Filtrar = (props) => {
    
    const [generos, setGeneros] = useState(genero);
    const [plataformas, setPlataformas] = useState(plataforma);

    return(
        <div>
            <h2>{props.titulo}</h2>
            <div className='col-12'>
                <Select titulo="Género" lista={generos}></Select>
            </div>
            <div className='col-12'>
                <Select titulo="Plataforma" lista={plataformas}></Select>
            </div>
        </div>
    )
};
export default Filtrar;