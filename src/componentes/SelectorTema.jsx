import { useState } from "react";

const SelectorTema = (props) => {             

    const TEMA1 = "tema1";
    const TEMA2 = "tema2";

    const [temaSeleccionado, setTemaSeleccionado] = useState(props.tema);

    function asignarNota(event){
        props.manejarSeleccion(event.target.value);        
        setTemaSeleccionado(event.target.value);
    }

    return (
        <div  onChange={asignarNota} >
            <input id={TEMA1} type="radio" value={1} name="tema" defaultChecked={temaSeleccionado===1}/> Claro
            <input id={TEMA2} type="radio" value={2} name="tema" defaultChecked={temaSeleccionado===2}/> Oscuro
        </div>
    )
}
export default SelectorTema;