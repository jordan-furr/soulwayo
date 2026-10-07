import Image from "next/image";
import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import styles from "./CacaoHero.module.css";
import heroImg from "../../../public/images/sacred-cacao-peru.jpg";

export default function MarketHero() {
  const t = useTranslations("market.hero");

  return (
    <header className={`${styles.hero} ${styles.heroBrown}`}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <Reveal className={styles.eyebrow}>{t("eyebrow")}</Reveal>
          <Reveal as="h1" className={styles.headline}>
            {t("headline")}
          </Reveal>
          <Reveal as="p" delay={0.14} className={styles.body}>
            {t("body")}
          </Reveal>
          <Reveal as="p" delay={0.28} className={styles.note}>
            {t("note")}
          </Reveal>
        </div>
        <Reveal
          delay={0.2}
          className={`${styles.imageWrap} ${styles.desktopOnly}`}
          style={{ aspectRatio: "1179 / 1333", maxWidth: 520 }}
        >
          <Image
            src={heroImg}
            alt="Soulwayo Sacred Cacao aus Peru"
            fill
            sizes="520px"
            className={styles.image}
          />
        </Reveal>
      </div>
    </header>
  );
}
