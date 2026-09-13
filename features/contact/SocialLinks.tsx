import { SocialIcon } from "@/components/ui/SocialIcon";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import styles from "./SocialLinks.module.css";
export function SocialLinks() {
  return (
    <div className={styles.links}>
      <a href={site.instagram} target="_blank" rel="noreferrer">
        <SocialIcon name="instagram" /> Message on Instagram <ArrowUpRight size={16} />
      </a>
      <a href={site.facebook} target="_blank" rel="noreferrer">
        <SocialIcon name="facebook" /> Message on Facebook{" "}
        <ArrowUpRight size={16} />
      </a>
    </div>
  );
}
