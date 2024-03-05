import React, { useContext, useState } from "react";

//Creamos el contexto
const GeneroContext = React.createContext();

const VALOR_INICIAL = "Todos";

//Creamos el provider y el hook para usar el contexto en los componentes
export const GeneroProvider = ({ children }) => {
    //Creamos el estado que vamos a compartir con los componentes y que nos permitira cambiar el valor del contexto
    //cambiar el valor del contexto
    const [generocontext, setGeneroContext] = useState(VALOR_INICIAL);

    //Retornamos el provider con el valor del estado y la funcion que permite cambiar el valor del estado
    //siendo children el componente que va a tener acceso al contexto
    return (
        <GeneroContext.Provider value={{ generocontext, setGeneroContext }}>
            {children}
        </GeneroContext.Provider>
    );
};
//Creamos el hook para usar el contexto en los componentes
export const useGeneroContext = () => useContext(GeneroContext);
export default GeneroContext;
