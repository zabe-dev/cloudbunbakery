import { Suspense } from "react";
import { ProductCollection } from "@/features/catalog/ProductCollection";
import { MenuCollection } from "@/features/catalog/MenuCollection";
import { products } from "@/features/catalog/data/products";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Kentucky Bakery Menu",
  "Explore Cloud Bun Bakery's Kentucky menu of Filipino ensaymada, pandesal, Spanish bread, cookies, muffins, and scones. Message us to arrange local pickup.",
  "/menu/",
);
export default function MenuPage() {
  return (
    <Suspense fallback={<ProductCollection products={products} />}>
      <MenuCollection />
    </Suspense>
  );
}
