import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "./types";
import { ProductPhoto } from "./ProductPhoto";
import { formatMoney } from "@/helpers/money";
import styles from "./ProductCard.module.css";
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <ProductPhoto product={product} />
        {product.badge && <span className={styles.badge}>{product.badge}</span>}
      </div>
      <div className={styles.details}>
        <span className={styles.category}>{product.category}</span>
        <h3>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        {product.toppings.length > 0 && (
          <p className={styles.description}>
            Toppings: {product.toppings.join(" · ")}
          </p>
        )}
        <div className={styles.price}>
          <span>{formatMoney(product.price)}</span>
          <span>{product.pack}</span>
        </div>
        <Link href="/contact" className={styles.more}>
          Order this bake <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
