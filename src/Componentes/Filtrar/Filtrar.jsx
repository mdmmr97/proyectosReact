import React, {useState} from 'react';

import {GeneroProvider, useGeneroContext} from '../../Contexto/GeneroContext';
import genero from '../../Mocks/mock-genero';

const Filtrar = (props) => {
    const [generos, setGeneros] = useState(genero);
    const [valor, setValor] = useState('');
    const {generocontext, setGeneroContext} = useGeneroContext(GeneroProvider);
    console.log(generocontext);

    function manejarDatos(e){

        setValor(e.target.value);
        console.log( e.target.value);

        setGeneroContext(e.target.value);
    }

    return(
        <div>
            <h2>{props.titulo}</h2>
            <select id="select" name="select" value={valor} onChange={manejarDatos}>
                {generos.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                })}             
            </select>
        </div>
    )
};
export default Filtrar;