import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import styles from "./PillarsSection.module.css";

const PILLARS = [
  {
    key: "p1",
    icon: (
      <svg width="44" height="44" viewBox="0 0 46 46" fill="none">
        <circle cx="23" cy="23" r="20" stroke="#2E4A3A" strokeWidth="1.2" />
        <circle cx="23" cy="23" r="11" stroke="#2E4A3A" strokeWidth="1.2" />
        <circle cx="23" cy="23" r="2.4" fill="#C47A3A" />
      </svg>
    ),
  },
  {
    key: "p2",
    icon: (
      <svg width="44" height="44" viewBox="0 0 46 46" fill="none">
        <path d="M23 5 L40 38 L6 38 Z" stroke="#2E4A3A" strokeWidth="1.2" strokeLinejoin="round" />
        <circle cx="23" cy="30" r="2.4" fill="#C47A3A" />
      </svg>
    ),
  },
  {
    key: "p3",
    icon: (
      <svg width="44" height="44" viewBox="0 0 46 46" fill="none">
        <path d="M31 8 a18 18 0 1 0 8 27 14 14 0 1 1 -8 -27 z" stroke="#2E4A3A" strokeWidth="1.2" strokeLinejoin="round" />
        <circle cx="34" cy="14" r="2.4" fill="#C47A3A" />
      </svg>
    ),
  },
] as const;

export default function PillarsSection() {
  const t = useTranslations("pillars");

  return (
    <section id="pillars" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.intro}>
          <div className={styles.eyebrow}>{t("eyebrow")}</div>
          <p className={styles.introText}>{t("intro")}</p>
        </Reveal>

        <div className={styles.grid}>
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.key} delay={i * 0.1} className={styles.card}>
              <div className={styles.icon}>{pillar.icon}</div>
              <h3 className={styles.cardTitle}>{t(`${pillar.key}.title`)}</h3>
              <p className={styles.cardBody}>{t(`${pillar.key}.body`)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
