import Image from "next/image";
import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import styles from "./CacaoHero.module.css";
import fireCircle from "../../../public/images/retreat-ceremony-tent.jpeg";

export default function CacaoHero() {
  const t = useTranslations("cacao.hero");

  return (
    <header className={styles.hero}>
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
        <Reveal delay={0.2} className={styles.imageWrap}>
          <Image
            src={fireCircle}
            alt="Cacao ceremony fire circle"
            fill
            sizes="(max-width: 900px) 90vw, 45vw"
            className={styles.image}
          />
        </Reveal>
      </div>
    </header>
  );
}
