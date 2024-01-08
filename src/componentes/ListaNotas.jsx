import { useState } from 'react'
import Nota from './Nota'
import NotaForm from './NotaForm'
import notas from '../mock-notas'

const ListaNotas = () => {
    const [listanotas, setNotas] = useState(notas)
    const [mostrarTodos, setMostrarTodos] = useState('true');

    function manejarMostrarNotas() {
        setMostrarTodos(!mostrarTodos);
    }

    function filtrarNotas(nota) {
        if (mostrarTodos) return true;
        else return nota.importante;
    }

    function devolverNota(nota) {
        return <Nota key={nota.id} nota={nota}></Nota>;
    }

    function manejarAccion(nota) {
        console.log("Añadimos ", nota," a la lista de notas");
        nota.id = listanotas.length + 1;
        setNotas(listanotas.push(nota));
        console.log("Ahora la lista de notas es: ", listanotas);
    }

    return (
        <div>
            <h1>Notas</h1>
            <button onClick={manejarMostrarNotas}>{mostrarTodos ? "Mostrar importantes" : "MostrarTodos"}</button>
            <ul>
                {notas.filter(filtrarNotas).map(devolverNota)}
            </ul>
            <NotaForm manejarAccion={manejarAccion}></NotaForm>
        </div>
    )
};
export default ListaNotas;