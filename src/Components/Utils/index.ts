import { Product } from '../../Types/product';

/**
 * Función para sumatoria de todos los productos en la orden
 * @param products //Array de objeto tipo producto
 * @returns Retorna la sumatoria de todos los productos en la orden
 */
export const totalPrice = (products: Product[]): number => {
  return products.reduce((sum, product) => sum + product.price, 0);
};
