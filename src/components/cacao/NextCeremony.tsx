import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import styles from "./NextCeremony.module.css";
import flyerImg from "../../../public/images/flyer-october-meditation.jpeg";

export default function NextCeremony() {
  const t = useTranslations("cacao.nextCeremony");

  return (
    <section id="upcoming" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.eyebrow}>{t("eyebrow")}</div>
        <div className={styles.grid}>
          <Reveal className={styles.flyerWrap}>
            <Image
              src={flyerImg}
              alt="Soulshine Community Meditation flyer"
              className={styles.flyer}
              sizes="(max-width: 900px) 90vw, 360px"
            />
          </Reveal>
          <Reveal>
            <h2 className={styles.title}>{t("title")}</h2>
            <p className={styles.date}>{t("date")}</p>
            <p className={styles.location}>{t("location")}</p>
            <p className={styles.tagline}>{t("tagline")}</p>
            <Link href="/contact" className={styles.cta}>
              {t("cta")}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
