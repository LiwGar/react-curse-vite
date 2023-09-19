import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard  from "../../Components/OrderCard/index";
import Layout from '../../Components/Layout';


function Order() {
  const context = useContext(ShoppingCartContext); /*Quiero que leas el estado global*/
    
    return (
      <Layout>
          My Order

          <div className="flex flex-col w-[55%]">
            {
              context.order && context.order.length > 0 ?
              context.order?.slice(-1)[0].products.map(product => (
                /*En este sideMenu pintame por cada uno de los producto que tengo en mi carrito estos elementos*/  
                <OrderCard 
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  imageUrl={product.image}
                  price={product.price}
                />
              ))
              : 
              <span className="flex justify-center p-4 text-sm">No orders placed</span>
             }
          </div>

      </Layout>
    )
  }
  
  export default Order


