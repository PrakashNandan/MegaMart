import React from 'react'
import ProductDetails from '../pageList/components/ProductDetails'
import Navbar from '../navbar/Navbar'

function ProductDetailsPage() {
  return (
    <div>
            <Navbar>
                <ProductDetails></ProductDetails>
            </Navbar>
    </div>
  )
}

export default ProductDetailsPage