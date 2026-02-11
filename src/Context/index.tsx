import { createContext, useEffect, useMemo, useState, ReactNode } from "react";
import { Product, Order } from "../Types/product";
import { getProducts } from "../Services/products.service";

interface ShoppingCarContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  
  items: Product[];
  setItems: React.Dispatch<React.SetStateAction<Product[]>>;

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

  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

}

interface ShoppingCarProviderProps {
  children: ReactNode;
}

export const ShoppingCarContext =
  createContext<ShoppingCarContextType | null>(null);

export const ShoppingCarProvieder = ({ children }: ShoppingCarProviderProps) => {
  
  //Contador de productos
  const [count, setCount] = useState(0);

  ///Get Products
  const [items, setItems] = useState<Product[]>([]);

  //Get products Title
  const [search, setSearch] = useState<string>("");
  console.log('Busqueda:', search)

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

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await getProducts();
        setItems(products);
      } catch (error) {
        console.error(error);
      }
    };

    loadProducts();
  }, []);

  const value = useMemo(() => ({
    count,
    setCount,
    items,
    setItems,
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
    search,
    setSearch,
    setmyOrders
  }), [count, items, isProductDetailOpen, productToShow, cartProducts, isCheckOutSideMenuOpen, myOrders, search]);

  return (
    <ShoppingCarContext.Provider value={value}>
      {children}
    </ShoppingCarContext.Provider>
  );
};
