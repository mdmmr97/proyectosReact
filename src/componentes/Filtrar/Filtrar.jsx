import React, {useState} from 'react';
import '../../App.css'

//Importo el contexto y el hook del contexto para poder usarlo en el componente
import {GeneroProvider, useGeneroContext} from '../../contexto/GeneroContext';
import {PlataformaProvider, usePlataformaContext} from '../../contexto/PlataformaContext';

//Importo el componente Select y los mocks de genero y plataforma
import Select from '../Select/Select';
import genero from '../../mocks/mock-genero';
import plataforma from '../../mocks/mock-plataforma';

const Filtrar = (props) => {
    //Guardo la lista de generos y plataformas en un estado
    const [generos, setGeneros] = useState(genero);
    const [plataformas, setPlataformas] = useState(plataforma);

    //Obtengo el contexto del componente padre para poder guardar el genero y la plataforma
    //seleccionados en los filtros
    const {generocontext, setGeneroContext} = useGeneroContext(GeneroProvider);
    const {plataformacontext, setPlataformaContext} = usePlataformaContext(PlataformaProvider);

    //Funcion que se ejecuta cuando se selecciona un genero o una plataforma en los filtros
    //y guarda el genero Y la plataforma seleccionados en el contexto correspondiente
    function manejarDatos(tipo, dato){
        switch (tipo) {
            case 'Género':
                //Actualizo el estado del contexto con el genero seleccionado
                setGeneroContext(dato);
                console.log(generocontext);
                break;
            case 'Plataforma':
                //Actualizo el estado del contexto con la plataforma seleccionada
                setPlataformaContext(dato);
                console.log(plataformacontext);
                break;
        }
        console.log(dato);

    }

    //Muestro los filtros y les paso la lista de generos y plataformas y la funcion que se 
    //ejecuta cundo se selecciona un genero o una plataforma.
    return(
        <div>
            <h2>{props.titulo}</h2>
            <div className='col-12'>
                <Select titulo="Género" lista={generos} manejardatos={manejarDatos}></Select>
            </div>
            <div className='col-12'>
                <Select titulo="Plataforma" lista={plataformas} manejardatos={manejarDatos}></Select>
            </div>
        </div>
    )
};
export default Filtrar;