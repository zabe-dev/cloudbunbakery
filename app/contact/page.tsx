import { Heart } from "lucide-react";
import { SocialLinks } from "@/features/contact/SocialLinks";
import { pageMetadata } from "@/lib/metadata";
import styles from "@/features/contact/Contact.module.css";
export const metadata = pageMetadata(
  "Contact & Kentucky Pickup",
  "Contact Cloud Bun Bakery LLC on Instagram or Facebook for fresh Filipino bakes, availability, and Kentucky pickup arrangements.",
  "/contact/",
);
const faqs = [
  [
    "How do I order?",
    "Send us a message on Instagram or Facebook with your chosen bakes, number of boxes, and preferred pickup date. We will confirm availability, your total, and payment arrangements directly with you.",
  ],
  [
    "How far ahead should I order?",
    "Please message us at least 3 days before your preferred pickup date. We bake around a small home-bakery schedule, so planning ahead helps us give every batch the care it deserves.",
  ],
  [
    "How does pickup work?",
    "Tell us your preferred date when you message. The bakery will confirm your pickup time and location directly. Please wait for confirmation before making pickup plans.",
  ],
  [
    "Can I choose my ensaymada topping?",
    "Our menu includes Oreo, Biscoff, toasted coconut, and almonds. Let us know your preferred topping when you message. Ask us about mixed boxes and current availability.",
  ],
  [
    "Where can I check ingredients and allergens?",
    "Please message us before ordering for current ingredients and allergen information. Recipes and toppings vary, so we can help you check the specific bake you have in mind.",
  ],
  [
    "Are taxes included?",
    "Menu prices are before tax and may change. We will confirm the full price, including applicable taxes, when we arrange your order.",
  ],
  [
    "How do I change or cancel an order?",
    "Please message the bakery as soon as possible with your order details. Changes depend on whether preparation has started. We will confirm what is possible for your order.",
  ],
];
export default function ContactPage() {
  return (
    <section className={styles.section}>
      <header className={styles.heading}>
        <span>WE WOULD LOVE TO HEAR FROM YOU</span>
        <h1>A little hello goes a long way.</h1>
        <p>
          Questions about a bake, your order, or something special? Let us know.
        </p>
      </header>
      <div className={styles.columns}>
        <div className={styles.contact}>
          <Heart size={30} strokeWidth={1.2} />
          <h2>Talk to the baker.</h2>
          <p>
            Send us a message on Instagram or Facebook. Tell us your favorites
            and preferred pickup date, and we will take it from there.
          </p>
          <SocialLinks />
          <p>
            As a home bakery, we may be a little flour-covered, but we will get
            back to you as soon as we can.
          </p>
        </div>
        <div className={styles.faqs}>
          <h2>A few helpful answers.</h2>
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
