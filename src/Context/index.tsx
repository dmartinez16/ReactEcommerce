import { createContext, useMemo, useState, ReactNode } from "react";

interface ShoppingCarContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  isProductDetailOpen: boolean;
  openProductDetail: () => void;
  closeProductDetail: () => void;
}

interface ShoppingCarProviderProps {
  children: ReactNode;
}

export const ShoppingCarContext =
  createContext<ShoppingCarContextType | null>(null);

export const ShoppingCarProvieder = ({ children }: ShoppingCarProviderProps) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const value = useMemo(() => ({
    count,
    setCount,
    isProductDetailOpen,
    openProductDetail,
    closeProductDetail
  }), [count, isProductDetailOpen]);

  return (
    <ShoppingCarContext.Provider value={value}>
      {children}
    </ShoppingCarContext.Provider>
  );
};
