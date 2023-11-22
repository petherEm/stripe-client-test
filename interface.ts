export interface simplifiedProduct {
  _id: string;
  imageUrl: string;
  imageUrl2: string;
  price: number;
  brand: string;
  slug: string;
  name: string;
  categoryName: string;
}

export interface fullProduct {
  _id: string;
  images: any[];
  price: number;
  price_id: string;
  brand: string;
  slug: string;
  name: string;
  condition: string;
  description: string;
  categoryName: string;
  tags: string[];
}
