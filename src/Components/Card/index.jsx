import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index";


const Card = (data) => {

    const context = useContext(ShoppingCartContext); /*Quiero que leas el estado global*/

    const showProduct = (productDetail) => {
            context.openProductDetail()
            context.setProductToShow(productDetail)  
    }


    return (

        <div onClick={() => showProduct(data.data)} 
            className="bg-white cursor-pointer w-64 h-68 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span alt="categoryCard" className="absolute bottom-0 left-0 m-2 px-3 py-0.5 bg-violet-400 rounded-lg text-black text-xs">{data.data.category}</span>
                <img alt="imgCard" className="w-full h-full object-cover rounded-lg" src={data.data.image}/>
                <button alt="addButton" onClick={() => context.setCount(context.count + 1)} 
                    className="absolute top-0 right-0 flex justify-center items-center bg-green-300 w-7 h-7 rounded-full m-2 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                </button>
            </figure>
            <p className="flex justify-between">
                { <span alt="titleCard" className="text-xs font-light p-1" >{data.data.title}</span>}
                <span alt="priceCard" className="text-m font-bold p-1">${data.data.price}</span>
            </p>
        </div>

    )

}

export default Card;