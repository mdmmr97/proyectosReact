import Select from "../Select/Select";

const Ordenar = (props) => {
    return (
        <div>
            <h2>{props.titulo}</h2>
            <div className='col-12'>
                <Select titulo="Título"></Select>
            </div>
        </div>
    )
};
export default Ordenar;