import { createContext, useState, useEffect } from "react";


export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    const [count, setCount] = useState(0); /* Shopping Cart, contador*/
    
   
    //Aside Product Detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false); /* Aside Product Detail, abrir/cerrar*/

    const openProductDetail = () => setIsProductDetailOpen(true); /* Aside Product Detail, abrir/cerrar*/

    const closeProductDetail = () => setIsProductDetailOpen(false); /* Aside Product Detail, abrir/cerrar*/

   
    //Product Detail
    const [productToShow, setProductToShow] = useState({}); /* Product Detail, mostrar detalle del producto*/

    
    //Shopping Cart 
    const [cartProducts, setCartProducts] = useState([]); /* Shopping Cart, agregar prductos al carrito*/

   
    //My Order
    const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false); /* My Order, abrir/cerrar*/

    const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true); /* My Order, abrir/cerrar*/

    const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false); /* My Order, abrir/cerrar*/


    //Order
    const [order, setOrder] = useState([])

    //Get Products
    const [items, setItems] = useState(null) 

        useEffect (() => {

            fetch('https://fakestoreapi.com/products')
            .then(response => response.json()) 
            .then(data => setItems(data)) 
        }, [])

        //Get product by title
        const [searchByTitle, setSearchByTitle] = useState(null) 

   
    return ( /* dentro del proveedor con value, proveemos a toda la app con la informacion del contador carrito*/
        <ShoppingCartContext.Provider value = {{ 
            count, setCount,
            openProductDetail, closeProductDetail,
            isProductDetailOpen,
            productToShow, setProductToShow,
            cartProducts, setCartProducts,
            isCheckOutSideMenuOpen,
            openCheckOutSideMenu, closeCheckOutSideMenu,
            order, setOrder,
            items, setItems,
            searchByTitle, setSearchByTitle
        }}> 
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartContext;

