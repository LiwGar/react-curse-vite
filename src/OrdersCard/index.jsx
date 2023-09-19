const OrdersCard = props => {

    const {totalPrice, totalProducts} = props

    return (

     <div  className="flex justify-between items-center mb-3 border-violet-600" >
       <p>
        <span>19.09.23</span>
        <span>{ totalProducts }</span>
        <span>{ totalPrice }</span>
       </p>
     </div>
    )

}

export default OrdersCard;