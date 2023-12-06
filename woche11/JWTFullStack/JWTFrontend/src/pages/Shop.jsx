import { useEffect, useState } from "react"
import { getAllProducts } from "../lib/dataFetchHelper"
import ProductItem from "../components/products/ProductItem"


export default function Shop() {

    const [products, setProducts]=useState([])
    
    useEffect(()=>{
        getAllProducts().then(response => response.json()).then(data => setProducts(data))
    }, [])


    const ListOfProducts = products?.map((product)=>{
      console.log(product)
        return <ProductItem key={product["_id"]} name={product.name} description={product.description}/>
        

    })
  return (
    <div>Find your product!

        {ListOfProducts}
    </div>
  )
}
