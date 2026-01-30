import './ProductDetailStyle.css'
import { XCircleIcon } from '@heroicons/react/24/outline';

const ProductDetail = () => {
    return(
        <aside className='product-detail flex flex-col fixed right-0 border border-black bg-white'>
            <div className='flex justify-between items-center align-items-center'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div><XCircleIcon className='h-7' /></div>
            </div>
        </aside>
    )
}

export default ProductDetail;