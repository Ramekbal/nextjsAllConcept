import React, { useState } from 'react'

export default function EventsData({allProducts}) {

    const [products, setAllproducts] = useState(allProducts);
    const getFilterData = async ()=>{
        const fetchProducts = await fetch("https://dummyjson.com/products/search?q=Laptop").then((data)=>data.json());
        setAllproducts(fetchProducts.products)
    }

    if(!products) return "Loading..."
  return (
    <div>
        <button onClick={getFilterData}>Filter data</button>
      {products?.map((product)=>{
        return(
        <h1 key={product.id}>{product.thumbnail}</h1>
        )
      })}
    </div>
  )
}
 
export async function getServerSideProps(){
    const fetchProducts = await fetch("https://dummyjson.com/products").then((data)=>data.json());
    return {
        props:{
            allProducts:fetchProducts.products
        }
    }
}