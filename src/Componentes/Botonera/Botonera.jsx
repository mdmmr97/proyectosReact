import { useState } from 'react';
import './Botonera.css'
import { BotonesProvider, useBotonesContext } from '../../Contexto/BotonesContex'

import letras from '../../Mocks/mocks-Letras'
const Botonera = () => {
    const [listaletras] = useState(letras);
    const { setBotonesContext } = useBotonesContext(BotonesProvider)

    const ElegirLetra = (e) => {
        console.log(e.target.innerText);
        setBotonesContext(e.target.innerText)
    }

    function mostrarLetra(letra) {
        return <li className='letra list-group-item' key={letra} onClick={ElegirLetra}>{letra}</li>
    }

    return (
        <div className='col-12 botonera d-flex align-items-center justify-content-center'>
            <ul className='list-group list-group-horizontal '>
                {listaletras.map(mostrarLetra)}
            </ul>
        </div>
    )
};
export default Botonera