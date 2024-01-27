import React, { useContext, useState } from "react";

const GeneroContext = React.createContext();

const VALOR_INICIAL = "Todos";

export const GeneroProvider = ({ children }) => {
    const [generocontext, setGeneroContext] = useState(VALOR_INICIAL);

    return (
        <GeneroContext.Provider value={{ generocontext, setGeneroContext }}>
            {children}
        </GeneroContext.Provider>
    );
};

export const useGeneroContext = () => useContext(GeneroContext);
export default GeneroContext;
