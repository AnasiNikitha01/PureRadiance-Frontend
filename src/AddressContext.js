import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const AddressContext = createContext([]);

export function AddressContextProvider({ children }){
    const [Address, SetAddress] = useState([]);
    
    useEffect(()=>{
        var i = localStorage.getItem('Address');
        if(i) {
            SetAddress(JSON.parse(i));
        }
        //    localStorage.removeItem('Address');
    },[])
    console.log(Address);

    return(
    <AddressContext.Provider value={[ Address,SetAddress ]}>
           {children};
    </AddressContext.Provider>
    );
}