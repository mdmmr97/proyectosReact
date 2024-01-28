import '../../App.css';
import React, { useState } from 'react';

//Con este componente muestro los datos pasados por props en un Select y luego 
//guardo el valor seleccionado en un estado y lo paso al componente padre
const Select =(props)=> {
    //Creo un estado para guardar el valor seleccionado
    const [valor, setValor] = useState('');

    function guardarSeleccion(e){
        //Guardo el valor seleccionado en el estado
        setValor(e.target.value);
        console.log( e.target.value);
        //Llamo a la funcion que me permite pasar los datos al componente padre y le paso
        //el titulo del select y el valor seleccionado
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


