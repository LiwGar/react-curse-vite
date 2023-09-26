const OrdersCard = props => {

    const {totalPrice, totalProducts} = props

    return (

     <div  className="flex justify-between w-80 items-center mb-4 border border-violet-600
            shadow-sm shadow-violet-600  bg-white rounded-lg p-4">
       <div className="flex justify-between w-full">
          <p className="flex flex-col">
            <span className="font-semibold">19.09.23</span>
            <span>{totalProducts} articles</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-bold text-base">${totalPrice}</span>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                    stroke="currentColor" className="w-6 h-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </p>
       </div>
     </div>
    )

}

export default OrdersCard;