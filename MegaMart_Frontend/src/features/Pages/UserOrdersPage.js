import Navbar from '../navbar/Navbar';
import UserOrders from '../user/components/UserOrders';

function UserOrdersPage() {
  return (
    <div>
      <Navbar>
        <h1 className='mx-auto text-2xl'>My Orders</h1>
        <UserOrders></UserOrders>
      </Navbar>
    </div>
  );
}


export default UserOrdersPage;
