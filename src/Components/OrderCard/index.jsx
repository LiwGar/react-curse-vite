const OrderCard = props => {

    const {title, imageUrl, price} = props

    return (

     <div  className="flex justify-between items-center py-4" alt="productOrderCardContainer">
        <div className="flex items-center gap-2" alt="productOrderCard">
            <figure className="w-20 h-20" alt="imageProduct">
                <img className="w-[full] h-full rounded-lg object-cover" src={imageUrl} alt={title}/>
            </figure>
            <p className="font-medium text-sm" alt="titleProduct">
                {title}
            </p>
        </div>
        <div className="flex items-center gap-2">
            <p className="font-bold text-sm" alt="priceProduct" >
               {price}
            </p>
            <button alt="deleteProductCard">
                <svg    alt="closeButtonProductDetail" xmlns="http://www.w3.org/2000/svg" fill="none" 
                        viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

     </div>
    )

}

export default OrderCard;