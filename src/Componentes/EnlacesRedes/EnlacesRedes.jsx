const EnlacesRedes = (props) => {
    return (
        <div className="col-1">
            <a href={props.enlace}>
                <i className={props.tipo}></i>
            </a>
        </div>
    );
};
export default EnlacesRedes;