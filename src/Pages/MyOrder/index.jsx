import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import Layaout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard';
import { useShoppingCar } from "../../Hooks/useShoppingCar";

function MyOrder() {
  const { myOrders } = useShoppingCar();
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  
  let selectedOrder = null;
  
  if (index === 'last' && myOrders.length > 0) {
    selectedOrder = myOrders[myOrders.length - 1];
  } else if (index && myOrders.length > 0) {
    selectedOrder = myOrders.find(order => order.id === index);
    if (!selectedOrder && !isNaN(index)) {
      const numIndex = parseInt(index);
      if (numIndex >= 0 && numIndex < myOrders.length) {
        selectedOrder = myOrders[numIndex];
      }
    }
  } else if (myOrders.length > 0) {
    selectedOrder = myOrders[0];
  }
  
  if (!selectedOrder) {
    return (
      <Layaout>
        <div className='flex items-center justify-center relative w-80 mb-6'>
          <Link to='/my-orders' className='absolute left-0'>
            <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
          </Link>
          <h1>My Order</h1>
        </div>
        <div>No se encontró la orden</div>
      </Layaout>
    );
  }
  
  return (
      <Layaout>
        <div className='flex items-center justify-center relative w-80 mb-6'>
            <Link to='/my-orders' className='absolute left-0'>
            <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
            </Link>
            <div className="flex items-center justify-center relative">
              <h1 className="font-medium text-xl">My Order</h1>
            </div>
        </div>

         <div className='flex flex-col gap-8 h-[46rem] overflow-auto p-4 w-[30rem]'>
            {
                selectedOrder.products?.map(product => (
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                    />
                ))
            }
          </div>
      </Layaout>
  )
}

export default MyOrder