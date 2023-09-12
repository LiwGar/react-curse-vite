import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index"
import "./productDetail.css"

const ProductDetail = () => {

    const context = useContext(ShoppingCartContext); /*Quiero que leas el estado global*/

    return (
        /*{context.isProductDetailOpen ? "flex" : "hidden" } significa que si tu valor es true (abierto) voy a colocarle flex, de lo contrario si es falso (cerrado) voy a colocarle hidden */
        <aside className= {`${context.isProductDetailOpen ? "flex" : "hidden" } productDetail flex-col 
                fixed right-0  border border-violet-600 rounded-lg`}>
            <div className="flex justify-between items-center p-6">
                <h2 alt="titleProductDetail" className="font-medium text-xl">Detail</h2>
                <div>
                    <svg onClick={() => context.closeProductDetail()} 
                        alt="closeButtonProductDetail" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </aside>

    )

}

export default ProductDetail;


