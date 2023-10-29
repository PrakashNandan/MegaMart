import React from 'react'
import Navbar from '../navbar/Navbar'
import AdminProductList from '../AdminProductList/components/AdminProductList'


function AdminHome() {
  return (
        <div>
            <Navbar>
                <AdminProductList></AdminProductList>
            </Navbar>
        </div>
  )
}

export default AdminHome