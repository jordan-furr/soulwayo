import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import styles from "./AboutCacao.module.css";

export default function AboutCacao() {
  const t = useTranslations("cacao.aboutCacao");

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal as="p" className={styles.intro}>{t("intro")}</Reveal>

        <Reveal className={styles.block}>
          <div className={styles.eyebrow}>{t("rootsEyebrow")}</div>
          <p className={styles.body}>{t("rootsP1")}</p>
          <p className={styles.body}>{t("rootsP2")}</p>
          <blockquote className={styles.quote}>
            {t("rootsQuote")}
          </blockquote>
        </Reveal>

        <Reveal className={styles.block}>
          <div className={styles.eyebrow}>{t("whatEyebrow")}</div>
          <p className={styles.body}>{t("whatP1")}</p>
          <p className={styles.body}>{t("whatP2")}</p>
          <p className={styles.body}>{t("whatP3")}</p>
        </Reveal>
      </div>
    </section>
  );
}
