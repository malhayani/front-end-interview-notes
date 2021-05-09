import React, { createContext, useState } from "react";

export const context = createContext();

const provider = ({ children }) => {
    const [strings, setStrings] = useState([
        "Quisque cursus, metus vitae pharetra",
        "Quisque cursus, metus vitae pharetra"
    ]);
    const addString = string => {
        setStrings([...strings, string]);
    };

    return (
        <context.Provider value={{ strings, addString }}>
            {children}
        </context.Provider>
    );
};

export default provider;