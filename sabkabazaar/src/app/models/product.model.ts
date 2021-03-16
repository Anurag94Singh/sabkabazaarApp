export interface Product{
    id: string;
    imageURL: string;
    name: string;
    category: string;
    description: string;
    price: number;
    stock: number;
    sku: string;
    visible?: boolean;
    inCart?: boolean;
  }
