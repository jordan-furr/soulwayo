import Image from "next/image";
import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import { mailtoHref } from "@/lib/site";
import styles from "./FlyerSection.module.css";
import flyer from "../../../public/images/flyer-awaken-your-true-path.jpg";

export default function FlyerSection() {
  const t = useTranslations("flyer");

  return (
    <section id="next-retreat" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.imageWrap}>
          <Image
            src={flyer}
            alt="Awaken Your True Path — Soulwayo retreat flyer"
            className={styles.image}
          />
        </Reveal>
        <div>
          <Reveal className={styles.eyebrow}>{t("eyebrow")}</Reveal>
          <Reveal as="h2" delay={0.06} className={styles.title}>
            {t("title")}
          </Reveal>
          <Reveal as="p" delay={0.12} className={styles.date}>
            {t("date")}
          </Reveal>
          <Reveal delay={0.16} className={styles.tags}>
            <span className={styles.tag}>{t("tag1")}</span>
            <span className={styles.tag}>{t("tag2")}</span>
            <span className={styles.tag}>{t("tag3")}</span>
          </Reveal>
          <Reveal as="p" delay={0.2} className={styles.body}>
            {t("body")}
          </Reveal>
          <Reveal delay={0.24}>
            <a href={mailtoHref("Join this retreat — Soulwayo")} className={styles.cta}>
              {t("cta")}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
