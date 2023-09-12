import { createContext, useState } from "react";


export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    const [count, setCount] = useState(0); /* Shopping Cart, contador*/
    
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false); /* Product Detail, abrir/cerrar*/

    const openProductDetail = () => setIsProductDetailOpen(true); /* Product Detail, abrir/cerrar*/

    const closeProductDetail = () => setIsProductDetailOpen(false); /* Product Detail, abrir/cerrar*/

    const [productToShow, setProductToShow] = useState({}); /* Product Detail, mostrar detalle del producto*/

    return ( /* dentro del proveedor con value, proveemos a toda la app con la informacion del contador carrito*/
        <ShoppingCartContext.Provider value = {{ 
            count, setCount,
            openProductDetail, closeProductDetail,
            isProductDetailOpen,
            productToShow, setProductToShow,
        }}> 
            {children}
        </ShoppingCartContext.Provider>
        
    )
}

export default ShoppingCartContext;

