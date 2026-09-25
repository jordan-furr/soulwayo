import Image from "next/image";
import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import styles from "./OurStory.module.css";
import portraitImg from "../../../public/images/sarah+johannes.jpeg";

export default function OurStory() {
  const t = useTranslations("about.ourStory");

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.imageWrap}>
          <Image
            src={portraitImg}
            alt="Sarah and Johannes"
            className={styles.image}
            sizes="(max-width: 900px) 90vw, 500px"
          />
        </Reveal>
        <div className={styles.text}>
          <Reveal className={styles.eyebrow}>{t("eyebrow")}</Reveal>
          <Reveal as="h1" delay={0.06} className={styles.headline}>
            {t("headline")}
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.body}>
            {t("p1")}
          </Reveal>
          <Reveal as="p" delay={0.14} className={styles.body}>
            {t("p2")}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
