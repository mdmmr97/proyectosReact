import { useState } from "react";
import Parte from "./Partes";

const Tema = (props) => {

   let total = 0

    function extraerPartes(parte) {
        total = total + parte.exercises
        return  <li><Parte key={parte.id} parte={parte}></Parte></li>;
    }

    return(
        <div>
            <p>{props.tema.name}</p>
            <ol>
                {props.tema.parts.map(extraerPartes)}
            </ol>
            <p>Total de ejercicos en el curso {total}</p>
        </div>
    )
}
export default Tema;