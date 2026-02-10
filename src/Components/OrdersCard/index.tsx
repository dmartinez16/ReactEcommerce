import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Order } from "../../Types/product";
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface OrdersCardProp {
  order: Order
}

const FALLBACK_IMAGE = "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg";

const OrdersCard = ({order}: OrdersCardProp) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (date: Date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const getValidImage = (image?: string) => image?.startsWith("http") ? image : FALLBACK_IMAGE;

  const displayedImages = order.products.slice(0, 3);
  const remainingCount = order.products.length - 3;

  return(
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-4 overflow-hidden">
      <Link 
        to={`/my-orders/${order.id}`}
        className="flex items-center p-4 cursor-pointer"
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="flex -space-x-2">
            {displayedImages.map((product, index) => (
              <div 
                key={product.id}
                className="relative w-16 h-16 rounded-full border-2 border-white overflow-hidden bg-gray-100"
                style={{ zIndex: displayedImages.length - index }}
              >
                <img
                  className="w-full h-full object-cover"
                  src={getValidImage(product.image)}
                  alt={product.title}
                  onError={(e) => (e.currentTarget.src = FALLBACK_IMAGE)}
                />
              </div>
            ))}
            {remainingCount > 0 && (
              <div className="relative w-16 h-16 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600">
                +{remainingCount}
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 text-center px-4">
          <p className="text-sm font-medium text-gray-700">
            {formatDate(order.date)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {order.products.length} {order.products.length === 1 ? 'producto' : 'productos'}
          </p>
        </div>

        <div className="flex items-center gap-4 flex-1 justify-end">
          <div className="text-right">
            <p className="text-lg font-bold text-gray-900">
              ${order.totalPrice.toFixed(2)}
            </p>
          </div>
          <div 
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIsExpanded(!isExpanded);
            }}
            className="flex items-center justify-center cursor-pointer"
          >
            <ChevronDownIcon 
              className={`h-6 w-6 text-gray-600 transition-transform duration-200 hover:text-gray-900 ${
                isExpanded ? 'transform rotate-180' : ''
              }`}
            />
          </div>
        </div>
      </Link>

      {isExpanded && (
        <div className="border-t border-gray-200 bg-gray-50 p-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Detalle de productos:</h3>
          <div className="space-y-3">
            {order.products.map((product) => (
              <div 
                key={product.id}
                className="flex items-center gap-4 bg-white p-3 rounded-lg border border-gray-100"
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src={getValidImage(product.image)}
                    alt={product.title}
                    onError={(e) => (e.currentTarget.src = FALLBACK_IMAGE)}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {product.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {product.category}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-semibold text-gray-900">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default OrdersCard;