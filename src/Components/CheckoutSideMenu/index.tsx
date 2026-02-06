import './CheckoutSideMenu.css'
import { XCircleIcon } from '@heroicons/react/24/outline';
import { useShoppingCar } from "../../Hooks/useShoppingCar";
import OrderCard from '../OrderCard';
import { totalPrice } from '../Utils/index'

const CheckoutSideMenu = () => {

    const { isCheckOutSideMenuOpen, closeCheckOutSideMenuOpen, cartProducts, setcartProducts } = useShoppingCar();

    const handleDelete = (id: number) => {
        const filteredProducts = cartProducts.filter(product => product.id != id);
        setcartProducts(filteredProducts);
    }

    return(
        <aside className={`${isCheckOutSideMenuOpen ? 'flex' : 'hidden'} checkoutsidemenu-detail fixed right-0 border border-black bg-white`}>
            <div className='flex justify-between items-center align-items-center marg'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XCircleIcon onClick={closeCheckOutSideMenuOpen} 
                    className={`h-7 cursor-pointer`}/>
                </div>
            </div>
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
            <div>
                <p className='flex justify-between items-center'>
                    <span className='font-semibold'>Total: </span>
                    <span className='font-bold underline'>${totalPrice(cartProducts)}</span>
                </p>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu;