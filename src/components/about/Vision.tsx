import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import styles from "./Vision.module.css";

export default function Vision() {
  const t = useTranslations("about.vision");

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal as="p" className={styles.body}>
          {t("p1")}
        </Reveal>
        <Reveal as="p" className={styles.body}>
          {t("p2Pre")} <em>{t("p2Italic")}</em>{t("p2Post")}
        </Reveal>
        <Reveal as="blockquote" className={styles.quote}>
          {t("quote")}
        </Reveal>
        <div className={styles.ctas}>
          <Link href="/retreats" className={styles.ctaPrimary}>
            {t("ctaPrimary")}
          </Link>
          <Link href="/contact" className={styles.ctaSecondary}>
            {t("ctaSecondary")}
          </Link>
        </div>
      </div>
    </section>
  );
}
