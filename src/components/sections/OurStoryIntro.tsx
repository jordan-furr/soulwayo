import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import styles from "./OurStoryIntro.module.css";
import sarahImg from "../../../public/images/sarah-drum.jpeg";
import johannesImg from "../../../public/images/johannes-guitar.jpeg";

export default function OurStoryIntro() {
  const t = useTranslations("home.ourStory");

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.portraits}>
          <div className={styles.portraitWrap}>
            <Image
              src={sarahImg}
              alt="Sarah"
              className={styles.portrait}
              fill
              sizes="(max-width: 900px) 45vw, 300px"
            />
          </div>
          <div className={`${styles.portraitWrap} ${styles.portraitOffset}`}>
            <Image
              src={johannesImg}
              alt="Johannes"
              className={styles.portrait}
              fill
              sizes="(max-width: 900px) 45vw, 300px"
            />
          </div>
        </Reveal>
        <div className={styles.text}>
          <Reveal className={styles.eyebrow}>{t("eyebrow")}</Reveal>
          <Reveal as="h2" delay={0.06} className={styles.headline}>
            {t("headline")}
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.body}>
            {t("p1")}
          </Reveal>
          <Reveal as="p" delay={0.14} className={styles.body}>
            {t("p2")}
          </Reveal>
          <Reveal delay={0.18}>
            <Link href="/about" className={styles.cta}>
              {t("cta")}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
