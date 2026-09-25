import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import styles from "./RetreatsIntro.module.css";

export default function RetreatsIntro() {
  const t = useTranslations("retreats.intro");

  return (
    <section id="intro" className={styles.section}>
      <div className={styles.inner}>
        <Reveal as="p" className={styles.statement}>
          {t("statement")}
        </Reveal>
        <Reveal className={styles.tags}>
          <span className={styles.tag}>{t("tag1")}</span>
          <span className={styles.tag}>{t("tag2")}</span>
          <span className={styles.tag}>{t("tag3")}</span>
        </Reveal>
      </div>
    </section>
  );
}
