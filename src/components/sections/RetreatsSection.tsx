import Image from "next/image";
import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import styles from "./RetreatsSection.module.css";
import fireCircle from "../../../public/images/retreat-fire-circle.jpg";
import drum from "../../../public/images/drum.jpeg";

export default function RetreatsSection() {
  const t = useTranslations("retreats");

  return (
    <section id="retreats" className={styles.section}>
      <div className={styles.noise} />
      <div className={styles.inner}>
        <div className={styles.intro}>
          <Reveal className={styles.eyebrow}>{t("eyebrow")}</Reveal>
          <Reveal as="h2" delay={0.06} className={styles.headline}>
            {t("headline")}
          </Reveal>
          <Reveal as="p" delay={0.12} className={styles.quote}>
            {t("quote")}
          </Reveal>
          <Reveal as="p" delay={0.18} className={styles.body}>
            {t("body")}
          </Reveal>
        </div>

        <Reveal className={styles.grid}>
          <div className={`${styles.tile} ${styles.tileWide}`}>
            <Image
              src={drum}
              alt="Sarah playing a ceremonial drum inside a candlelit tipi"
              fill
              className={styles.tileImg}
              sizes="(max-width: 860px) 100vw, 60vw"
            />
          </div>
          <div className={styles.tile}>
            <Image
              src={fireCircle}
              alt="A fire circle with mats and candles in a sunlit forest clearing"
              fill
              className={styles.tileImg}
              sizes="(max-width: 860px) 100vw, 40vw"
            />
          </div>
        </Reveal>

        <Reveal className={styles.tags}>
          <span className={styles.tag}>{t("tag1")}</span>
          <span className={styles.tag}>{t("tag2")}</span>
          <span className={styles.tag}>{t("tag3")}</span>
          <span className={styles.tag}>{t("tag4")}</span>
        </Reveal>
      </div>
    </section>
  );
}
