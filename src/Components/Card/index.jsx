import { data } from "browserslist";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index"

const Card = (data) => {

    const context = useContext(ShoppingCartContext); /*Quiero que leas el estado global*/

    return (

        <div className="bg-white cursor-pointer w-64 h-68 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 m-2 px-3 py-0.5 bg-violet-400 rounded-lg text-black text-xs">{data.data.category}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.image} alt="Name"/>
                <div className="absolute top-0 right-0 flex  justify-center 
                items-center bg-green-200 w-6 h-6 m-2 p-4 text-xl font-bold rounded-full"
                onClick={() => context.setCount(context.count + 1)}>+</div>
            </figure>
            <p className="flex justify-between">
                { <span className="text-xs font-light p-1" >{data.data.title}</span>}
                <span className="text-m font-bold p-1">${data.data.price}</span>
            </p>
        </div>

    )

}

export default Card;