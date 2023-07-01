import React from "react";
import { createContext, useState } from "react";

export const ProductContext = createContext('');

export function ProductContextProvider({ children }) {
    const [Products, SetProducts] = useState('');

    console.log(Products);
    
 
 
    return (
        <ProductContext.Provider value={{Products , SetProducts}} >
            { children };
        </ProductContext.Provider>
    );
}
