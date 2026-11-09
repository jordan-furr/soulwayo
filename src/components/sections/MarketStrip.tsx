import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import styles from "./MarketStrip.module.css";
import standImg from "../../../public/images/shop-market-stall.jpg";

export default function MarketStrip() {
  const t = useTranslations("home.marketStrip");

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.imageWrap}>
          <Image
            src={standImg}
            alt={t("imageAlt")}
            className={styles.image}
            sizes="(max-width: 900px) 90vw, 600px"
          />
        </Reveal>
        <Reveal delay={0.08} className={styles.text}>
          <div className={styles.eyebrow}>{t("eyebrow")}</div>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.body}>{t("body")}</p>
          <p className={styles.details}>{t("details")}</p>
          <Link href="/shop" className={styles.cta}>
            {t("cta")}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
