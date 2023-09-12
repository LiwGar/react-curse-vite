import { createContext, useState } from "react";


export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    const [count, setCount] = useState(0); /* contador del carrito*/
    
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false); /* Abrir o cerrar el producto detail*/

    const openProductDetail = () => setIsProductDetailOpen(true); /* funcion que modifica isproductdetailopen para que sea false o true*/

    const closeProductDetail = () => setIsProductDetailOpen(false); /* funcion que modifica isproductdetailopen para que sea false o true*/


    return ( /* dentro del proveedor con value, proveemos a toda la app con la informacion del contador carrito*/
        <ShoppingCartContext.Provider value = {{ 
            count, setCount,
            openProductDetail, closeProductDetail,
            isProductDetailOpen,
        }}> 
            {children}
        </ShoppingCartContext.Provider>
        
    )
}

