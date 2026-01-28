import api from "../Api/axios";
import { Product } from "../Types/product";

/*Metodo para traer productos consultados*/
export const getProducts = async (): Promise<Product[]> => {
  const { data } = await api.get<Product[]>("/products");
  return data;
};
