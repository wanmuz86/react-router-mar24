import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const ProductDetail = ({params}) => {
  let {productId} = useParams()
  const [searchParams, setSearchParams] = useSearchParams();

  
  useEffect(()=>{
    // We retrieve the search parameters
    // pass to our API
    // normally inside API/DB -> where lang = bm & q  likes 'harry'
    console.log(searchParams.get('lang'));
    console.log(searchParams.get('q'));
    if (productId > 10000){
      throw("Product not found!");
    }

  },[])

  return (
    <div>
        <h1>ProductDetail for product of id {productId}</h1>
    </div>
  )
}

export default ProductDetail