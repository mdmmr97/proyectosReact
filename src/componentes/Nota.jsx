import {useState} from 'react';


const Nota = (props) => {
    return (
        <div>
            <h2>{props.nota.titulo}</h2>
            <p>{props.nota.contenido}</p>
        </div>
    );
};
export default Nota;