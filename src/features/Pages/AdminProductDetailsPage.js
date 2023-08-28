import React from 'react'
import Navbar from '../navbar/Navbar'
import AdminProductDetails from '../AdminProductList/components/AdminProductDetails'

function AdminProductDetailsPage() {
  return (
    <div>
            <Navbar>
                <AdminProductDetails></AdminProductDetails>
            </Navbar>
    </div>
  )
}

export default AdminProductDetailsPage