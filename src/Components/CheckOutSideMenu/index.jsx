import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index";
import OrderCard  from "../../Components/OrderCard/index";
import "./CheckOutSideMenu.css";

const CheckOutSideMenu= () => {

    const context = useContext(ShoppingCartContext); /*Quiero que leas el estado global*/

    return (
        /*{context.isProductDetailOpen ? "flex" : "hidden" } significa que si tu valor es true (abierto) voy a colocarle flex, de lo contrario si es falso (cerrado) voy a colocarle hidden */
        <aside className= {`${context.isCheckOutSideMenuOpen ? "flex" : "hidden" } checkOutSideMenu flex-col 
                fixed right-0 border border-violet-600 rounded-lg`}>
            <div className="flex justify-between items-center p-4">
                <h2 alt="titleProductDetail" className="font-bold text-lg">My Order</h2>
                <button>
                    <svg onClick={() => context.closeCheckOutSideMenu()} 
                        alt="closeButtonProductDetail" xmlns="http://www.w3.org/2000/svg" fill="none" 
                        viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="px-4">
                {
                    context.cartProducts.map(product => (
                        /*En este sideMenu pintame por cada uno de los producto que tengo en mi carrito estos elementos*/  
                        <OrderCard 
                        key={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        />

                    ))
                }
            </div>         
        </aside>
 
    )

}

export default CheckOutSideMenu;