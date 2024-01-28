import React, { useState } from 'react';
import '../../App.css'
import {OrdenProvider, useOrdenContext} from '../../contexto/OrdenContext';

//Con este componente muestro en un Select las opciones para ordenar los titulos
//de los juegos y luego guardo el valor seleccionado en un estado y actualizo el contexto
//del componente padre
const Ordenar = (props) => {
    const [orden, setOrden] = useState('');

    const {ordencontext, setContexto} = useOrdenContext(OrdenProvider);

    //Cuando el usuario selecciona una opcion del Select, guardamos el valor en un estado
    //y actualizamos el contexto del componente padre
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
