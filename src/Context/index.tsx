import { createContext, useMemo, useState, ReactNode } from "react";
import { Product, Order } from "../Types/product";

interface ShoppingCarContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  
  isProductDetailOpen: boolean;
  openProductDetail: () => void;
  closeProductDetail: () => void;
  productToShow: any;

  isCheckOutSideMenuOpen: boolean;
  openCheckOutSideMenuOpen: () => void;
  closeCheckOutSideMenuOpen: () => void;

  setProductToShow: React.Dispatch<React.SetStateAction<any>>;
  cartProducts: Product[];
  setcartProducts: React.Dispatch<React.SetStateAction<Product[]>>;

  myOrders: Order[],
  setmyOrders:  React.Dispatch<React.SetStateAction<Order[]>>;
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

  //CheckOut Side Menu - Open/Close
  const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false);
  const openCheckOutSideMenuOpen = () => setIsCheckOutSideMenuOpen(true);
  const closeCheckOutSideMenuOpen = () => setIsCheckOutSideMenuOpen(false);

  //Product Detail - Show Product
  const [productToShow, setProductToShow] = useState<Product | null>(null);

  //Shopping Cart - Add Products on Cart
  const [cartProducts, setcartProducts] = useState<Product[]>([]);

  //Ordenes - Historial de compras
  const [myOrders, setmyOrders] = useState<Order[]>([]);

  const value = useMemo(() => ({
    count,
    setCount,
    isProductDetailOpen,
    openProductDetail,
    closeProductDetail,
    productToShow,
    setProductToShow,
    cartProducts,
    setcartProducts,
    openCheckOutSideMenuOpen,
    closeCheckOutSideMenuOpen,
    isCheckOutSideMenuOpen,
    myOrders,
    setmyOrders
  }), [count, isProductDetailOpen, productToShow, cartProducts, isCheckOutSideMenuOpen, myOrders]);

  return (
    <ShoppingCarContext.Provider value={value}>
      {children}
    </ShoppingCarContext.Provider>
  );
};
