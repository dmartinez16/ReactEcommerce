import Layaout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'
import { useShoppingCar } from "../../Hooks/useShoppingCar";

function MyOrders() {

  const { myOrders } = useShoppingCar();
  console.log('Datos:', myOrders)
  return (
    <Layaout>
      <div className='mb-2.5'> MyOrders </div>
        
        {
          myOrders.map((order) => (
            <div key={order.id} className='w-8/12 mt-1.5'>
              <OrdersCard order={order} />
            </div>
          ))
        }
       
    </Layaout>
  )
}

export default MyOrders