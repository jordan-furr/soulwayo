import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import styles from "./FinalCta.module.css";
import logo from "../../../public/images/soulwayo-logo.jpeg";

export default function FinalCta() {
  const t = useTranslations("home.finalCta");

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal as="div">
          <Image
            src={logo}
            alt="Soulwayo emblem — eagle and vulture"
            width={148}
            height={148}
            className={styles.logo}
            style={{ width: "clamp(120px, 14vw, 168px)", height: "auto" }}
          />
        </Reveal>
        <Reveal className={styles.eyebrow}>{t("eyebrow")}</Reveal>
        <Reveal as="p" delay={0.04} className={styles.vision}>
          {t("vision")}
        </Reveal>
        <Reveal as="p" delay={0.06} className={styles.headline}>
          {t("headline")}
        </Reveal>
        <Reveal as="p" delay={0.12} className={styles.body}>
          {t("body")}
        </Reveal>
        <Reveal delay={0.16}>
          <Link href="/contact" className={styles.cta}>
            {t("cta")}
          </Link>
        </Reveal>
        <Reveal as="p" delay={0.22} className={styles.closing}>
          {t("closingLine1")}
          <br />
          {t("closingLine2")}
          <br />
          {t("closingLine3")}
        </Reveal>
      </div>
    </section>
  );
}
