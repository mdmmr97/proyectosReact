import React, { useState } from 'react';
import plataforma from '../../../mocks/mock-genero';
const Select =(props)=> {
    const [plataformas, setPlataformas] = useState(plataforma);
    const tamaño = plataformas.length;

    return (
        <div>
            <h3>{props.titulo}</h3>
            <form id="formulario">
                <select id="select" name="select" size={props.lista.length}>
                    <option value="Hola" defaultValue={'hola'}>Hola</option>
                    <option value="Hola">Hola</option>
                    <option value="Hola">Hola</option>                
                </select>
            </form>
        </div>
    )
};
export default Select;