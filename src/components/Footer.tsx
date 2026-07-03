import { useTranslations } from "next-intl";
import { mailtoHref, siteConfig } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <div className={styles.brand}>Soulwayo</div>
          <div className={styles.tagline}>{t("tagline")}</div>
        </div>
        <div className={styles.right}>
          <a href={mailtoHref("Get in touch — Soulwayo")} className={styles.contactLink}>
            {t("contact")}
          </a>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            Instagram
          </a>
          <span className={styles.domain}>{siteConfig.domain}</span>
        </div>
      </div>
      <div className={styles.legal}>{t("legal")}</div>
    </footer>
  );
}
