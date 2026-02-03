import './ProductDetailStyle.css'
import { XCircleIcon } from '@heroicons/react/24/outline';
import { useShoppingCar } from "../../Hooks/useShoppingCar";

const ProductDetail = () => {
    const { isProductDetailOpen, closeProductDetail, productToShow } = useShoppingCar();
    console.log(productToShow)

    const FALLBACK_IMAGE = "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg";
    if (!productToShow) return null;

    const imageSrc = productToShow.image || FALLBACK_IMAGE;

    return(
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail fixed right-0 border border-black bg-white`}>
            <div className='flex justify-between items-center align-items-center marg'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div><XCircleIcon onClick={closeProductDetail} className={`h-7 cursor-pointer`}/></div>
            </div>
            <figure className='flex flex-col gap-0.5'>
                <img 
                    className='w-full h-80 object-cover rounded-md' 
                    src={imageSrc} 
                    alt={productToShow.title}
                    onError={(e) => (e.currentTarget.src = FALLBACK_IMAGE)}
                />
                <h3 className='font-medium text-2xl mt-2.5'>$ {productToShow.price}</h3>
                <h4 className='font-medium text-md'>{productToShow.title}</h4>
                <p className='font-light text-sm to-black'>{productToShow.description}</p>
            </figure>
        </aside>
    )
}

export default ProductDetail;