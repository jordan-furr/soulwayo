"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { mailtoHref } from "@/lib/site";
import styles from "./Nav.module.css";
import logo from "../../public/images/soulwayo-logo.jpg";

const NAV_LINKS = [
  { key: "approach", href: "#space" },
  { key: "work", href: "#pillars" },
  { key: "about", href: "#about" },
  { key: "retreats", href: "#retreats" },
] as const;

export default function Nav() {
  const t = useTranslations("nav");
  const tCta = useTranslations("cta");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("sw-menu-open", menuOpen);
    return () => document.body.classList.remove("sw-menu-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 860) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const otherLocale = locale === "en" ? "de" : "en";
  const switchLocale = () => {
    router.replace(pathname, { locale: otherLocale });
  };

  const contactHref = mailtoHref("Get in touch — Soulwayo");

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <a href="#top" className={styles.brand}>
          <Image
            src={logo}
            alt="Soulwayo emblem"
            width={42}
            height={42}
            className={styles.brandMark}
            priority
          />
          <span className={styles.brandName}>Soulwayo</span>
        </a>

        <div className={styles.desktopNav}>
          {NAV_LINKS.map((link) => (
            <a key={link.key} href={link.href} className={styles.navLink}>
              {t(link.key)}
            </a>
          ))}
          <a href={contactHref} className={styles.contactBtn}>
            {t("contact")}
          </a>
          <button
            type="button"
            onClick={switchLocale}
            aria-label="Switch language"
            className={styles.langBtn}
          >
            <LangIcon />
            <span>{locale.toUpperCase()}</span>
          </button>
        </div>

        <div className={styles.mobileActions}>
          <button
            type="button"
            onClick={switchLocale}
            aria-label="Switch language"
            className={styles.mobileLang}
          >
            <LangIcon size={14} />
            <span>{locale.toUpperCase()}</span>
          </button>
          <button
            type="button"
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={styles.burgerBar} />
          </button>
        </div>
      </nav>

      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}>
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className={styles.drawerClose}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        {NAV_LINKS.map((link) => (
          <a
            key={link.key}
            href={link.href}
            className={styles.drawerLink}
            onClick={() => setMenuOpen(false)}
          >
            {t(link.key)}
          </a>
        ))}
        <a
          href="#next-retreat"
          className={`${styles.drawerLink} ${styles.drawerAccent}`}
          onClick={() => setMenuOpen(false)}
        >
          {t("nextRetreat")}
        </a>
        <a href={contactHref} className={styles.drawerContact} onClick={() => setMenuOpen(false)}>
          {tCta("getInTouch")}
        </a>
      </div>
    </>
  );
}

function LangIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}
