"use client";
import { useSearchParams } from "next/navigation";
import { ProductCollection } from "./ProductCollection";
import { products } from "./data/products";
export function MenuCollection() {
  const params = useSearchParams();
  const category = params.get("category") || "All bakes";
  return (
    <ProductCollection
      key={category}
      products={products}
      initialCategory={category}
    />
  );
}
