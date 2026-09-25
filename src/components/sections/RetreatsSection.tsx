import Image from "next/image";
import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import styles from "./RetreatsSection.module.css";
import drum from "../../../public/images/singing.jpeg";
import sarahPhoto from "../../../public/images/sarah.jpeg";
import johannesPhoto from "../../../public/images/johannes.jpeg";

export default function RetreatsSection() {
  const t = useTranslations("retreats");

  return (
    <section id="retreats" className={styles.section}>
      <div className={styles.noise} />
      <div className={styles.inner}>
        <div className={styles.intro}>
          <Reveal className={styles.eyebrow}>{t("eyebrow")}</Reveal>
          <Reveal as="h2" delay={0.06} className={styles.headline}>
            {t("headline")}
          </Reveal>
          <Reveal as="p" delay={0.12} className={styles.quote}>
            {t("quote")}
          </Reveal>
          <Reveal as="p" delay={0.18} className={styles.body}>
            {t("body")}
          </Reveal>
          <Reveal delay={0.22} className={styles.highlights}>
            <span className={styles.highlightPill}>{t("highlight1")}</span>
            <span className={styles.highlightPill}>{t("highlight2")}</span>
            <span className={styles.highlightPill}>{t("highlight3")}</span>
          </Reveal>
        </div>

        <Reveal className={styles.grid}>
          <div className={`${styles.tile} ${styles.tileWide}`}>
            <Image
              src={drum}
              alt="Sarah playing a ceremonial drum inside a candlelit tipi"
              fill
              className={styles.tileImg}
              sizes="100vw"
            />
          </div>
        </Reveal>

        <Reveal className={styles.tags}>
          <span className={styles.tag}>{t("tag1")}</span>
          <span className={styles.tag}>{t("tag2")}</span>
          <span className={styles.tag}>{t("tag3")}</span>
          <span className={styles.tag}>{t("tag4")}</span>
        </Reveal>

        <div className={styles.facilitators}>
          <Reveal className={styles.facilitatorsEyebrow}>
            {t("facilitatorsEyebrow")}
          </Reveal>

          <div className={styles.bios}>
            <Reveal className={styles.bio}>
              <div className={styles.bioImageWrap}>
                <Image
                  src={sarahPhoto}
                  alt="Sarah"
                  width={480}
                  height={600}
                  className={styles.bioImage}
                />
              </div>
              <div className={styles.bioText}>
                <h3 className={styles.bioName}>{t("sarahName")}</h3>
                <p className={styles.bioBody}>{t("sarahP1")}</p>
                <p className={styles.bioBody}>{t("sarahP2")}</p>
                <p className={styles.bioBody}>{t("sarahP3")}</p>
                <p className={styles.bioBody}>{t("sarahP4")}</p>
                <p className={styles.bioClosing}>{t("sarahClosing")}</p>
                <p className={styles.bioQuote}>{t("sarahQuote")}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className={styles.bio}>
              <div className={styles.bioImageWrap}>
                <Image
                  src={johannesPhoto}
                  alt="Johannes"
                  width={480}
                  height={600}
                  className={styles.bioImage}
                />
              </div>
              <div className={styles.bioText}>
                <h3 className={styles.bioName}>{t("johannesName")}</h3>
                <p className={styles.bioBody}>{t("johannesP1")}</p>
                <p className={styles.bioBody}>{t("johannesP2")}</p>
                <p className={styles.bioBody}>{t("johannesP3")}</p>
                <p className={styles.bioBody}>{t("johannesP4")}</p>
                <p className={styles.bioClosing}>{t("johannesClosing")}</p>
                <p className={styles.bioQuote}>{t("johannesQuote")}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
