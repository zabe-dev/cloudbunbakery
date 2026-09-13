import type { Product } from "./types";
import styles from "./ProductPhoto.module.css";
export function ProductPhoto({
  product,
  className = "",
}: {
  product: Pick<Product, "photo" | "title">;
  className?: string;
}) {
  return (
    <div
      className={`${styles.photo} ${styles[product.photo]} ${className}`}
      role="img"
      aria-label={product.title}
    />
  );
}
