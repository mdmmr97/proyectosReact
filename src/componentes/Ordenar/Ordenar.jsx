const Ordenar = (props) => {
    return (
        <div>
        <div>
            <h3>{props.titulo}</h3>
            <form id="formulario">
                <select id="select" name="select">
                    <option value={'Z .. A'}>{'Z .. A'}</option>
                    <option value={'A .. Z'}>{'A .. Z'}</option>
                </select>
            </form>
        </div>
    </div>
    )
};
export default Ordenar;