import { SocialIcon } from "@/components/ui/SocialIcon";
import Image from "next/image";
import { MenuPreview } from "@/features/catalog/MenuPreview";
import Link from "next/link";
import { Reveal } from "@/features/home/Reveal";
import { HomeCatalog } from "@/features/home/HomeCatalog";
import { FavoritesMenu } from "@/features/home/FavoritesMenu";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Freshly Baked. Made with Heart.",
  site.description,
  "/",
);
const Button = ({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) => (
  <Link href={href} className={`bracket ${light ? "light" : ""}`}>
    [ {children} ]
  </Link>
);
const photos: Record<string, string> = {
  craft: "topped-ensaymada",
  ensaymada: "ensaymada-assortment",
  bread: "golden-bread-rolls",
  scones: "blueberry-scones",
  boxes: "boxed-blueberry-scones",
  shared: "chocolate-crinkles",
};
const Photo = ({
  kind,
  label,
  className = "",
}: {
  kind: string;
  label: string;
  className?: string;
}) => (
  <div className={`photo-window ${className}`}>
    <Image
      src={`/images/bakery/${photos[kind]}.webp`}
      alt={label}
      fill
      sizes="(max-width: 700px) 100vw, 50vw"
      className={`editorial-photo photo-${kind}`}
    />
  </div>
);
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Bakery",
            name: site.name,
            description: site.description,
            sameAs: [site.instagram, site.facebook],
          }).replace(/</g, "\\u003c"),
        }}
      />
      <section className="editorial-hero">
        <Image
          src="/images/bakery/ensaymada-assortment.webp"
          alt="Cloud Bun's fresh ensaymada with assorted toppings"
          className="hero-image"
          fill
          sizes="100vw"
          preload
        />
        <div className="hero-overlay" />
        <div className="frame hero-copy">
          <span className="eyebrow">HOMEMADE FILIPINO FAVORITES</span>
          <h1>
            <span>Freshly baked.</span>
            <span>Made with heart.</span>
          </h1>
          <p>A little taste of home. A little moment of joy.</p>
          <div className="button-row">
            <MenuPreview label="View Menu" light />
            <Button href="#pickup" light>
              Place an Order
            </Button>
          </div>
        </div>
        <div className="hero-bottom frame">
          <span>SOFT. FLUFFY. IRRESISTIBLE.</span>
          <a href="#our-story">
            DISCOVER CLOUD BUN <span>↓</span>
          </a>
        </div>
      </section>
      <section className="section craft" id="our-story">
        <Reveal className="frame split">
          <div className="section-copy">
            <span className="eyebrow">OUR HOME BAKERY</span>
            <h2>
              A little comfort.
              <br />
              Fresh from
              <br />
              the oven.
            </h2>
            <p>
              Familiar flavors. Soft, golden bakes. The kind of goodness that
              brings everyone to the table.
            </p>
            <p>
              At Cloud Bun, we make Filipino favorites with care — from our home
              kitchen to your happiest moments.
            </p>
            <div className="button-row">
              <MenuPreview label="See Full Menu" />
              <Button href="#pickup">Order Now</Button>
            </div>
          </div>
          <Photo
            kind="craft"
            label="Freshly baked ensaymada with assorted toppings on a plate"
            className="craft-image"
          />
        </Reveal>
      </section>
      <div
        className="ticker"
        aria-label="Ensaymada, pandesal, Spanish bread, crinkles, muffins, scones"
      >
        <div aria-hidden="true">
          {[0, 1].map((i) => (
            <span key={i}>
              ENSAYMADA · PANDESAL · SPANISH BREAD · CHOCOLATE CRINKLES · BANANA
              MUFFINS · SCONES ·{" "}
            </span>
          ))}
        </div>
      </div>
      <HomeCatalog />
      <section className="section muted-section" id="pickup">
        <Reveal className="frame split process">
          <Photo
            kind="boxes"
            label="Cloud Bun bakery boxes carefully packed and ready for pickup"
          />
          <div className="section-copy">
            <span className="eyebrow">GOOD THINGS TAKE A LITTLE TIME</span>
            <h2>
              Baked with care.
              <br />
              Worth the wait.
            </h2>
            <p>
              Every box starts with a little planning. Please place your order
              at least three days before your preferred pickup date.
            </p>
            <ol className="process-steps">
              {[
                [
                  "Pick your favorites",
                  "Something for your morning coffee, or a whole box to share.",
                ],
                [
                  "Send us a message",
                  "Tell us your bakes, quantities, and preferred pickup date on Instagram or Facebook.",
                ],
                [
                  "Pick up. Share. Enjoy.",
                  "We’ll confirm availability, your total, and pickup details directly with you.",
                ],
              ].map(([title, body], i) => (
                <li key={title}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Button href="#contact">Let’s Talk Bakes</Button>
          </div>
        </Reveal>
      </section>
      <FavoritesMenu />
      <section className="photo-banner">
        <div className="banner-photo" />
        <div className="banner-shade" />
        <Reveal className="banner-copy">
          <span className="eyebrow">FROM OUR KITCHEN TO YOUR TABLE</span>
          <h2>
            Good things come
            <br />
            in bakery boxes.
          </h2>
          <p>For coffee dates, family tables, and the moments in between.</p>
          <Button href="#contact" light>
            Reserve Your Box
          </Button>
        </Reveal>
      </section>
      <section className="section" id="occasions">
        <Reveal className="frame occasion-grid">
          <article>
            <span className="eyebrow">GATHER & SHARE</span>
            <h2>
              For the whole
              <br />
              table.
            </h2>
            <p>
              Family get-togethers, office coffee breaks, or a weekend with
              friends. Bring a box of familiar favorites and make a little room
              for joy.
            </p>
            <Button href="#contact">Order a Box to Share</Button>
          </article>
          <article>
            <span className="eyebrow">A THOUGHTFUL LITTLE GIFT</span>
            <h2>
              Say it with
              <br />
              something sweet.
            </h2>
            <p>
              A thank you. A celebration. A just-because surprise. Tell us what
              you have in mind and we’ll help you choose a box to share.
            </p>
            <Button href="#contact">Get in Touch</Button>
          </article>
        </Reveal>
      </section>
      <section className="section muted-section testimonials">
        <div className="frame">
          <span className="eyebrow">A LITTLE LOVE FROM OUR COMMUNITY</span>
          <h2>Happy bakes. Happy people.</h2>
          <div className="quote-grid">
            <blockquote>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <p>It’s like a little pillow of goodness</p>
              <cite>MARCUS LAKE</cite>
            </blockquote>
            <blockquote>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <p>
                We really enjoyed the ensaymadas! I shared them with some
                friends, and everyone commented on how much they liked that they
                weren’t overly sweet.
              </p>
              <cite>A CLOUD BUN CUSTOMER</cite>
            </blockquote>
            <blockquote>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <p>So light and fluffy</p>
              <cite>DUSTIN MATTHEWS</cite>
            </blockquote>
          </div>
          <p className="quote-note">
            Snippets from customer messages shared on Cloud Bun’s Instagram
            stories.
          </p>
        </div>
      </section>
      <section className="section instagram-section">
        <div className="frame">
          <div className="section-header">
            <span className="eyebrow">
              LITTLE MOMENTS, FRESH FROM THE KITCHEN
            </span>
            <a
              className="bracket"
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
            >
              [ <SocialIcon name="instagram" size={16} /> Follow Us ↗ ]
            </a>
          </div>
          <div className="instagram-grid">
            {["ensaymada", "bread", "boxes", "scones", "shared"].map(
              (kind, i) => (
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  key={kind}
                  aria-label={`View Cloud Bun bakery photo ${i + 1} on Instagram`}
                >
                  <Photo
                    kind={kind}
                    label={
                      [
                        "Topped ensaymada",
                        "Fresh bread",
                        "Bakery boxes",
                        "Fresh scones",
                        "Chocolate crinkles ready to share",
                      ][i]
                    }
                  />
                </a>
              ),
            )}
          </div>
        </div>
      </section>
      <section className="section muted-section" id="contact">
        <Reveal className="frame split contact-split">
          <div>
            <span className="eyebrow">A MESSAGE AWAY</span>
            <h2>
              Your next box
              <br />
              starts here.
            </h2>
            <div className="contact-detail">
              <span className="eyebrow">OUR HOME BAKERY</span>
              <p>
                Cloud Bun Bakery, LLC
                <br />
                Pickup location and time confirmed with your order.
              </p>
            </div>
            <div className="contact-detail">
              <span className="eyebrow">PLAN AHEAD</span>
              <p>
                Please allow at least 3 days before pickup.
                <br />
                Orders are subject to availability.
              </p>
            </div>
            <div className="contact-detail">
              <span className="eyebrow">GET IN TOUCH</span>
              <p>Tell us what you’re craving. We’ll take care of the rest.</p>
              <div className="button-row">
                <a
                  className="bracket"
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  [ <SocialIcon name="instagram" size={16} /> Instagram ↗ ]
                </a>
                <a
                  className="bracket"
                  href={site.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  [ <SocialIcon name="facebook" size={16} /> Facebook ↗ ]
                </a>
              </div>
            </div>
          </div>
          <div className="brand-panel">
            <Image
              src="/images/logo.jpg"
              alt="Cloud Bun Bakery LLC logo"
              width={600}
              height={600}
            />
            <span>FRESHLY BAKED. MADE WITH HEART.</span>
          </div>
        </Reveal>
      </section>
    </>
  );
}
