import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import Layout from '../../Components/Layout';
import OrderCard  from "../../Components/OrderCard/index";


function MyOrder() {
  const context = useContext(ShoppingCartContext); /*Quiero que leas el estado global*/
  
  //code para organizar el link al abrir cada orden
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    if(index === "last") index = context.order?.length -1;

    
    return (
      <Layout>
        <div className="flex relative w-80 justify-center items-center">
          <Link to="/my-orders" className="absolute left-0">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
          </Link>
          <h1 className="font-medium text-lg text-center">My Order</h1>
        </div>

        <div className="flex flex-col py-14 w-[48%]">
          {
            
            context.order?.[index]?.products.map(product => (
              /*En este sideMenu pintame por cada uno de los producto que tengo en mi carrito estos elementos*/  
              <OrderCard 
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.images}
                price={product.price}
              />
            ))
          }
        </div>

      </Layout>
    )
  }
  
  export default MyOrder;

  /**
   * context.order && context.order.length > 0 ?
            context.order?.slice(-1)[0].products.map(product => (
   */


