import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function EventsData({allProducts}) {
    const router = useRouter();
    const [products, setAllproducts] = useState(allProducts);
    

    const getFilterData = async ()=>{
        const fetchProducts = await fetch("https://dummyjson.com/products/search?q=Laptop").then((data)=>data.json());
        setAllproducts(fetchProducts.products)
        router.push('/events/searchq=Laptop', undefined, {shallow:true})
    }

    console.log("allProducts", allProducts)
    console.log("products", products)

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
 
export async function getServerSideProps(context){
    const {query} = context;
    const {searchq} = query;
    const queryString =  searchq ?"search?q=Laptop":''
    console.log("context=======", context);
    console.log("query====", query);

    const fetchProducts = await fetch(`https://dummyjson.com/products${queryString}`).then((data)=>data.json());
    return {
        props:{
            allProducts:fetchProducts.products,
        }
    }
}