import React from "react";
import { createContext, useState,useEffect } from "react";

export const CartContext = createContext([]);

export function CartContextProvider({ children }) {
    const [cart, setcart] = useState([]);

    useEffect(()=>{
        var items = localStorage.getItem('cart');
        if(items) {
            setcart(JSON.parse(items));
        }
    //    localStorage.removeItem('cart');
    },[])

    console.log(cart);
    
 
 
    return (
        <CartContext.Provider value={[ cart , setcart ]} >
            { children };
        </CartContext.Provider>
    );
}
