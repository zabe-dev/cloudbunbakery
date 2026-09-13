import Link from "next/link";
import {
  ArrowRight,
  Heart,
  CalendarDays,
  Wheat,
  PackageCheck,
} from "lucide-react";
import styles from "./Hero.module.css";
import button from "@/components/ui/Button.module.css";
export function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div
          className={styles.photo}
          role="img"
          aria-label="Freshly baked Cloud Bun ensaymada with Oreo, Biscoff, coconut, and almond toppings"
        />
        <div className={styles.shade} />
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            <Heart size={14} /> HOMEMADE FILIPINO FAVORITES
          </span>
          <h1>
            Cloud Bun
            <br />
            Bakery<span>Little bites of home.</span>
          </h1>
          <p>
            Soft, fluffy, and made with a whole lot of heart.
            <br />A box of happiness, baked just for you.
          </p>
          <Link href="/contact" className={styles.cta}>
            Message us to order <ArrowRight size={18} />
          </Link>
          <span className={styles.signature}>
            Freshly baked. Made with heart.
          </span>
        </div>
        <div className={styles.seal}>
          <Heart size={20} strokeWidth={1.2} />
          <span>
            FROM OUR
            <br />
            HOME BAKERY
            <br />
            TO YOUR TABLE
          </span>
        </div>
        <div className={styles.caption}>
          THE CLOUD BUN COLLECTION <span>01 / OUR SIGNATURE ENSAYMADA</span>
        </div>
      </section>
      <div className={styles.promise}>
        <span>
          <Wheat size={23} strokeWidth={1.3} /> Homemade with care
        </span>
        <span>
          <Heart size={23} strokeWidth={1.3} /> Filipino flavors, familiar
          comforts
        </span>
        <span>
          <CalendarDays size={23} strokeWidth={1.3} /> Preorder 3 days ahead
        </span>
        <Link href="/#pickup">
          <PackageCheck size={23} strokeWidth={1.3} /> Made for your pickup{" "}
          <ArrowRight size={14} />
        </Link>
      </div>
      <div className={styles.welcome}>
        <span>A LITTLE COMFORT, FRESH FROM THE OVEN</span>
        <h2>Good things come in bakery boxes.</h2>
        <p>
          For coffee dates, family tables, and the moments in between.
          <br />
          Meet the bakes that make any day a little sweeter.
        </p>
        <Link href="/menu" className={button.text}>
          Explore our menu <ArrowRight size={16} />
        </Link>
      </div>
    </>
  );
}
