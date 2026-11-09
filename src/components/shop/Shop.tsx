import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site";
import styles from "./Shop.module.css";

import stallImg from "../../../public/images/shop-market-stall.jpg";
import tableImg from "../../../public/images/shop-market-table.jpg";
import standImg from "../../../public/images/shop-market-stand.jpg";
import seelenbilderImg from "../../../public/images/shop-market-seelenbilder.jpg";
import nightsEn from "../../../public/images/sacred-nights-en.jpg";
import nightsDe from "../../../public/images/sacred-nights-de.jpg";
import saltCrystalImg from "../../../public/images/holy-salt-crystal.jpg";
import saltFineImg from "../../../public/images/holy-salt-fine.jpg";
import ritualEn from "../../../public/images/salt-ritual-en.jpg";
import ritualDe from "../../../public/images/salt-ritual-de.jpg";

const MARKET_PHOTOS = [stallImg, tableImg, standImg, seelenbilderImg];
const SALT_IMAGES = [saltCrystalImg, saltFineImg];

// Order page + phone. There's no checkout; orders come in as requests.
function OrderButtons({ primaryLabel }: { primaryLabel?: string }) {
  const t = useTranslations("shop.hero");
  return (
    <div className={styles.actions}>
      <Link href="/shop/order" className={styles.cta}>
        {primaryLabel ?? t("order")}
      </Link>
      <a
        href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
        className={styles.ctaGhost}
      >
        {siteConfig.contactPhone}
      </a>
    </div>
  );
}

export function ShopHero() {
  const t = useTranslations("shop.hero");
  const tNav = useTranslations("shop.nav");
  const alts = t.raw("photoAlt") as string[];

  return (
    <header className={styles.hero}>
      <div className={styles.photos}>
        {MARKET_PHOTOS.map((img, i) => (
          <div key={i} className={`${styles.photo} ${i === 0 ? styles.photoMain : ""}`}>
            <Image
              src={img}
              alt={alts[i]}
              fill
              priority={i === 0}
              sizes={i === 0 ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 900px) 33vw, 17vw"}
              className={styles.photoImg}
            />
          </div>
        ))}
      </div>

      <div className={styles.heroInner}>
        <Reveal className={styles.eyebrow}>{t("eyebrow")}</Reveal>
        <Reveal as="h1" className={styles.headline}>
          {t("headline")}
        </Reveal>
        <Reveal as="p" delay={0.1} className={styles.lead}>
          {t("body")}
        </Reveal>

        <Reveal delay={0.18} className={styles.orderBox}>
          <h2 className={styles.orderTitle}>{t("orderTitle")}</h2>
          <p className={styles.orderBody}>{t("orderBody")}</p>
          <OrderButtons />
        </Reveal>

        <nav className={styles.jump} aria-label="Shop sections">
          <a href="#sacred-nights">{tNav("nights")}</a>
          <a href="#holy-salt">{tNav("salt")}</a>
          <a href="#collection">{tNav("collection")}</a>
          <a href="#salt-ritual">{tNav("ritual")}</a>
        </nav>
      </div>
    </header>
  );
}

type NightsOption = { name: string; note: string; price: string };

export function SacredNights() {
  const t = useTranslations("shop.nights");
  const locale = useLocale();
  const body = t.raw("body") as string[];
  const options = t.raw("options") as NightsOption[];

  return (
    <section id="sacred-nights" className={`${styles.band} ${styles.night}`}>
      <div className={styles.split}>
        <Reveal className={styles.figure}>
          <Image
            src={locale === "de" ? nightsDe : nightsEn}
            alt={t("imageAlt")}
            className={styles.figureImg}
            sizes="(max-width: 900px) 92vw, 520px"
          />
        </Reveal>

        <div>
          <Reveal className={styles.sectionEyebrow}>{t("eyebrow")}</Reveal>
          <Reveal as="h2" className={styles.sectionTitle}>
            {t("title")}
          </Reveal>
          <Reveal as="p" className={styles.sectionSubtitle}>
            {t("subtitle")}
          </Reveal>
          <Reveal>
            {body.map((p, i) => (
              <p key={i} className={styles.body}>{p}</p>
            ))}
          </Reveal>

          <Reveal as="h3" className={styles.listTitle}>
            {t("optionsTitle")}
          </Reveal>
          <Reveal as="ul" className={styles.options}>
            {options.map((o) => (
              <li key={o.name} className={styles.option}>
                <div>
                  <div className={styles.optionName}>{o.name}</div>
                  <div className={styles.optionNote}>{o.note}</div>
                </div>
                <div className={styles.optionPrice}>{o.price}</div>
              </li>
            ))}
          </Reveal>

          <Reveal as="p" className={styles.quote}>
            {t("quote")}
          </Reveal>
          <Reveal as="p" className={styles.signoff}>
            {t("signoff")}
          </Reveal>
          <Reveal as="p" className={styles.delivery}>
            {t("delivery")}
          </Reveal>
          <Reveal>
            <OrderButtons primaryLabel={t("cta")} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type SaltProduct = { name: string; prices: string[]; body: string; imageAlt: string };

export function HolySalt() {
  const t = useTranslations("shop.salt");
  const products = t.raw("products") as SaltProduct[];

  return (
    <section id="holy-salt" className={`${styles.band} ${styles.sand}`}>
      <div className={styles.wide}>
        <Reveal as="header" className={styles.centerHeader}>
          <div className={styles.badge}>{t("eyebrow")}</div>
          <h2 className={styles.sectionTitle}>{t("title")}</h2>
          <p className={styles.sectionSubtitle}>{t("subtitle")}</p>
          <p className={styles.body}>{t("intro")}</p>
        </Reveal>

        <div className={styles.cards}>
          {products.map((p, i) => (
            <Reveal as="article" key={p.name} className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src={SALT_IMAGES[i]}
                  alt={p.imageAlt}
                  className={styles.figureImg}
                  sizes="(max-width: 900px) 92vw, 360px"
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{p.name}</h3>
                <ul className={styles.prices}>
                  {p.prices.map((price) => (
                    <li key={price}>{price}</li>
                  ))}
                </ul>
                <p className={styles.cardText}>{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.centerFooter}>
          <p className={styles.motto}>{t("motto")}</p>
          <OrderButtons primaryLabel={t("cta")} />
        </Reveal>
      </div>
    </section>
  );
}

export function CollectionOrder() {
  const t = useTranslations("shop.collection");
  return (
    <section className={`${styles.band} ${styles.paperTight}`}>
      <Reveal className={styles.centerFooter}>
        <OrderButtons primaryLabel={t("cta")} />
      </Reveal>
    </section>
  );
}

type Step = { title: string; body: string };

export function SaltRitual() {
  const t = useTranslations("shop.ritual");
  const locale = useLocale();
  const steps = t.raw("steps") as Step[];
  const img = locale === "de" ? ritualDe : ritualEn;

  return (
    <section id="salt-ritual" className={`${styles.band} ${styles.sage}`}>
      <div className={styles.wide}>
        <Reveal as="header" className={styles.centerHeader}>
          <div className={styles.sectionEyebrow}>{t("eyebrow")}</div>
          <h2 className={styles.sectionTitle}>{t("title")}</h2>
          <p className={styles.sectionSubtitle}>{t("subtitle")}</p>
        </Reveal>

        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} className={styles.step}>
              <div className={styles.stepNum}>{i + 1}</div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className={styles.narrow}>
          <p className={styles.body}>{t("after")}</p>
          <p className={styles.quote}>{t("quote")}</p>
        </Reveal>

        <Reveal className={styles.article}>
          <a href={img.src} target="_blank" rel="noopener noreferrer">
            <Image
              src={img}
              alt={t("imageAlt")}
              className={styles.figureImg}
              sizes="(max-width: 1100px) 92vw, 1000px"
            />
          </a>
          <a href={img.src} target="_blank" rel="noopener noreferrer" className={styles.caption}>
            {t("imageCaption")} ↗
          </a>
        </Reveal>

        <Reveal as="p" className={`${styles.narrow} ${styles.disclaimer}`}>
          {t("disclaimer")}
        </Reveal>
      </div>
    </section>
  );
}

export function ShopContactStrip() {
  const t = useTranslations("shop.strip");
  return (
    <section className={styles.strip}>
      <Reveal className={styles.stripInner}>
        <div className={styles.stripEyebrow}>{t("eyebrow")}</div>
        <h2 className={styles.stripTitle}>{t("title")}</h2>
        <p className={styles.stripBody}>{t("body")}</p>
        <OrderButtons />
      </Reveal>
    </section>
  );
}
