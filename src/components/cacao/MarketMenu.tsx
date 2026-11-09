import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site";
import styles from "./MarketMenu.module.css";
import menuImg from "../../../public/images/sacred-earth-collection-menu.png";

type MenuItem = {
  name: string;
  subtitle?: string;
  prices: string[];
  body: string;
  quote?: string;
};

// Winter-break notice for the market page; points people to the shop.
export function WinterNotice() {
  const t = useTranslations("market.menu.notice");

  return (
    <section id="order" className={styles.noticeBand}>
      <Reveal className={styles.notice}>
        <div className={styles.noticeEyebrow}>{t("eyebrow")}</div>
        <h2 className={styles.noticeTitle}>{t("title")}</h2>
        <p className={styles.noticeBody}>{t("body")}</p>
        <div className={styles.noticeActions}>
          <Link href="/shop" className={styles.cta}>
            {t("shop")}
          </Link>
          <a
            href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
            className={styles.ctaGhost}
          >
            {siteConfig.contactPhone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

// The Sacred Earth Collection: menu image plus the product list from the flyer.
export function SacredEarthCollection({ id }: { id?: string }) {
  const t = useTranslations("market.menu");
  const items = t.raw("items") as MenuItem[];

  return (
    <section id={id} className={styles.menuBand}>
      <div className={styles.inner}>
        <Reveal as="header" className={styles.header}>
          <div className={styles.eyebrow}>{t("eyebrow")}</div>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.subtitle}>{t("subtitle")}</p>
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.imageWrap}>
            <Image
              src={menuImg}
              alt={t("imageAlt")}
              className={styles.image}
              sizes="(max-width: 900px) 92vw, 560px"
            />
          </Reveal>

          <ul className={styles.list}>
            {items.map((item) => (
              <Reveal as="li" key={item.name} className={styles.item}>
                <h3 className={styles.itemName}>
                  {item.name}
                  {item.subtitle && (
                    <span className={styles.itemSubtitle}> – {item.subtitle}</span>
                  )}
                </h3>
                <ul className={styles.prices}>
                  {item.prices.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p className={styles.body}>{item.body}</p>
                {item.quote && <p className={styles.quote}>{item.quote}</p>}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
