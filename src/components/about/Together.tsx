import Image from "next/image";
import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import styles from "./Together.module.css";
import portraitImg from "../../../public/images/retreat-ceremony-tent.jpeg";

export default function Together() {
  const t = useTranslations("about.together");

  return (
    <section className={styles.section}>
      <div className={styles.layout}>
        <Reveal className={styles.imageWrap}>
          <Image
            src={portraitImg}
            alt="Sarah and Johannes with guitar and drum in the ceremony tent"
            className={styles.image}
            sizes="(max-width: 900px) 90vw, 460px"
          />
        </Reveal>
        <div className={styles.inner}>
        <Reveal className={styles.eyebrow}>{t("eyebrow")}</Reveal>
        <Reveal as="p" delay={0.06} className={styles.headline}>
          {t("headline")}
        </Reveal>
        <p className={styles.body}>{t("p1")}</p>
        <p className={styles.body}>{t("p2")}</p>
        <p className={styles.body}>{t("p3")}</p>
        <p className={styles.body}>{t("p4")}</p>
        <p className={styles.body}>{t("p5")}</p>
        <Reveal as="p" className={styles.closing}>
          {t("closingLine1")}
          <br />
          <span className={styles.highlight}>{t("closingHighlight")}</span>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
