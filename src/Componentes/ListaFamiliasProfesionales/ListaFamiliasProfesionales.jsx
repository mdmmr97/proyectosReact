import useFamiliasProfesionales from "../../Hooks/useFamiliasProfesionales";
import AjaxLoader from "../../AjaxLoader/AjaxLoader";

const ListaFamiliasProfesionales = () => {
    const {busqueda, datosFamilias} = useFamiliasProfesionales();

    return (
        <div>
            {busqueda ? <AjaxLoader></AjaxLoader> : 
            <div>
                <ul>
                    {datosFamilias.map((familia, index) => {
                        return <li key={index}>{familia.nombre}</li>
                    })}
                </ul>
            </div>
            }
        </div>
    );
};
export default ListaFamiliasProfesionales;