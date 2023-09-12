import { createContext, useState } from "react";


export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    const [count, setCount] = useState(0); /* contador del carrito*/
    
    return ( /* dentro del proveedor con value, proveemos a toda la app con la informacion del contador carrito*/
        <ShoppingCartContext.Provider value = {{ 
            count,
            setCount
        }}> 
            {children}
        </ShoppingCartContext.Provider>
        
    )
}

