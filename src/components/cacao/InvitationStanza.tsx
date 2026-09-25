import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import styles from "./InvitationStanza.module.css";

export default function InvitationStanza() {
  const t = useTranslations("cacao.invitation");

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal as="p" className={styles.stanza}>
          {t("stanza")}
        </Reveal>
        <Reveal as="p" delay={0.12} className={styles.closing}>
          {t("closing")}
        </Reveal>
      </div>
    </section>
  );
}
