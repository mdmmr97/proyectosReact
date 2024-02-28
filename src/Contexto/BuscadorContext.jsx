import React, { useContext, useState } from "react";

const BuscadorContext = React.createContext();

export const BuscadorProvider = ({ children }) => {
    //Creamos un estado para guardar la letra que se ha seleccionado en la botonera, por defecto la letra A
    const [buscadorcontext, setBuscadorContext] = useState(JSON.parse(localStorage.getItem("ultimaBusqueda")) || "");

    return (
        <BuscadorContext.Provider value={{ buscadorcontext, setBuscadorContext }}>
            {children}
        </BuscadorContext.Provider>
    );
};
export const useBuscadorContext = () => useContext(BuscadorContext);
export default BuscadorContext;