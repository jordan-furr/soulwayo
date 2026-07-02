import Image from "next/image";
import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import { mailtoHref } from "@/lib/site";
import styles from "./Hero.module.css";
import heroImg from "../../../public/images/soulwayo-team.jpg";

export default function Hero() {
  const t = useTranslations("hero");
  const tCta = useTranslations("cta");

  return (
    <section id="top" className={styles.hero}>
      <Image
        src={heroImg}
        alt="Sarah & Johannes in a fireside forest ceremony"
        fill
        priority
        className={styles.heroImg}
        sizes="100vw"
      />
      <div className={`${styles.scrim} ${styles.scrimSide}`} />
      <div className={`${styles.scrim} ${styles.scrimBottom}`} />
      <div className={`${styles.scrim} ${styles.scrimMobile}`} />

      <div className={styles.inner}>
        <Reveal as="h1" className={styles.title}>
          Soulwayo
        </Reveal>
        <Reveal as="p" delay={0.16} className={styles.tagline}>
          {t("tagline")}
        </Reveal>
        <Reveal as="p" delay={0.24} className={styles.sub}>
          {t("sub")}
        </Reveal>
        <Reveal delay={0.32} className={styles.actions}>
          <a href={mailtoHref("Get in touch — Soulwayo")} className={styles.primaryBtn}>
            {tCta("getInTouch")}
          </a>
          <a href="#space" className={styles.exploreLink}>
            {t("explore")}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
