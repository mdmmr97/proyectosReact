import './BotonesFiltros.css';
import React, { useState } from 'react';
//import { FamiliaProvider, useFamiliaContext } from '../../Contexto/contextoFamProf';

const BotonesFiltros = (props) => {
    //const {familiacontext, setFamiliaContext} = useFamiliaContext(FamiliaProvider);
    const [familia, setFamilia] = useState('');

    function guardarFamilia(e) {
      
    }

    return (
        <div className="checkbox-wrapper-11">
            <input value={props.id} name='r' type="checkbox" id={props.id} />
            <label htmlFor={props.id}>{props.nombre}</label>
        </div>  
    )
};
export default BotonesFiltros;