import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail"

function Home() {

  const context = useContext(ShoppingCartContext);
  
    return (
      <Layout>
        <div className="flex relative w-90 justify-center gap-2">
          <h1 className="flex font-extrabold text-lg mb-6 italic">SHOPstr</h1>
          <h2 className="flex text-base mb-6 items-center">Exclusive Products</h2>
        </div>
        <input 
          type="text" 
          placeholder="Search a product"
          className=" w-[70%] p-3 mb-6 border border-violet-600 rounded-lg ml-6 focus:outline-none"
          onChange={(event) => context.setSearchByTitle(event.target.value) }

        />
        <div className='grid gap-10 grid-cols-4 w-full max-w-screen-lg'>
          {
            context.items?.map(item => {
              return (
                <Card key={item.id} data={item}/>
              )
            })
          }
        </div>
        <ProductDetail/>  
      </Layout>
    )
  }
  
  export default Home;
  