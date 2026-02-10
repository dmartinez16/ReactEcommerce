import { Order } from "../../Types/product";

interface OrdersCardProp {
  order: Order
}

const OrdersCard = ({order}: OrdersCardProp) => {

    return(
    <div className="flex justify-between items-center mb-3 borde border-black">
           <p>
            <span>01.02.02</span>
            {order?.products.map(product => (
                <span key={product.id}>{product.title}</span>
            ))}
            <span>{order.totalPrice}</span>
           </p>
        </div>
    )
}


export default OrdersCard;