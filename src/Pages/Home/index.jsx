import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail"

function Home() {
  
  const [products, setProducts] = useState(null) 

  useEffect (() => {

    fetch('https://fakestoreapi.com/products')
    .then(response => response.json()) 
    .then(data => setProducts(data)) 
  }, [])
    return (
      <Layout>
          Home
        <div className='grid gap-10 grid-cols-4 w-full max-w-screen-lg'>
          {
            products?.map(products => {
              return (
                <Card key={products.id} data={products}/>
              )
            })
          }
        </div>
        <ProductDetail/>  
      </Layout>
    )
  }
  
  export default Home;
  