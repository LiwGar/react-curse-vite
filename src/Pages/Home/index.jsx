import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail"

function Home() {

  const context = useContext(ShoppingCartContext);

  const renderView = () => {
   
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <p>We don't have anything :( </p>
      )
    }
  }

    return (
      <Layout>
        <div className="flex relative w-90 justify-center gap-2">
          <h1 className="flex font-extrabold text-lg mb-6 italic">SHOPstr</h1>
          <h2 className="flex text-base mb-6 items-center">Exclusive Products</h2>
        </div>

        <input 
          type="text" 
          placeholder="Search a product"
          className=" w-[50%] p-2 mb-6 border border-violet-600 rounded-lg ml-5 focus:outline-none"
          onChange={(event) => context.setSearchByTitle(event.target.value) }
        />

        <div className='grid gap-12 grid-cols-4 w-full mr-5 mb-16 max-w-screen-lg'>
  
          { renderView ()}

        </div>
        <ProductDetail />  
      </Layout>
    )
  }
  
  export default Home;
  