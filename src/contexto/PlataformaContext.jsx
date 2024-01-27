import React, { useContext, useState } from "react";

const PlataformaContext = React.createContext();

const VALOR_INICIAL = "Todos";

export const PlataformaProvider = ({ children }) => {
    const [plataformacontext, setPlataformaContext] = useState(VALOR_INICIAL);

    return (
        <PlataformaContext.Provider value={{ plataformacontext, setPlataformaContext }}>
            {children}
        </PlataformaContext.Provider>
    );
};

export const usePlataformaContext = () => useContext(PlataformaContext);
export default PlataformaContext;