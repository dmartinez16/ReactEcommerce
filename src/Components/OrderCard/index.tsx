import { XMarkIcon } from "@heroicons/react/24/outline";

interface OrderCardProps {
  id:number,
  title: string;
  imageUrl: string;
  price: number;
  handleDelete: (id:number)=>void;
}

const OrderCard = ({id, title, imageUrl, price, handleDelete }: OrderCardProps) => {
    let renderMarkIcon;

    if(handleDelete){
        renderMarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className="h-6 w-6 text-black cursor-pointer"></XMarkIcon>
    }
    
    return(
        <div className="flex justify-between items-center gap-3 w-full mt-0.5 mb-0.5">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img
                        className="w-full h-full rounded-lg object-contain" 
                        src={imageUrl} alt={title} 
                    />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{price}</p>
               {renderMarkIcon}
            </div>
        </div>
    )
}


export default OrderCard;