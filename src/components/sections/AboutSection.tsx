import Image from "next/image";
import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import styles from "./AboutSection.module.css";
import portrait from "../../../public/images/sarah-johannes.jpeg";

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.imageWrap}>
          <Image
            src={portrait}
            alt="Sarah & Johannes, portrait"
            className={styles.image}
            sizes="(max-width: 860px) 100vw, 50vw"
          />
        </Reveal>
        <div>
          <Reveal className={styles.eyebrow}>{t("eyebrow")}</Reveal>
          <Reveal as="h2" delay={0.06} className={styles.name}>
            {t("heading")}
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.body}>
            {t("p1")}
          </Reveal>
          <Reveal as="p" delay={0.14} className={styles.body}>
            {t("p2")}
          </Reveal>
        </div>
      </div>

      <div className={styles.bios}>
        <Reveal as="p" delay={0.06} className={styles.body}>
          <strong>{t("sarahName")}</strong> {t("sarahRest")}
        </Reveal>
        <Reveal as="p" delay={0.1} className={styles.body}>
          <strong>{t("johannesName")}</strong> {t("johannesRest")}
        </Reveal>
      </div>

      <Reveal delay={0.06} className={styles.storyCallout}>
        <p className={styles.body}>{t("p5")}</p>
        <p className={styles.body}>
          {t("p6Pre")} <em>{t("p6Italic")}</em>. {t("p6Post")}
        </p>
        <p className={styles.quote}>{t("quote")}</p>
      </Reveal>
    </section>
  );
}
