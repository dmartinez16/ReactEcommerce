export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface Order {
  id: string;
  products: Product[];
  totalPrice: number;
  date: Date;
}
