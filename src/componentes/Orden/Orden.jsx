const Orden = (props) => {
    return (
        <div>
            <div>
                <h3>{props.titulo}</h3>
                <form id="formulario">
                    <select id="select" name="select">
                        <option value={'A..Z'}>{'A..Z'}</option>
                        <option value={'Z..A'}>{'Z..A'}</option>
                    </select>
                </form>
            </div>
        </div>
    );
};
export default Orden;