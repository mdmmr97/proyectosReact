import React, { useState } from 'react';

const Select =(props)=> {
    const [valor, setValor] = useState('');

    return (
        <div>
            <h3>{props.titulo}</h3>
            <form id="formulario">
                <select id="select" name="select" size={props.lista.length}>
                    {props.lista.map((item, index) => {
                        return <option key={index} value={item}>{item}</option>
                    })}             
                </select>
            </form>
        </div>
    )
};
export default Select;