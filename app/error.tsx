"use client";
import styles from "@/components/ui/PageState.module.css";
import button from "@/components/ui/Button.module.css";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className={styles.section}>
      <h1>A little pause in the kitchen.</h1>
      <p>
        We could not load the bakery right now. Please try again in a moment.
      </p>
      <button className={button.primary} onClick={reset}>
        Try again
      </button>
    </section>
  );
}
