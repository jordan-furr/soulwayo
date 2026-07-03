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
            {t("name")}
          </Reveal>
          <Reveal as="p" delay={0.12} className={styles.body}>
            {t("body")}
          </Reveal>
          <Reveal as="p" delay={0.18} className={styles.quote}>
            {t("quote")}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
