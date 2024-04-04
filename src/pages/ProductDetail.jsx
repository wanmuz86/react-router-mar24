import React, { useEffect } from 'react'
import { useParams, useSearchParams, useLoaderData,useNavigation } from 'react-router-dom'

const apiUrl = 'https://fakestoreapi.com/products';

const ProductDetail = ({params}) => {
  let {productId} = useParams()

  const [searchParams, setSearchParams] = useSearchParams();
  const result = useLoaderData();
  const navigation = useNavigation();
 

  
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
        {
          navigation.state == "loading" ? <p>Loading!!</p> :
          <div>
            <h1>{result.title}</h1>
            <img src={result.image}/>
            <p>{result.category}</p>
            <p>{result.description}</p>
            </div>
          
          }
    </div>
  )
}

export default ProductDetail

// In case it is a path with parameter , the parameter will be passed as a prop
// That you can retrieve in the function defined
export const detailLoader = async({params}) => {

  const res = await fetch(`${apiUrl}/${params.productId}`);
  const resJson = await res.json();
  return resJson;
}