import './CheckoutSideMenu.css'
import { XCircleIcon } from '@heroicons/react/24/outline';
import { useShoppingCar } from "../../Hooks/useShoppingCar";

const CheckoutSideMenu = () => {

    const { isCheckOutSideMenuOpen, closeCheckOutSideMenuOpen } = useShoppingCar();
    return(
        <aside className={`${isCheckOutSideMenuOpen ? 'flex' : 'hidden'} checkoutsidemenu-detail fixed right-0 border border-black bg-white`}>
            <div className='flex justify-between items-center align-items-center marg'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XCircleIcon onClick={closeCheckOutSideMenuOpen} 
                    className={`h-7 cursor-pointer`}/>
                </div>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu;