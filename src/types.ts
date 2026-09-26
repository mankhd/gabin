export interface Flavor {
  id: string;
  name: string;
  badge: string;
  calories: number;
  bgHex: string;
  accentColor: string;
  tagline: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  calories: number;
  image: string;
  category: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  company?: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}
