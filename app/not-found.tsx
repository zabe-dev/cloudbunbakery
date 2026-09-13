import Link from "next/link";
import styles from "@/components/ui/PageState.module.css";
import button from "@/components/ui/Button.module.css";
export default function NotFound() {
  return (
    <section className={styles.section}>
      <span>404</span>
      <h1>This bake has wandered off.</h1>
      <p>
        We could not find that page. There is still something lovely waiting in
        the bakery.
      </p>
      <Link href="/menu" className={button.primary}>
        Back to the bakery
      </Link>
    </section>
  );
}
