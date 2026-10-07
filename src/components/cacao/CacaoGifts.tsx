import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import styles from "./CacaoGifts.module.css";

type Item = {
  label?: string;
  name: string;
  subtitle?: string;
  notes?: string;
  body: string[];
  quote?: string;
};

type Section = {
  title: string;
  subtitle: string;
  intro: string[];
  items: Item[];
  outro?: string[];
  quote?: string;
};

type Closing = {
  title: string;
  body: string[];
  care: string;
  final: string;
  signoff: string;
  signature: string;
  motto: string;
};

export default function CacaoGifts() {
  const t = useTranslations("cacao.gifts");
  const intro = t.raw("intro") as string[];
  const sections = t.raw("sections") as Section[];
  const closing = t.raw("closing") as Closing;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal as="header" className={styles.header}>
          <div className={styles.eyebrow}>{t("eyebrow")}</div>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.subtitle}>{t("subtitle")}</p>
        </Reveal>

        <Reveal className={styles.block}>
          {intro.map((p, i) => (
            <p key={i} className={styles.body}>{p}</p>
          ))}
        </Reveal>

        {sections.map((section) => (
          <div key={section.title} className={styles.group}>
            <Reveal className={styles.groupHeader}>
              <h3 className={styles.groupTitle}>{section.title}</h3>
              <p className={styles.groupSubtitle}>{section.subtitle}</p>
            </Reveal>

            <Reveal className={styles.block}>
              {section.intro.map((p, i) => (
                <p key={i} className={styles.body}>{p}</p>
              ))}
            </Reveal>

            {section.items.map((item) => (
              <Reveal key={item.name} className={styles.item}>
                {item.label && <div className={styles.label}>{item.label}</div>}
                <h4 className={styles.itemName}>
                  {item.name}
                  {item.subtitle && (
                    <span className={styles.itemSubtitle}> – {item.subtitle}</span>
                  )}
                </h4>
                {item.notes && <p className={styles.notes}>{item.notes}</p>}
                {item.body.map((p, i) => (
                  <p key={i} className={styles.body}>{p}</p>
                ))}
                {item.quote && (
                  <blockquote className={styles.quote}>{item.quote}</blockquote>
                )}
              </Reveal>
            ))}

            {(section.outro || section.quote) && (
              <Reveal className={styles.block}>
                {section.outro?.map((p, i) => (
                  <p key={i} className={styles.body}>{p}</p>
                ))}
                {section.quote && (
                  <blockquote className={styles.quote}>{section.quote}</blockquote>
                )}
              </Reveal>
            )}
          </div>
        ))}

        <Reveal className={styles.group}>
          <h3 className={styles.groupTitle}>{closing.title}</h3>
          {closing.body.map((p, i) => (
            <p key={i} className={styles.body}>{p}</p>
          ))}
          <p className={styles.care}>{closing.care}</p>
          <p className={styles.body}>{closing.final}</p>
          <p className={styles.signoff}>
            {closing.signoff}
            <br />
            {closing.signature}
          </p>
          <p className={styles.motto}>{closing.motto}</p>
        </Reveal>
      </div>
    </section>
  );
}
