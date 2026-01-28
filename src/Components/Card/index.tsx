import { Product } from "../../Types/product";
import { useState } from "react";

interface CardProps {
  data: Product;
}

const FALLBACK_IMAGE = "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg";

const Card = ({ data }: CardProps) => {
  const getValidImage = (images: string[]) => {
  return images.find(img =>
    img &&
    img.startsWith("http") &&
    !img.includes("placeimg")
  );
};


  const [imgSrc, setImgSrc] = useState(
    getValidImage(data.images) || FALLBACK_IMAGE
  );

  const handleError = () => {
    const validImage = data.images?.find(img => img);
    setImgSrc(validImage || FALLBACK_IMAGE);
  };

  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {data.category?.name}
        </span>

        <img
          className='w-full h-full object-cover rounded-lg'
          src={imgSrc}
          alt={data.title}
          onError={handleError}
        />

        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
          +
        </div>
      </figure>

      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data.title}</span>
        <span className='text-lg font-medium'>${data.price}</span>
      </p>
    </div>
  );
};

export default Card;
