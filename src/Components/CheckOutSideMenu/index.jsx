import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/index";
import OrderCard  from "../../Components/OrderCard/index";
import { totalPrice } from "../../utils/index"
import "./CheckOutSideMenu.css";

const CheckOutSideMenu= () => {

    const context = useContext(ShoppingCartContext); /*Quiero que leas el estado global*/

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: "17.09.23",
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
    }

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
            <div className="px-4 overflow-y-scroll flex-1">
                {
                    context.cartProducts.map(product => (
                        /*En este sideMenu pintame por cada uno de los producto que tengo en mi carrito estos elementos*/  
                        <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className="px-4 mb-6">
                <p className="flex justify-between items-center font-bold mb-6">
                    <span>Total</span>
                    <span>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to= "/my-orders/last">
                    <button onClick={() => handleCheckout()}
                            className="w-full py-3 bg-violet-600 text-white font-bold">
                        Checkout
                    </button>  
                </Link> 
            </div>      
        </aside>
 
    )

}

export default CheckOutSideMenu;


/**
 * <div className="p-4">
                <p className="flex justify-between items-center font-bold text-lg ">
                    <span>Total</span>
                    <span className="rigth-0">${totalPrice(context.cartProducts)}</span>
                </p>
            <Link to= "/my-orders/last">
                <button onClick={() => handleCheckout()}
                        className="w-full, m-4 py-3 bg-violet-600 text-white font-bold,">
                    Checkout
                </button>  
            </Link> 
 */