import { Product } from "../../Types/product";
import { useState } from "react";
import { useShoppingCar } from "../../Hooks/useShoppingCar";
import { PlusIcon } from '@heroicons/react/24/outline';

interface CardProps {
  data: Product;
}

const FALLBACK_IMAGE = "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg";

const Card = ({ data }: CardProps) => {

  const { count, setCount, openProductDetail, setProductToShow, setcartProducts, cartProducts } = useShoppingCar();
 const getValidImage = (image?: string) =>
  image?.startsWith("http") ? image : FALLBACK_IMAGE;


  const [imgSrc] = useState(
    getValidImage(data.image)
  );

  const showProduct = () => {
      openProductDetail()
      setProductToShow(data)
  }

  const addProductToCart = (productData: Product) => {
    setCount(count + 1);
    setcartProducts(prev => [...prev,productData])
    console.log("Elemento agregado:", productData)
  }

  return (
    <div className=" mb-1 mt-1">
      <div
      className='bg-white w-56 h-60 rounded-lg cursor-pointer'
      onClick={showProduct}
      >
        <figure className='relative mb-2 w-full h-4/5'>
          <img
            className='w-full h-full object-cover rounded-lg'
            src={imgSrc}
            alt={data.title}
          />

          <button
            className='cursor-pointer absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
             onClick={(e) => {
                e.stopPropagation();
                addProductToCart(data);
              }}
          >
            <PlusIcon className="h-5 text-black font-bold"
            />
          </button>
        </figure>

        <p className='flex justify-between gap-2'>
          <span className='text-sm font-light truncate'>{data.title}</span>
          <span className='text-lg font-medium'>${data.price}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
