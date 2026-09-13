import Image from "next/image";
import { Reveal } from "./Reveal";
import styles from "./HomeCatalog.module.css";

const collections = [
  {
    title: "The art of soft & fluffy.",
    category: "01 / OUR SIGNATURE",
    image: "ensaymada-assortment",
    alt: "Assorted ensaymada with sweet toppings",
    description:
      "Buttery brioche, a little sweetness, and a topping to make it yours. Meet our classic and ube ensaymada.",
    label: "Craving ensaymada?",
    filter: "Ensaymada",
  },
  {
    title: "Your everyday comfort.",
    category: "02 / THE BREAD BASKET",
    image: "golden-bread-rolls",
    alt: "Fresh golden bread rolls",
    description: "Pandesal & Spanish bread. Best shared over a slow morning.",
    label: "Fresh bread, anyone?",
    filter: "Breads",
  },
  {
    title: "Save room for sweet.",
    category: "03 / THE SWEET SIDE",
    image: "chocolate-crinkles",
    alt: "Sugar-dusted chocolate crinkles",
    description: "Cookies, cakes & scones for your just-one-more moments.",
    label: "Something sweet?",
    filter: "Sweet bakes",
  },
];

export function HomeCatalog() {
  return (
    <section
      className="section"
      id="selection"
      aria-labelledby="collection-heading"
    >
      <div className="frame">
        <Reveal className={`section-header ${styles.heading}`}>
          <div>
            <span className="eyebrow">THE CLOUD BUN COLLECTION</span>
            <h2 id="collection-heading">A little taste of home.</h2>
          </div>
          <p>
            From the first warm bite to the last crumb.
            <br />
            Find a little comfort in every box.
          </p>
        </Reveal>
        <div className={styles.collections}>
          {collections.map((collection) => (
            <a
              key={collection.filter}
              href={`#menu-${encodeURIComponent(collection.filter)}`}
              className={styles.collection}
            >
              <div className={styles.photo}>
                <Image
                  src={`/images/bakery/${collection.image}.webp`}
                  alt={collection.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
              </div>
              <div className={styles.copy}>
                <span className="eyebrow">{collection.category}</span>
                <h3>{collection.title}</h3>
                <p>{collection.description}</p>
                <span className={styles.collectionLink}>
                  {collection.label}
                  <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
