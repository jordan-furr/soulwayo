import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import { mailtoHref } from "@/lib/site";
import styles from "./SpaceSection.module.css";

const PATHS = [
  { key: "path1", href: null as string | null },
  { key: "path2", href: "#pillars" },
  { key: "path3", href: "#retreats" },
  { key: "path4", href: "#pillars" },
] as const;

export default function SpaceSection() {
  const t = useTranslations("space");

  return (
    <section id="space" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.eyebrow}>{t("eyebrow")}</Reveal>
        <Reveal as="p" delay={0.06} className={styles.headline}>
          {t("headline")}
        </Reveal>
        <Reveal delay={0.1} className={styles.wantList}>
          <p className={styles.wantItem}>{t("want1")}</p>
          <p className={styles.wantItem}>{t("want2")}</p>
          <p className={styles.wantItem}>{t("want3")}</p>
          <p className={styles.wantItem}>{t("want4")}</p>
        </Reveal>
        <Reveal as="p" delay={0.16} className={styles.body}>
          {t("bodyPre")} <em>{t("bodyOn")}</em> {t("bodyMid")} <em>{t("bodyWith")}</em>{" "}
          {t("bodyPost")}
        </Reveal>

        <Reveal delay={0.22} className={styles.pathfinder}>
          <h3 className={styles.pathfinderTitle}>{t("pathfinderTitle")}</h3>
          <div className={styles.pathGrid}>
            {PATHS.map((path) => (
              <a
                key={path.key}
                href={path.href ?? mailtoHref("Get in touch — Soulwayo")}
                className={styles.pathCard}
              >
                <span className={styles.pathEmoji}>{t(`${path.key}Emoji`)}</span>
                <span className={styles.pathLabel}>{t(`${path.key}Label`)}</span>
                <span className={styles.pathDest}>→ {t(`${path.key}Dest`)}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
