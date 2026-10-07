import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import styles from "./MeditationInvite.module.css";

export default function MeditationInvite() {
  const t = useTranslations("market.meditationInvite");

  return (
    <section className={styles.section}>
      <Reveal className={styles.inner}>
        <div className={styles.eyebrow}>{t("eyebrow")}</div>
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.body}>{t("body")}</p>
        <p className={styles.details}>{t("details")}</p>
        <div className={styles.actions}>
          <Link href="/booking" className={styles.cta}>
            {t("cta")}
          </Link>
          <Link href="/cacao" className={styles.secondary}>
            {t("secondary")}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
