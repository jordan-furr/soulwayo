import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import styles from "./MottoStrip.module.css";

export default function MottoStrip() {
  const t = useTranslations("home.mottoStrip");

  return (
    <section className={styles.section}>
      <Reveal as="p" className={styles.motto}>
        {t("text")}
      </Reveal>
    </section>
  );
}
