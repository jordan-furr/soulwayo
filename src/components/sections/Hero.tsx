import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import styles from "./Hero.module.css";
import heroImg from "../../../public/images/hero-alt.jpeg";

export default function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section id="top" className={styles.hero}>
      <Image
        src={heroImg}
        alt="Soulwayo — a sacred space in the forest"
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
        <Reveal delay={0.32} className={styles.actions}>
          <Link href="/retreats" className={styles.primaryBtn}>
            {t("ctaPrimary")}
          </Link>
          <Link href="/contact" className={styles.exploreLink}>
            {t("ctaSecondary")}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
