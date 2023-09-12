import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index"
import "./productDetail.css"

const ProductDetail = () => {

    const context = useContext(ShoppingCartContext); /*Quiero que leas el estado global*/

    return (
        /*{context.isProductDetailOpen ? "flex" : "hidden" } significa que si tu valor es true (abierto) voy a colocarle flex, de lo contrario si es falso (cerrado) voy a colocarle hidden */
        <aside className= {`${context.isProductDetailOpen ? "flex" : "hidden" } productDetail flex-col 
                fixed right-0 border border-violet-600 rounded-lg`}>
            <div className="flex justify-between items-center p-4">
                <h2 alt="titleProductDetail" className="font-medium text-lg">Product detail</h2>
                <button>
                    <svg onClick={() => context.closeProductDetail()} 
                        alt="closeButtonProductDetail" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <figure className="px-2">
                <img className="w-60 h-80 rounded-xl mx-auto"
                     src={context.productToShow.image}
                     alt={context.productToShow.title}/>
                     
            </figure>
            <p className="flex flex-col  px-2">
                <span className="font-bold text-sm">${context.productToShow.price}</span>
                <span className="font-bold text-sm">{context.productToShow.title}</span>
                <span className="text-xs" >{context.productToShow.description}</span>
            </p>
        </aside>
 
    )

}

export default ProductDetail;


