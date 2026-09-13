"use client";

import { useEffect, useState } from "react";
import { products } from "@/features/catalog/data/products";
import { formatMoney } from "@/helpers/money";
import { MenuPreview } from "@/features/catalog/MenuPreview";
import styles from "./HomeCatalog.module.css";

const filters = ["All bakes", "Ensaymada", "Breads", "Sweet bakes"];
export function FavoritesMenu() {
  const [category, setCategory] = useState("All bakes");
  useEffect(() => {
    const syncHash = () => {
      const filter = filters.find(
        (value) =>
          window.location.hash === `#menu-${encodeURIComponent(value)}`,
      );
      if (filter) {
        setCategory(filter);
        document
          .getElementById("menu")
          ?.scrollIntoView({ behavior: "instant" });
      }
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);
  const shown = products.filter(
    (product) =>
      category === "All bakes" ||
      (category === "Sweet bakes"
        ? !["Ensaymada", "Breads"].includes(product.category)
        : product.category === category),
  );
  return (
    <section
      className={`section ${styles.favorites}`}
      id="menu"
      aria-labelledby="favorites-heading"
    >
      <div className="frame">
        <div className={`section-header ${styles.heading}`}>
          <div>
            <span className="eyebrow">FIND YOUR FAVORITES</span>
            <h2 id="favorites-heading">What’s in your next box?</h2>
          </div>
          <MenuPreview />
        </div>
        <div className={styles.menuLayout}>
          <aside className={styles.menuIntro}>
            <span className={styles.flourish} aria-hidden="true">
              Made to share.
            </span>
            <p>
              A dozen little joys, a breakfast staple, or something sweet for
              the table. There’s a bake for every kind of day.
            </p>
            <div className={styles.orderNote}>
              <span className="eyebrow">A LITTLE PLANNING, A LOT OF JOY</span>
              <p>
                Order at least 3 days before pickup. We’ll confirm your box and
                pickup details by message.
              </p>
            </div>
            <a className="bracket" href="#contact">
              [ Order a Box ↗ ]
            </a>
          </aside>
          <div className={styles.menuPanel}>
            <div
              className={styles.filters}
              role="group"
              aria-label="Filter favorites"
            >
              {filters.map((filter) => (
                <button
                  type="button"
                  key={filter}
                  aria-pressed={category === filter}
                  onClick={() => {
                    setCategory(filter);
                    window.history.replaceState(null, "", "#menu");
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
            <p className={styles.count} role="status">
              {shown.length} bakes to love <span>PRICE PER BOX</span>
            </p>
            <div className={styles.bakes}>
              {shown.map((product) => (
                <details className={styles.bake} key={product.handle}>
                  <summary>
                    <span>
                      <span className={styles.bakeName}>{product.title}</span>
                      <span className={styles.pack}>
                        {product.pack}
                        {product.toppings.length > 0
                          ? " · Choice of toppings"
                          : ""}
                      </span>
                    </span>
                    <span className={styles.price}>
                      {formatMoney(product.price)}
                      <span className={styles.plus} aria-hidden="true">
                        +
                      </span>
                    </span>
                  </summary>
                  <div className={styles.bakeDetails}>
                    <p>{product.description}</p>
                    {product.toppings.length > 0 && (
                      <p>
                        <strong>Toppings:</strong>{" "}
                        {product.toppings.join(" · ")}
                      </p>
                    )}
                    <a href="#contact">
                      Order {product.title} <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </details>
              ))}
            </div>
            <p className={styles.taxNote}>
              Prices subject to 3% restaurant tax. Availability and current
              pricing confirmed when ordering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
