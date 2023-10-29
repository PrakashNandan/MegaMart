import React from 'react'
import Navbar from '../navbar/Navbar'
import AdminOrders from '../AdminProductList/components/AdminOrders'


function AdminOrdersPage() {
  return (
        <div>
            <Navbar>
                <AdminOrders></AdminOrders>
            </Navbar>
        </div>
  )
}

export default AdminOrdersPage