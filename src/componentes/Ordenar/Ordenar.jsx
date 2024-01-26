import React, { useState, useContext } from 'react';
import OrdenContext from '../../contexto/OrdenContext';

const Ordenar = (props) => {
    const VALOR_INICIAL = 'A .. Z';
    const [orden, setOrden] = useState('');

    let ordenContext = useContext(OrdenContext);

    function guardarOrden(e){
        e.preventDefault();
        setOrden(e.target.value);
        console.log(e.target.value);

        ordenContext = e.target.value;
        console.log(ordenContext);
    }

    return (
    <div>
        <div>
            <h3>{props.titulo}</h3>
            <select id="select" name="select" value={orden} onChange={guardarOrden}>
                <option value={'Z .. A'} >{'Z .. A'}</option>
                <option value={'A .. Z'}>{'A .. Z'}</option>
            </select>
        </div>
    </div>
    )
};
export default Ordenar;
