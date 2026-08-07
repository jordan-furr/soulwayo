import Image from "next/image";
import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import { mailtoHref } from "@/lib/site";
import styles from "./FlyerSection.module.css";
import flyer from "../../../public/images/flyer-awaken-your-true-path.jpg";
import festivalFlyer from "../../../public/images/october-festival.jpeg";

export default function FlyerSection() {
  const t = useTranslations("flyer");
  const tCta = useTranslations("cta");

  return (
    <section id="next-retreat" className={styles.section}>
      <div className={styles.wrapper}>
        <Reveal className={styles.sectionEyebrow}>{t("eyebrow")}</Reveal>

        <div className={styles.event}>
          <Reveal className={styles.imageWrap}>
            <Image
              src={flyer}
              alt="Awaken Your True Path — Soulwayo retreat flyer"
              className={styles.image}
            />
          </Reveal>
          <div>
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

        <div className={styles.divider} />

        <div className={styles.event}>
          <Reveal className={styles.imageWrap}>
            <Image
              src={festivalFlyer}
              alt="Soulwayo Festival — save the date flyer"
              className={styles.image}
            />
          </Reveal>
          <div>
            <Reveal as="h2" delay={0.06} className={styles.title}>
              {t("festivalTitle")}
            </Reveal>
            <Reveal as="p" delay={0.12} className={styles.date}>
              {t("festivalDate")}
            </Reveal>
            <Reveal delay={0.2} className={styles.body}>
              <p className={styles.festivalPara}>
                {t("festivalLine1")}
                <br />
                {t("festivalLine2")}
              </p>
              <p className={styles.festivalPara}>{t("festivalLine3")}</p>
              <p className={styles.festivalPara}>
                {t("festivalLine4")}
                <br />
                {t("festivalLine5")}
                <br />
                {t("festivalLine6")}
                <br />
                {t("festivalLine7")}
              </p>
              <p className={styles.festivalPara}>
                {t("festivalLine8")}
                <br />
                {t("festivalLine9")}
                <br />
                {t("festivalLine10")}
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <a href={mailtoHref("Soulwayo Festival — Soulwayo")} className={styles.cta}>
                {tCta("getInTouch")}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
