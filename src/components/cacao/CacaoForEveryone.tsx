import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import styles from "./CacaoForEveryone.module.css";

export default function CacaoForEveryone() {
  const t = useTranslations("cacao.forEveryone");

  return (
    <section id="everyone" className={styles.section}>
      <div className={styles.inner}>
        <Reveal as="h2" className={styles.title}>{t("title")}</Reveal>
        <Reveal as="p" className={styles.body}>{t("p1")}</Reveal>
        <Reveal as="p" className={styles.body}>{t("p2")}</Reveal>
        <Reveal className={styles.callout}>
          <p className={styles.calloutText}>{t("callout")}</p>
        </Reveal>
        <Reveal as="p" className={styles.body}>{t("p3")}</Reveal>
        <Reveal as="p" className={styles.bodyStrong}>{t("p4")}</Reveal>
      </div>
    </section>
  );
}
