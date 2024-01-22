import React from 'react';
import '../App.css';
import rm from '../mock-rm.js';

const Municipio = (props) => {

    return (
        <div>
            <h1>{props.params.name.toUpperCase()}</h1>
            <h3>Poblacion: {rm[props.params.name].poblacion}</h3>
            <h3>Superficie: {rm[props.params.name].superficie} m2</h3>
            <h3>Elevacion: {rm[props.params.name].elevacion} m</h3>
            <img src={rm[props.params.name].bandera} alt="Bandera" />
        </div>
    )
}
export default Municipio;