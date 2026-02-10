import Layaout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'
import { useShoppingCar } from "../../Hooks/useShoppingCar";
import { Link } from 'react-router-dom';
const index = window.location.pathname.split('/')[1];

function MyOrders() {

  const { myOrders } = useShoppingCar();
  console.log('Datos:', myOrders)
  return (
    <Layaout>
        MyOrders
        {
          myOrders.map((order) => (
            <Link key={order.id} to={`/my-orders/${order.id}`}>
              <OrdersCard order={order} />
            </Link>
          ))
        }
       
    </Layaout>
  )
}

export default MyOrders