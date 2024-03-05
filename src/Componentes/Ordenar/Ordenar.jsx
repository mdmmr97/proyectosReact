import React, { useState } from 'react';
import {OrdenProvider, useOrdenContext} from '../../Contexto/OrdenContext';

const Ordenar = (props) => {
    const [orden, setOrden] = useState('');
    const {ordencontext, setContexto} = useOrdenContext(OrdenProvider);
    console.log(ordencontext);

    function guardarOrden(e) {

        setOrden(e.target.value);
        console.log(e.target.value);

        setContexto(e.target.value);
    }

    return (
    <div>
        <div>
            <h2>{props.titulo}</h2>
            <select id="select" name="select" value={orden} onChange={guardarOrden}>
                <option value={'A .. Z'}>{'A .. Z'}</option>
                <option value={'Z .. A'}>{'Z .. A'}</option>
            </select>
        </div>
    </div>
    )
};
export default Ordenar;
