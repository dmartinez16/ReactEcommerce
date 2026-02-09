import Layaout from '../../Components/Layout'
import { useShoppingCar } from "../../Hooks/useShoppingCar";
import OrderCard from '../../Components/OrderCard';

function MyOrder() {
  const {myOrders} = useShoppingCar();
  console.log(myOrders[0].products);
  
  return (
      <Layaout>
        MyOrder
         <div className='flex flex-col w-80'>
            {
                myOrders[0]?.products?.map(product => (
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