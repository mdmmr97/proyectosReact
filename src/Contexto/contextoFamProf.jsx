import React, { useContext, useState } from "react";

const FamiliaContext = React.createContext();

export const FamiliaProvider = ({ children }) => {
    const [familiacontext, setFamiliaContext] = useState([]);

    return (
        <FamiliaContext.Provider value={{ familiacontext, setFamiliaContext }}>
            {children}
        </FamiliaContext.Provider>
    );
};
export const useFamiliaContext = () => useContext(FamiliaContext);
export default FamiliaContext;