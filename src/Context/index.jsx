import { createContext, useState, useEffect } from "react";


export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    const [count, setCount] = useState(0); /* Shopping Cart, contador*/
    
   
    //Aside Product Detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false); /* Aside Product Detail, abrir/cerrar*/

    const openProductDetail = () => setIsProductDetailOpen(true); /* Aside Product Detail, abrir/cerrar*/

    const closeProductDetail = () => setIsProductDetailOpen(false); /* Aside Product Detail, abrir/cerrar*/


    //My Order
    const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false); /* My Order, abrir/cerrar*/

    const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true); /* My Order, abrir/cerrar*/

    const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false); /* My Order, abrir/cerrar*/


    //Product Detail
    const [productToShow, setProductToShow] = useState({}); /* Product Detail, mostrar detalle del producto*/

    
    //Shopping Cart 
    const [cartProducts, setCartProducts] = useState([]); /* Shopping Cart, agregar prductos al carrito*/


    //Order
    const [order, setOrder] = useState([])


    //Get Products
    const [items, setItems] = useState(null) 


    
    const [filteredItems, setFilteredItems] = useState(null); 

    
    //Get product by title
    const [searchByTitle, setSearchByTitle] = useState(null);


    //get product by category
    const [searchByCategory, setSearchByCategory] = useState(null);


        useEffect (() => {

            fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json()) 
            .then(data => setItems(data)) 
        }, [])


    
        //Filtered Items by title
    const filteredItemsByTitle = (items, searchByTitle) => {

        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }
    
    
    //Filtered Items by category
    const filteredItemsByCategory = (items, searchByCategory) => {

        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
    }


    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
          return filteredItemsByTitle(items, searchByTitle)
        }
    
        if (searchType === 'BY_CATEGORY') {
          return filteredItemsByCategory(items, searchByCategory)
        }
    
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
          return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
    
        if (!searchType) {
          return items
        }
    }

    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])

    console.log('filteredItems: ', filteredItems)
       
    return ( /* dentro del proveedor con value, proveemos a toda la app con la informacion del contador carrito*/
    <ShoppingCartContext.Provider value={{
        count, setCount,
        openProductDetail, closeProductDetail,
        isProductDetailOpen,
        productToShow, setProductToShow,
        cartProducts, setCartProducts,
        isCheckOutSideMenuOpen, openCheckOutSideMenu,
        closeCheckOutSideMenu, 
        order, setOrder,
        items, setItems,
        searchByTitle, setSearchByTitle,
        filteredItems, searchByCategory,
        setSearchByCategory
      }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartContext;

