import { Suspense } from "react";
import { ProductCollection } from "@/features/catalog/ProductCollection";
import { MenuCollection } from "@/features/catalog/MenuCollection";
import { products } from "@/features/catalog/data/products";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Bakery Menu",
  "Explore Cloud Bun Bakery's ensaymada, pandesal, Spanish bread, cookies, muffins, and scones. Message us on social media to arrange your order.",
  "/menu/",
);
export default function MenuPage() {
  return (
    <Suspense fallback={<ProductCollection products={products} />}>
      <MenuCollection />
    </Suspense>
  );
}
