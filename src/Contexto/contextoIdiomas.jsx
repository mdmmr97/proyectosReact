import React, { useContext, useState } from "react";
import english from '../Idiomas/Ingles';
import spanish from '../Idiomas/Espanol';

const IdiomaContext = React.createContext();

export const IdiomaProvider = ({ children }) => {
    const [idiomacontext, setIdiomaContext] = useState(spanish);

    const cambiarIdioma = (idioma) => {
        switch (idioma) {
            case 'es':
                setIdiomaContext(spanish);
            break;
            case 'en':
                setIdiomaContext(english);
            break;
        }
    };

    

    return (
        <IdiomaContext.Provider value={{ idiomacontext, cambiarIdioma }}>
            {children}
        </IdiomaContext.Provider>
    );
};
export const useIdiomaContext = () => useContext(IdiomaContext);
export default IdiomaContext;