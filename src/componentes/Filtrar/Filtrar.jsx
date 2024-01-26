import React, {useState, useContext} from 'react';
import GeneroContext from '../../contexto/GeneroContext';
import PlataformaContext from '../../contexto/PlataformaContext';

import Select from '../Select/Select';
import genero from '../../mocks/mock-genero';
import plataforma from '../../mocks/mock-plataforma';

const Filtrar = (props) => {
    
    const [generos, setGeneros] = useState(genero);
    const [plataformas, setPlataformas] = useState(plataforma);

    const [generoContext, setGeneroContext] = useContext(GeneroContext);
    const [plataformaContext, setPlataformaContext] = useContext(PlataformaContext);

    function manejarDatos(tipo, dato){
        switch (tipo) {
            case 'Género':
                setGeneroContext(dato);
                console.log(generoContext);
                break;
            case 'Plataforma':
                setPlataformaContext(dato);
                console.log(plataformaContext);
                break;
        }
        console.log(dato);

    }

    return(
        <div>
            <h2>{props.titulo}</h2>
            <div className='col-12'>
                <Select titulo="Género" lista={generos} manejardatos={manejarDatos}></Select>
            </div>
            <div className='col-12'>
                <Select titulo="Plataforma" lista={plataformas} manejardatos={manejarDatos}></Select>
            </div>
        </div>
    )
};
export default Filtrar;