import { createContext, useMemo, useState, ReactNode } from "react";
import { Product } from "../Types/product";

interface ShoppingCarContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  isProductDetailOpen: boolean;
  openProductDetail: () => void;
  closeProductDetail: () => void;
  productToShow: any;
  setProductToShow: React.Dispatch<React.SetStateAction<any>>;
}

interface ShoppingCarProviderProps {
  children: ReactNode;
}

export const ShoppingCarContext =
  createContext<ShoppingCarContextType | null>(null);

export const ShoppingCarProvieder = ({ children }: ShoppingCarProviderProps) => {
  
  //Contador de productos
  const [count, setCount] = useState(0);

  //Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //Product Detail - Show Product
  const [productToShow, setProductToShow] = useState<Product | null>(null);

  const value = useMemo(() => ({
    count,
    setCount,
    isProductDetailOpen,
    openProductDetail,
    closeProductDetail,
    productToShow,
    setProductToShow
  }), [count, isProductDetailOpen,productToShow]);

  return (
    <ShoppingCarContext.Provider value={value}>
      {children}
    </ShoppingCarContext.Provider>
  );
};
