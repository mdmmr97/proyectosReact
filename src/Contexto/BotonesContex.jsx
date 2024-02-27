import React, { useContext, useState } from "react";

const BotonesContext = React.createContext();

export const BotonesProvider = ({ children }) => {
    //Creamos un estado para guardar la letra que se ha seleccionado en la botonera, por defecto la letra A
    const [botonescontext, setBotonesContext] = useState("A");

    return (
        <BotonesContext.Provider value={{ botonescontext, setBotonesContext }}>
            {children}
        </BotonesContext.Provider>
    );
};
export const useBotonesContext = () => useContext(BotonesContext);
export default BotonesContext;