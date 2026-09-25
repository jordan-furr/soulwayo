"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import styles from "./RetreatsFeature.module.css";
import singingImg from "../../../public/images/singing.jpeg";
import flyerOct from "../../../public/images/flyer-october-meditation.jpeg";
import flyerDec from "../../../public/images/flyer-return-to-soul.jpeg";

export default function RetreatsFeature() {
  const t = useTranslations("home.retreatsFeature");
  const [lightbox, setLightbox] = useState<StaticImageData | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.topText}>
            <Reveal className={styles.eyebrow}>{t("eyebrow")}</Reveal>
            <Reveal as="h2" delay={0.06} className={styles.headline}>
              {t("headline")}
            </Reveal>
            <Reveal as="p" delay={0.1} className={styles.quote}>
              {t("quote")}
            </Reveal>
            <Reveal as="p" delay={0.14} className={styles.body}>
              {t("body")}
            </Reveal>
            <Reveal delay={0.18}>
              <Link href="/retreats" className={styles.cta}>
                {t("cta")}
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1} className={styles.imageWrap}>
            <Image
              src={singingImg}
              alt="Retreat ceremony"
              className={styles.image}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </Reveal>
        </div>

        <Reveal delay={0.12} className={styles.rhythm}>
          <div className={styles.rhythmCard}>
            <div className={styles.rhythmLabel}>{t("rhythmRetreats")}</div>
            <div className={styles.rhythmValue}>{t("rhythmRetreatsValue")}</div>
          </div>
          <div className={styles.rhythmCard}>
            <div className={styles.rhythmLabel}>{t("rhythmCeremony")}</div>
            <div className={styles.rhythmValue}>{t("rhythmCeremonyValue")}</div>
          </div>
        </Reveal>

        <Reveal delay={0.16} className={styles.dates}>
          <h3 className={styles.datesTitle}>{t("upcomingDates")}</h3>
          <div className={styles.dateGrid}>
            <div className={styles.dateCard}>
              <button
                type="button"
                className={styles.flyerBtn}
                onClick={() => setLightbox(flyerOct)}
              >
                <Image
                  src={flyerOct}
                  alt="Community Meditation flyer"
                  className={styles.flyer}
                  width={180}
                  height={254}
                />
              </button>
              <div>
                <div className={styles.dateEyebrow}>{t("event1Eyebrow")}</div>
                <div className={styles.dateTitle}>{t("event1Title")}</div>
                <div className={styles.dateDetails}>{t("event1Details")}</div>
              </div>
            </div>
            <div className={styles.dateCard}>
              <button
                type="button"
                className={styles.flyerBtn}
                onClick={() => setLightbox(flyerDec)}
              >
                <Image
                  src={flyerDec}
                  alt="Return to Soul flyer"
                  className={styles.flyer}
                  width={180}
                  height={254}
                />
              </button>
              <div>
                <div className={styles.dateEyebrow}>{t("event2Eyebrow")}</div>
                <div className={styles.dateTitle}>{t("event2Title")}</div>
                <div className={styles.dateDetails}>{t("event2Details")}</div>
              </div>
            </div>
          </div>
          <Reveal delay={0.2}>
            <Link href="/booking" className={styles.futureDatesLink}>
              {t("futureDatesLink")}
            </Link>
          </Reveal>
        </Reveal>
      </div>

      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <Image
            src={lightbox}
            alt="Flyer"
            className={styles.lightboxImg}
            sizes="90vw"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
