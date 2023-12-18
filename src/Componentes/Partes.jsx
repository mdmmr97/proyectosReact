const Parte = (props) => {
    return(
        <div>
            <p><strong>{props.parte.name}.</strong> Ejercicios: {props.parte.exercises}</p>
        </div>
    )
}
export default Parte;