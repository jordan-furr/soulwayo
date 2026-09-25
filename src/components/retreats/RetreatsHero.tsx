import Image from "next/image";
import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import styles from "./RetreatsHero.module.css";
import heroImg from "../../../public/images/retreat-hero.jpg";

export default function RetreatsHero() {
  const t = useTranslations("retreats.hero");

  return (
    <header className={styles.hero}>
      <Image
        src={heroImg}
        alt="Sarah & Johannes in ceremony by the fire"
        fill
        priority
        className={styles.heroImg}
        sizes="100vw"
      />
      <div className={styles.scrim} />
      <div className={styles.inner}>
        <Reveal className={styles.eyebrow}>{t("eyebrow")}</Reveal>
        <Reveal as="h1" className={styles.title}>
          {t("headline")}
        </Reveal>
        <Reveal as="p" delay={0.25} className={styles.subtitle}>
          {t("subtitle")}
        </Reveal>
      </div>
    </header>
  );
}
