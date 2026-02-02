import './ProductDetailStyle.css'
import { XCircleIcon } from '@heroicons/react/24/outline';
import { useShoppingCar } from "../../Hooks/useShoppingCar";

const ProductDetail = () => {
    const { isProductDetailOpen, closeProductDetail, productToShow } = useShoppingCar();
    console.log('Producto mostrado:', productToShow)
    
    return(
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black bg-white`}>
            <div className='flex justify-between items-center align-items-center'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div><XCircleIcon onClick={closeProductDetail} className={`h-7 cursor-pointer`}/></div>
            </div>
        </aside>
    )
}

export default ProductDetail;