import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <div className={styles.brand}>Soulwayo</div>
          <div className={styles.tagline}>{t("tagline")}</div>
        </div>
        <div className={styles.columns}>
          <div className={styles.column}>
            <Link href="/retreats" className={styles.navLink}>{tNav("retreats")}</Link>
            <Link href="/cacao" className={styles.navLink}>{tNav("cacao")}</Link>
            <Link href="/about" className={styles.navLink}>{tNav("about")}</Link>
          </div>
          <div className={styles.column}>
            <a href={`mailto:${siteConfig.contactEmail}`} className={styles.contactLink}>
              {siteConfig.contactEmail}
            </a>
            <a
              href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
              className={styles.contactLink}
            >
              {siteConfig.contactPhone}
            </a>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className={styles.legal}>{t("legal")}</div>
    </footer>
  );
}
