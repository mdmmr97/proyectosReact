import React, { useContext, useState } from "react";

//Creamos el contexto
export const OrdenContext = React.createContext();

const VALOR_INICIAL = "A .. Z";
//Creamos el provider y el hook para usar el contexto en los componentes
export const OrdenProvider = ({ children }) => {
    //Creamos el estado que vamos a compartir con los componentes y que nos permitira cambiar el valor del contexto
    //cambiar el valor del contexto
    const [ordencontext, setContexto] = useState(VALOR_INICIAL);

    //Retornamos el provider con el valor del estado y la funcion que permite cambiar el valor del estado
    //siendo children el componente que va a tener acceso al contexto
    return (
        <OrdenContext.Provider value={{ ordencontext, setContexto }}>
            {children}
        </OrdenContext.Provider>
    );
};

//Creamos el hook para usar el contexto en los componentes
export const useOrdenContext = () => useContext(OrdenContext);
export default OrdenContext;