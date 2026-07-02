import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import styles from "./SpaceSection.module.css";

export default function SpaceSection() {
  const t = useTranslations("space");

  return (
    <section id="space" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.eyebrow}>{t("eyebrow")}</Reveal>
        <Reveal as="p" delay={0.06} className={styles.headline}>
          {t("headline")}
        </Reveal>
        <Reveal as="p" delay={0.14} className={styles.body}>
          {t("bodyPre")} <em>{t("bodyOn")}</em> {t("bodyMid")} <em>{t("bodyWith")}</em>{" "}
          {t("bodyPost")}
        </Reveal>
        <Reveal as="p" delay={0.2} className={styles.quote}>
          {t("quote")}
        </Reveal>
      </div>
    </section>
  );
}
