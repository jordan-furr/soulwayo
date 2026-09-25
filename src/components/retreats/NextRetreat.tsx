"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import styles from "./NextRetreat.module.css";
import flyerImg from "../../../public/images/flyer-return-to-soul.jpeg";

export default function NextRetreat() {
  const t = useTranslations("retreats.nextRetreat");
  const [lightbox, setLightbox] = useState(false);

  return (
    <section id="upcoming" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.eyebrow}>{t("eyebrow")}</div>
        <div className={styles.grid}>
          <Reveal className={styles.flyerWrap}>
            <button
              type="button"
              className={styles.flyerBtn}
              onClick={() => setLightbox(true)}
            >
              <Image
                src={flyerImg}
                alt="Return to Soul winter retreat flyer"
                className={styles.flyer}
                sizes="(max-width: 900px) 90vw, 400px"
              />
            </button>
          </Reveal>
          <Reveal>
            <h2 className={styles.title}>{t("title")}</h2>
            <p className={styles.subtitle}>{t("subtitle")}</p>
            <p className={styles.location}>{t("location")}</p>
            <div className={styles.pills}>
              <span className={styles.pill}>{t("pill1")}</span>
              <span className={styles.pill}>{t("pill2")}</span>
              <span className={styles.pill}>{t("pill3")}</span>
            </div>
            <p className={styles.body}>{t("body")}</p>
            <Link href="/booking" className={styles.cta}>
              {t("cta")}
            </Link>
            <div className={styles.futureDates}>
              <span className={styles.futureDatesLabel}>{t("futureDatesLabel")}</span>
              <span className={styles.futureDate}>{t("futureDate1")}</span>
              <span className={styles.futureDate}>{t("futureDate2")}</span>
              <span className={styles.futureDate}>{t("futureDate3")}</span>
            </div>
          </Reveal>
        </div>
      </div>

      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(false)}>
          <Image
            src={flyerImg}
            alt="Return to Soul flyer"
            className={styles.lightboxImg}
            sizes="90vw"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={() => setLightbox(false)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
