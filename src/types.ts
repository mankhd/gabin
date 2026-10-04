export interface Product {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  calories: number;
  image: string;
  category: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}
