import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import styles from "./CacaoClosing.module.css";

export default function CacaoClosing() {
  const t = useTranslations("cacao.closing");

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal as="p" className={styles.stanza}>
          {t("stanza")}
        </Reveal>
        <Reveal delay={0.12}>
          <Link href="/contact" className={styles.cta}>
            {t("cta")}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
