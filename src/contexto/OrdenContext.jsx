import React, { useContext, useState } from "react";

export const OrdenContext = React.createContext();

const VALOR_INICIAL = "";

export const OrdenProvider = ({ children }) => {
    const [ordencontext, setContexto] = useState(VALOR_INICIAL);

    return (
        <OrdenContext.Provider value={{ ordencontext, setContexto }}>
            {children}
        </OrdenContext.Provider>
    );
};

export const useOrdenContext = () => useContext(OrdenContext);
export default OrdenContext;