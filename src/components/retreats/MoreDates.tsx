import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import styles from "./MoreDates.module.css";

export default function MoreDates() {
  const t = useTranslations("retreats.moreDates");

  return (
    <section id="more-dates" className={styles.section}>
      <div className={styles.wrap}>
        <Reveal className={styles.eyebrow}>{t("eyebrow")}</Reveal>
        <Reveal as="h2" className={styles.headline}>{t("headline")}</Reveal>
        <div className={styles.dates}>
          {(["date1", "date2", "date3"] as const).map((key) => (
            <Reveal key={key} className={styles.dateCard}>
              <span className={styles.dateText}>{t(key)}</span>
              <span className={styles.note}>{t("note")}</span>
              <Link href="/booking" className={styles.bookLink}>
                {t("cta")} →
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
