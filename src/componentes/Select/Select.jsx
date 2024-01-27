import '../../App.css';
import React, { useState } from 'react';

const Select =(props)=> {
    const [valor, setValor] = useState('');

    function guardarSeleccion(e){

        setValor(e.target.value);
        console.log( e.target.value);
        props.manejardatos(props.titulo, e.target.value);
    }

    return (
        <div>
            <h3>{props.titulo}</h3>
            <select id="select" name="select" size={props.lista.length} value={valor} onChange={guardarSeleccion}>
                {props.lista.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                })}             
            </select>
        </div>
    )
};
export default Select;


