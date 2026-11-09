import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import styles from "./HomeShop.module.css";

import nightsEn from "../../../public/images/sacred-nights-en.jpg";
import nightsDe from "../../../public/images/sacred-nights-de.jpg";

// Home-page strip for the 12 Sacred Nights PDF guide.
export function NightsStrip() {
  const t = useTranslations("home.nightsStrip");
  const locale = useLocale();

  return (
    <section className={styles.nights}>
      <div className={styles.nightsInner}>
        <Reveal className={styles.flyer}>
          <Image
            src={locale === "de" ? nightsDe : nightsEn}
            alt={t("imageAlt")}
            className={styles.flyerImg}
            sizes="(max-width: 900px) 80vw, 440px"
          />
        </Reveal>
        <Reveal delay={0.08} className={styles.nightsText}>
          <div className={styles.eyebrowGold}>{t("eyebrow")}</div>
          <h2 className={styles.nightsTitle}>{t("title")}</h2>
          <p className={styles.nightsSubtitle}>{t("subtitle")}</p>
          <p className={styles.nightsBody}>{t("body")}</p>
          <p className={styles.price}>{t("price")}</p>
          <div className={styles.actions}>
            <Link href="/shop/order" className={styles.ctaGold}>
              {t("cta")}
            </Link>
            <Link href="/shop#sacred-nights" className={styles.ctaGhostLight}>
              {t("more")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
