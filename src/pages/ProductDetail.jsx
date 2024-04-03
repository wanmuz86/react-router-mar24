import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = ({params}) => {

  let {productId} = useParams()
  return (
    <div>
        <h1>ProductDetail for product of id {productId}</h1>
    </div>
  )
}

export default ProductDetail