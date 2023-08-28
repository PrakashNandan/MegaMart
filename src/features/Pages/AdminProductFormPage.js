import React from 'react'
import Navbar from '../navbar/Navbar'
import ProductForm from '../AdminProductList/components/ProductForm'

function AdminProductFormPage() {
  return (
    <div>
            <Navbar>
                <ProductForm></ProductForm>
            </Navbar>
    </div>
  )
}

export default AdminProductFormPage