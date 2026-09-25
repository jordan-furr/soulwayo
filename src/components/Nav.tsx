"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import styles from "./Nav.module.css";
import logo from "../../public/images/soulwayo-logo.jpeg";

const NAV_LINKS = [
  { key: "retreats", href: "/retreats" },
  { key: "cacao", href: "/cacao" },
  { key: "about", href: "/about" },
] as const;

const TRANSPARENT_PAGES = ["/", "/retreats"];

export default function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const isTransparentPage = TRANSPARENT_PAGES.includes(pathname);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
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
      if (window.innerWidth > 900) setMenuOpen(false);
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

  const navClass = [
    styles.nav,
    scrolled ? styles.navScrolled : "",
    isTransparentPage && !scrolled ? styles.navTransparent : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <nav className={navClass}>
        <Link href="/" className={styles.brand}>
          <Image
            src={logo}
            alt="Soulwayo emblem"
            width={36}
            height={36}
            className={styles.brandMark}
            priority
          />
          <span className={styles.brandName}>Soulwayo</span>
        </Link>

        <div className={styles.desktopNav}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ""}`}
            >
              {t(link.key)}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`${styles.contactLink} ${pathname === "/contact" ? styles.navLinkActive : ""}`}
          >
            {t("contact")}
          </Link>
        </div>

        <div className={styles.mobileActions}>
          <button
            type="button"
            onClick={switchLocale}
            aria-label="Switch language"
            className={styles.mobileLang}
          >
            {locale.toUpperCase()}
          </button>
          <button
            type="button"
            className={styles.menuBtn}
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {t("menu")}
          </button>
        </div>
      </nav>

      <div
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <Link href="/" className={styles.drawerLink} onClick={() => setMenuOpen(false)}>
          {t("home")}
        </Link>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className={`${styles.drawerLink} ${pathname === link.href ? styles.drawerLinkActive : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {t(link.key)}
          </Link>
        ))}
        <Link
          href="/contact"
          className={styles.drawerContact}
          onClick={() => setMenuOpen(false)}
        >
          {t("contact")}
        </Link>
      </div>
    </>
  );
}
