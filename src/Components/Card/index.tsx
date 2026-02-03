import { Product } from "../../Types/product";
import { useState } from "react";
import { useShoppingCar } from "../../Hooks/useShoppingCar";
import { PlusIcon } from '@heroicons/react/24/outline';

interface CardProps {
  data: Product;
}

const FALLBACK_IMAGE = "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg";

const Card = ({ data }: CardProps) => {

  const { count, setCount, openProductDetail, setProductToShow } = useShoppingCar();

  const getValidImage = (images: string[]) =>
    images.find(img => img?.startsWith("http")) || FALLBACK_IMAGE;

  const [imgSrc] = useState(
    getValidImage(data.images)
  );

  const showProduct = () => {
      openProductDetail()
      setProductToShow(data)
  }

  return (
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
            setCount(count + 1);
          }}
        >
          <PlusIcon className="h-5 text-black font-bold" />
        </button>
      </figure>

      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data.title}</span>
        <span className='text-lg font-medium'>${data.price}</span>
      </p>
    </div>
  );
};

export default Card;
