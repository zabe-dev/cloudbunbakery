import { SocialIcon } from "@/components/ui/SocialIcon";
import Link from "next/link";
import { site } from "@/lib/site";
export function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="frame footer-grid">
        <div>
          <Link className="wordmark" href="/">
            Cloud Bun<span>BAKERY</span>
          </Link>
          <p>
            Homemade Filipino favorites.
            <br />
            Freshly baked. Made with heart.
          </p>
        </div>
        <div>
          <span className="eyebrow">NAVIGATE</span>
          <div className="footer-links">
            <Link href="/#menu">Menu</Link>
            <Link href="/#our-story">Our Story</Link>
            <Link href="/#pickup">How to Order</Link>
            <Link href="/#occasions">Special Occasions</Link>
            <Link href="/#contact">Find Us</Link>
          </div>
        </div>
        <div>
          <span className="eyebrow">STAY IN TOUCH</span>
          <p>
            A little more sweetness in your feed.
            <br />
            Follow along for fresh bakes and order updates.
          </p>
          <div className="footer-social">
            <a href={site.instagram} target="_blank" rel="noreferrer">
              [ <SocialIcon name="instagram" size={16} /> Instagram ↗ ]
            </a>
            <a href={site.facebook} target="_blank" rel="noreferrer">
              [ <SocialIcon name="facebook" size={16} /> Facebook ↗ ]
            </a>
          </div>
        </div>
      </div>
      <div className="frame footer-bottom">
        <span>
          © {new Date().getFullYear()} Cloud Bun Bakery LLC. All rights
          reserved.
        </span>
        <em>Homemade. Happily shared.</em>
      </div>
    </footer>
  );
}
