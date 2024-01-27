import React, { useState } from 'react';
import '../../App.css'
import {OrdenProvider, useOrdenContext} from '../../contexto/OrdenContext';

const Ordenar = (props) => {
    const [orden, setOrden] = useState('');

    const {ordencontext, setContexto} = useOrdenContext(OrdenProvider);

    function guardarOrden(e) {

        setOrden(e.target.value);
        console.log(e.target.value);

        setContexto(e.target.value);
        console.log(ordencontext);
    }

    return (
    <div>
        <div>
            <h3>{props.titulo}</h3>
            <select id="select" name="select" value={orden} onChange={guardarOrden}>
                <option value={'Z .. A'}>{'Z .. A'}</option>
                <option value={'A .. Z'}>{'A .. Z'}</option>
            </select>
        </div>
    </div>
    )
};
export default Ordenar;
