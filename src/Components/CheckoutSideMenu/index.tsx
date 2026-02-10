import './CheckoutSideMenu.css'
import { XCircleIcon } from '@heroicons/react/24/outline';
import { useShoppingCar } from "../../Hooks/useShoppingCar";
import OrderCard from '../OrderCard';
import { totalPrice } from '../Utils/index'
import { Order } from '../../Types/product';
import { Link } from 'react-router-dom';
const CheckoutSideMenu = () => {

    const { isCheckOutSideMenuOpen, closeCheckOutSideMenuOpen, cartProducts, setcartProducts, setmyOrders } = useShoppingCar();

    const handleDelete = (id: number) => {
        const filteredProducts = cartProducts.filter(product => product.id != id);
        setcartProducts(filteredProducts);
    }

    const handleCheckOut = () => {
        const orderToAdd: Order = {
            id: crypto.randomUUID(),
            date: new Date(),
            products: cartProducts,
            totalPrice: totalPrice(cartProducts),
        };

        setmyOrders(prev => [...prev, orderToAdd]);
        setcartProducts([]);
    }

    return(
        <aside className={`${isCheckOutSideMenuOpen ? 'flex' : 'hidden'} checkoutsidemenu-detail fixed right-0 border border-black bg-white overflow-auto`}>
            <div className='flex justify-between items-center align-items-center marg'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XCircleIcon onClick={closeCheckOutSideMenuOpen} 
                    className={`h-7 cursor-pointer`}/>
                </div>
            </div>
            <div className='flex gap-3.5 items-start flex-col w-full h-full overflow-auto'>
                {
                    cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.image}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='mt-auto'>
                <p className='flex justify-between items-center'>
                    <span className='font-semibold'>Total: </span>
                    <span className='font-bold underline'>${totalPrice(cartProducts)}</span>
                </p>
                <Link to={'my-orders/last'}>
                    <button className='cursor-pointer w-full bg-black text-center text-white mt-1.5 p-1.5 rounded'
                        onClick={() => handleCheckOut()}>CheckOut
                    </button>
                </Link>
                
            </div>
        </aside>
    )
}

export default CheckoutSideMenu;