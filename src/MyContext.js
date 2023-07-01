import React from "react";
import { createContext, useState } from "react";

export const MyContext = createContext({});

export function MyContextProvider({ children }) {
    const [Info, SetInfo] = useState({});

    console.log(Info)
    
 
 
    return (
        <MyContext.Provider value={{ Info, SetInfo }} >
            { children }
        </MyContext.Provider>
    );
}
