"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import type { Product } from "./types";
import { ProductCard } from "./ProductCard";
import styles from "./ProductCollection.module.css";
import button from "@/components/ui/Button.module.css";
export function ProductCollection({
  products,
  featured = false,
  initialCategory = "All bakes",
}: {
  products: Product[];
  featured?: boolean;
  initialCategory?: string;
}) {
  const categories = ["All bakes", ...new Set(products.map((p) => p.category))];
  const [category, setCategory] = useState(
    categories.includes(initialCategory) ? initialCategory : "All bakes",
  );
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  let filtered = products.filter(
    (p) =>
      (category === "All bakes" || p.category === category) &&
      `${p.title} ${p.description}`.toLowerCase().includes(query.toLowerCase()),
  );
  const minPrice = (p: Product) => p.price;
  if (sort !== "featured")
    filtered = [...filtered].sort((a, b) =>
      sort === "price-up"
        ? minPrice(a) - minPrice(b)
        : sort === "price-down"
          ? minPrice(b) - minPrice(a)
          : a.title.localeCompare(b.title),
    );
  const shown = featured ? filtered.slice(0, 4) : filtered;
  return (
    <section className={styles.section} id="bakes" aria-label="Bakery menu">
      {featured ? (
        <div className={styles.heading}>
          <div>
            <span>FROM OUR OVEN</span>
            <h2>Meet your new favorites.</h2>
          </div>
          <Link href="/menu" className={button.text}>
            Browse our menu <ArrowRight size={16} />
          </Link>
        </div>
      ) : (
        <header className={styles.menuHeading}>
          <span>THE CLOUD BUN COLLECTION</span>
          <h1>A little something for everyone.</h1>
          <p>
            Homemade Filipino favorites and sweet little comforts. Message us to
            arrange your order.
          </p>
        </header>
      )}
      <div className={styles.controls}>
        <div className={styles.categories} aria-label="Product categories">
          {categories.map((c) => (
            <button
              key={c}
              aria-pressed={category === c}
              className={category === c ? styles.selected : ""}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        {!featured && (
          <div className={styles.searchSort}>
            <label className={styles.search}>
              <Search size={18} />
              <input
                aria-label="Search bakes"

                placeholder="Find your favorite..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  title="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </label>
            <select
              aria-label="Sort products"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-up">Price: low to high</option>
              <option value="price-down">Price: high to low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        )}
      </div>
      {!featured && (
        <p className={styles.count} role="status">
          {filtered.length} {filtered.length === 1 ? "bake" : "bakes"} to
          brighten your day
        </p>
      )}
      {!featured && (
        <p className={styles.priceNote}>
          Menu prices are before tax and may change. Confirm current pricing and
          availability when you message us.
        </p>
      )}
      <div className={styles.grid}>
        {shown.map((p) => (
          <ProductCard product={p} key={p.handle} />
        ))}
      </div>
      {!shown.length && (
        <div className={styles.empty}>
          <h3>No bakes found.</h3>
          <p>Try another search or explore the full menu.</p>
          <button
            className={button.secondary}
            onClick={() => {
              setCategory("All bakes");
              setQuery("");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
