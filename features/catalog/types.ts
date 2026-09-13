export type ProductPhoto =
  | "classic"
  | "ube"
  | "bread"
  | "crinkles"
  | "muffins"
  | "pandesal"
  | "cinnamon"
  | "scones";
export type Product = {
  handle: string;
  title: string;
  category: string;
  description: string;
  pack: string;
  photo: ProductPhoto;
  badge?: string;
  price: number;
  toppings: string[];
};
