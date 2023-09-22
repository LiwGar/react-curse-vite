import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/index";
import Layout from '../../Components/Layout';
import OrdersCard  from "../../Components/OrdersCard/index";

function MyOrders() {
  
  const context = useContext(ShoppingCartContext);

    return (
      <Layout>
        <div className="flex relative w-90 justify-center items-center">
          <h1 className="font-medium text-lg mb-8">My Orders</h1>
        </div>
        {
          context.order.map((order, index) => (

            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard  
                totalPrice={order.totalPrice} 
                totalProducts={order.totalProducts}
              />
            </Link>
          ))
        }
        
      </Layout>
    )
  }
  
  export default MyOrders;