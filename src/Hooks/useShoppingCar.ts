import { useContext } from "react";
import { ShoppingCarContext } from "../Context";

export const useShoppingCar = () => {
  const context = useContext(ShoppingCarContext);

  if (!context) {
    throw new Error("useShoppingCar must be used within ShoppingCarProvieder");
  }

  return context;
};
