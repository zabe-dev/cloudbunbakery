import { SocialIcon } from "@/components/ui/SocialIcon";
import { SocialLinks } from "@/features/contact/SocialLinks";
import { site } from "@/lib/site";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  ShoppingBag,
  CalendarDays,
  PackageCheck,
} from "lucide-react";
import { ProductPhoto } from "@/features/catalog/ProductPhoto";
import styles from "./HomeSections.module.css";
import button from "@/components/ui/Button.module.css";
export function HomeSections() {
  return (
    <>
      <section className={styles.categories}>
        <span>WHAT ARE YOU CRAVING?</span>
        <h2>Find your kind of happy.</h2>
        <div>
          {(
            [
              { label: "Ensaymada", photo: "classic", category: "Ensaymada" },
              { label: "Fresh breads", photo: "bread", category: "Breads" },
              { label: "Cookies", photo: "crinkles", category: "Cookies" },
              {
                label: "Muffins & cakes",
                photo: "muffins",
                category: "Muffins & cakes",
              },
              { label: "Scones", photo: "scones", category: "Scones" },
            ] as const
          ).map((c) => (
            <Link
              href={`/menu?category=${encodeURIComponent(c.category)}`}
              key={c.label}
            >
              <ProductPhoto product={{ title: c.label, photo: c.photo }} />
              <h3>{c.label}</h3>
              <span>
                Discover <ArrowUpRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className={styles.story} id="our-story">
        <div
          className={styles.storyPhoto}
          role="img"
          aria-label="Cloud Bun's freshly prepared ensaymada in a home kitchen"
        />
        <div className={styles.storyCopy}>
          <span>OUR HOME, YOUR HAPPY PLACE</span>
          <h2>
            A small bakery.
            <br />A whole lot of heart.
          </h2>
          <p>
            There is something special about opening a box of freshly baked
            bread. The familiar flavors. The little moment of joy. The feeling
            of home, wherever you are.
          </p>
          <p>
            That is what Cloud Bun is all about. Homemade Filipino favorites,
            baked with care and shared with the people who make life sweet.
          </p>
          <span className={styles.script}>From our kitchen, with love.</span>
          <Link href="/menu" className={button.text}>
            Find a little comfort <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className={styles.pickup} id="pickup">
        <span>GOOD THINGS TAKE A LITTLE TIME</span>
        <h2>Your next box of happiness.</h2>
        <p>A little planning, a lot of freshly baked goodness.</p>
        <div className={styles.steps}>
          <article>
            <ShoppingBag size={29} strokeWidth={1.2} />
            <span>01</span>
            <h3>Pick your favorites</h3>
            <p>
              A dozen ensaymada? A box of crinkles?
              <br />
              Make room for something you love.
            </p>
          </article>
          <article>
            <CalendarDays size={29} strokeWidth={1.2} />
            <span>02</span>
            <h3>Send a little message</h3>
            <p>
              Message us on Instagram or Facebook
              <br />
              at least 3 days before pickup.
            </p>
          </article>
          <article>
            <PackageCheck size={29} strokeWidth={1.2} />
            <span>03</span>
            <h3>Pick up. Share. Enjoy.</h3>
            <p>
              We will confirm your pickup details.
              <br />
              You bring the appetite.
            </p>
          </article>
        </div>
        <Link href="/contact" className={button.text}>
          Questions before you order? <ArrowRight size={15} />
        </Link>
      </section>
      <section className={styles.social}>
        <header>
          <div>
            <span>THE SWEETER SIDE OF EVERYDAY</span>
            <h2>Fresh bakes. Happy faces.</h2>
          </div>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className={button.text}
          >
            <SocialIcon name="instagram" size={16} /> @cloudbunbakery <ArrowUpRight size={16} />
          </a>
        </header>
        <div className={styles.gallery}>
          {["bakes", "bread", "boxes", "scones"].map((image, i) => (
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              key={image}
              className={styles[image]}
              aria-label={
                [
                  "Ensaymada fresh from our kitchen on Instagram",
                  "Our fresh bread on Instagram",
                  "Bakery boxes on Instagram",
                  "Our scones on Instagram",
                ][i]
              }
            >
              <span>
                <SocialIcon name="instagram" size={22} />
              </span>
            </a>
          ))}
        </div>
        <p>
          <Heart size={14} /> Every order means the world to a home bakery.
          Thank you for being part of ours.
        </p>
      </section>
      <section className={styles.closing}>
        <Heart size={29} strokeWidth={1.2} />
        <h2>A little love, by the box.</h2>
        <p>For someone special. For everyone at the table. For you.</p>
        <SocialLinks />
      </section>
    </>
  );
}
