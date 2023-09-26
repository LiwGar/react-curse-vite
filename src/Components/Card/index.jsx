import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index";


const Card = (data) => {

    const context = useContext(ShoppingCartContext); /*Quiero que leas el estado global*/

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)  
        context.closeCheckOutSideMenu()
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.closeProductDetail()
        context.openCheckOutSideMenu()
    }

    const renderIcon = (id) => {

        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;

        if (isInCart) {
            return (
                <div className="absolute top-0 right-0 flex justify-center items-center  bg-green-300 w-7 h-7 rounded-full m-2 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
            )
        } else {
            return (
                <button alt="addButton" className="absolute top-0 right-0 flex justify-center items-center bg-gray-400 w-7 h-7 rounded-full m-2 p-1"
                            onClick={(event) => addProductsToCart(event, data.data)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                </button>
            )
        }
    }


    return (

        <div className="bg-white cursor-pointer w-64 h-68 rounded-lg" 
            onClick={() => showProduct(data.data)} >
            <figure className="relative mb-2 w-full h-4/5">
                <span alt="categoryCard" className="absolute bottom-0 left-0 m-2 px-3 py-0.5 bg-violet-400 rounded-lg text-black text-xs">{data.data.category.name}</span>
                <img alt={data.data.title} className="w-full h-full object-cover rounded-lg" src={data.data.images[0]}/>
                {renderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between">
                { <span alt="titleCard" className="text-xs font-light p-1" >{data.data.title}</span>}
                <span alt="priceCard" className="text-m font-bold p-1">${data.data.price}</span>
            </p>
        </div>

    )

}

export default Card;