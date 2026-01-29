import { createContext, useMemo, useState, ReactNode } from "react";

interface ShoppingCarContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

interface ShoppingCarProviderProps {
  children: ReactNode;
}

export const ShoppingCarContext =
  createContext<ShoppingCarContextType | null>(null);

export const ShoppingCarProvieder = ({ children }: ShoppingCarProviderProps) => {
  const [count, setCount] = useState(0);

  const value = useMemo(() => ({
    count,
    setCount,
  }), [count]);

  return (
    <ShoppingCarContext.Provider value={value}>
      {children}
    </ShoppingCarContext.Provider>
  );
};
