import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import styles from "./JourneyLinkCard.module.css";
import tentImg from "../../../public/images/retreat-ceremony-tent.jpeg";

export default function JourneyLinkCard() {
  const t = useTranslations("cacao.journeyLink");

  return (
    <section className={styles.section}>
      <Reveal className={styles.card}>
        <div className={styles.imageCol}>
          <Image
            src={tentImg}
            alt="Sarah & Johannes in ceremony tent"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className={styles.image}
          />
        </div>
        <div className={styles.textCol}>
          <div className={styles.eyebrow}>{t("eyebrow")}</div>
          <h3 className={styles.title}>{t("title")}</h3>
          <p className={styles.body}>{t("body")}</p>
          <Link href="/retreats#body" className={styles.cta}>
            {t("cta")}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
