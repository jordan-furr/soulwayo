import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import styles from "./SpaceSection.module.css";

export default function SpaceSection() {
  const t = useTranslations("home.space");

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal as="p" delay={0.06} className={styles.intro}>
          {t("headline")}
        </Reveal>
        <Reveal delay={0.1} className={styles.wantList}>
          <p className={styles.wantItem}>{t("want1")}</p>
          <p className={styles.wantItem}>{t("want2")}</p>
          <p className={styles.wantItem}>{t("want3")}</p>
          <p className={styles.wantItem}>{t("want4")}</p>
        </Reveal>
        <Reveal as="p" delay={0.16} className={styles.body}>
          {t("body")}
        </Reveal>

        <Reveal delay={0.22} className={styles.pathfinder}>
          <h3 className={styles.pathfinderTitle}>{t("pathfinderTitle")}</h3>
          <div className={styles.pathGrid}>
            <Link href="/contact" className={styles.pathCard}>
              <span className={styles.pathEmoji}>{t("path1Emoji")}</span>
              <span className={styles.pathLabel}>{t("path1Label")}</span>
              <span className={styles.pathDest}>{t("path1Dest1")}</span>
            </Link>
            <div className={styles.pathCard}>
              <span className={styles.pathEmoji}>{t("path2Emoji")}</span>
              <span className={styles.pathLabel}>{t("path2Label")}</span>
              <span className={styles.pathDest}>{t("path2Dest1")}</span>
              <span className={styles.pathDest}>{t("path2Dest2")}</span>
            </div>
            <div className={styles.pathCard}>
              <span className={styles.pathEmoji}>{t("path3Emoji")}</span>
              <span className={styles.pathLabel}>{t("path3Label")}</span>
              <Link href="/retreats" className={styles.pathDest}>{t("path3Dest1")}</Link>
              <Link href="/cacao" className={styles.pathDest}>{t("path3Dest2")}</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
