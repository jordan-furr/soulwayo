import Image, { type StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import styles from "./NextCeremony.module.css";

// Event box shared by the meditation page (no flyer) and the market page.
export default function NextCeremony({
  namespace = "cacao.nextCeremony",
  href = "/booking",
  image,
  imageAlt = "",
  tone = "green",
}: {
  namespace?: "cacao.nextCeremony" | "market.visit";
  href?: "/booking" | "/contact";
  image?: StaticImageData;
  imageAlt?: string;
  tone?: "green" | "brown";
}) {
  const t = useTranslations(namespace);

  return (
    <section
      id="upcoming"
      className={`${styles.section} ${tone === "brown" ? styles.sectionBrown : ""}`}
    >
      <div className={styles.wrap}>
        <div className={styles.eyebrow}>{t("eyebrow")}</div>
        <div className={image ? styles.grid : styles.single}>
          {image && (
            <Reveal className={styles.flyerWrap}>
              <Image
                src={image}
                alt={imageAlt}
                className={styles.flyer}
                sizes="(max-width: 900px) 90vw, 620px"
              />
            </Reveal>
          )}
          <Reveal>
            <h2 className={styles.title}>{t("title")}</h2>
            <p className={styles.date}>{t("date")}</p>
            <p className={styles.location}>{t("location")}</p>
            <p className={styles.tagline}>{t("tagline")}</p>
            <Link href={href} className={styles.cta}>
              {t("cta")}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
