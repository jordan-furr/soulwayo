"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import styles from "./JourneyContent.module.css";

const CHAPTERS = [
  "ch1", "ch2", "ch3", "ch4", "ch5", "ch6",
  "ch7", "ch8", "ch9", "ch10", "ch11",
] as const;

export default function JourneyContent() {
  const t = useTranslations("retreats.journey");
  const [active, setActive] = useState("ch1");
  const chapterRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    for (const ch of CHAPTERS) {
      const el = chapterRefs.current[ch];
      if (!el) continue;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(ch);
        },
        { rootMargin: "-35% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (ch: string) => {
    chapterRefs.current[ch]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={styles.section}>
      <div className={styles.layout}>
        <nav className={styles.sidebar}>
          <div className={styles.sidebarTitle}>{t("sidebarTitle")}</div>
          {CHAPTERS.map((ch) => (
            <button
              key={ch}
              type="button"
              className={`${styles.sidebarLink} ${active === ch ? styles.sidebarLinkActive : ""}`}
              onClick={() => scrollTo(ch)}
            >
              {t(`${ch}Label`)}
            </button>
          ))}
          <a href="#more-dates" className={styles.futureDatesPill}>
            {t("futureDatesPill")}
          </a>
        </nav>

        <div className={styles.article}>
          {/* Desktop: plain sections */}
          <div className={styles.desktopChapters}>
            {CHAPTERS.map((ch) => (
              <div
                key={ch}
                id={ch === "ch1" ? "body" : ch}
                ref={(el) => { chapterRefs.current[ch] = el; }}
                className={styles.chapter}
              >
                <ChapterContent ch={ch} t={t} />
              </div>
            ))}
          </div>

          {/* Mobile: accordions */}
          <div className={styles.mobileChapters}>
            {CHAPTERS.map((ch, i) => (
              <details key={ch} className={styles.accordion} open={i === 0}>
                <summary className={styles.accordionSummary}>
                  {t(`${ch}Label`)}
                </summary>
                <div className={styles.accordionBody}>
                  <ChapterContent ch={ch} t={t} />
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChapterContent({ ch, t }: { ch: string; t: ReturnType<typeof useTranslations> }) {
  const title = t(`${ch}Title`);

  switch (ch) {
    case "ch1":
      return (
        <>
          <h2 className={styles.chTitle}>{title}</h2>
          <p className={styles.p}>{t("ch1p1")}</p>
          <p className={styles.p}>{t("ch1p2")}</p>
          <p className={styles.p}>{t("ch1p3")}</p>
          <p className={styles.emphasis}>{t("ch1Emphasis")}</p>
          <p className={styles.p}>{t("ch1p4")}</p>
          <p className={styles.p}>{t("ch1p5")}</p>
          <p className={styles.stanza}>{t("ch1Stanza")}</p>
          <p className={styles.p}>{t("ch1p6")}</p>
          <ul className={styles.list}>
            {(["ch1List1","ch1List2","ch1List3","ch1List4","ch1List5","ch1List6","ch1List7"] as const).map((k) => (
              <li key={k}>{t(k)}</li>
            ))}
          </ul>
          <p className={styles.p}>{t("ch1p7")}</p>
          <p className={styles.question}>{t("ch1Question1")}</p>
          <p className={styles.p}>{t("ch1p8")}</p>
          <p className={styles.question}>{t("ch1Question2")}</p>
          <p className={styles.p}>{t("ch1p9")}</p>
          <blockquote className={styles.quote}>{t("ch1Quote")}</blockquote>
        </>
      );
    case "ch2":
      return (
        <>
          <h2 className={styles.chTitle}>{title}</h2>
          <p className={styles.p}>{t("ch2p1")}</p>
          <p className={styles.stanza}>{t("ch2Stanza1")}</p>
          <p className={styles.p}>{t("ch2p2")}</p>
          <p className={styles.p}>{t("ch2p3")}</p>
          <p className={styles.p}>{t("ch2p4")}</p>
          <p className={styles.stanza}>{t("ch2Stanza2")}</p>
          <p className={styles.p}>{t("ch2p5")}</p>
          <p className={styles.p}>{t("ch2p6")}</p>
          <p className={styles.p}>{t("ch2p7")}</p>
          <p className={styles.p}>{t("ch2p8")}</p>
          <p className={styles.emphasis}>{t("ch2p9")}</p>
          <p className={styles.p}>{t("ch2p10")}</p>
          <p className={styles.p}>{t("ch2p11")}</p>
        </>
      );
    case "ch3":
      return (
        <>
          <h2 className={styles.chTitle}>{title}</h2>
          <p className={styles.p}>{t("ch3p1")}</p>
          <p className={styles.p}>{t("ch3p2")}</p>
          <p className={styles.p}>{t("ch3p3")}</p>
          <p className={styles.p}>{t("ch3p4")}</p>
          <p className={styles.stanza}>{t("ch3Stanza1")}</p>
          <p className={styles.p}>{t("ch3p5")}</p>
          <p className={styles.p}>{t("ch3p6")}</p>
          <p className={styles.p}>{t("ch3p7")}</p>
          <p className={styles.p}>{t("ch3p8")}</p>
          <p className={styles.stanza}>{t("ch3Stanza2")}</p>
          <p className={styles.p}>{t("ch3p9")}</p>
          <blockquote className={styles.quote}>{t("ch3Quote")}</blockquote>
          <p className={styles.p}>{t("ch3p10")}</p>
          <p className={styles.p}>{t("ch3p11")}</p>
          <p className={styles.p}>{t("ch3p12")}</p>
        </>
      );
    case "ch4":
      return (
        <>
          <h2 className={styles.chTitle}>{title}</h2>
          <p className={styles.p}>{t("ch4p1")}</p>
          <p className={styles.p}>{t("ch4p2")}</p>
          <p className={styles.p}>{t("ch4p3")}</p>
          <p className={styles.p}>{t("ch4p4")}</p>
          <p className={styles.p}>{t("ch4p5")}</p>
          <p className={styles.p}>{t("ch4p6")}</p>
          <p className={styles.p}>{t("ch4p7")}</p>
          <p className={styles.p}>{t("ch4p8")}</p>
          <p className={styles.p}>{t("ch4p9")}</p>
          <p className={styles.p}>{t("ch4p10")}</p>
          <p className={styles.p}>{t("ch4p11")}</p>
          <p className={styles.stanza}>{t("ch4Stanza1")}</p>
          <p className={styles.p}>{t("ch4p12")}</p>
          <blockquote className={styles.quote}>{t("ch4Quote")}</blockquote>
          <p className={styles.stanza}>{t("ch4Stanza2")}</p>
          <p className={styles.p}>{t("ch4p13")}</p>
          <p className={styles.p}>{t("ch4p14")}</p>
        </>
      );
    case "ch5":
      return (
        <>
          <h2 className={styles.chTitle}>{title}</h2>
          <p className={styles.p}>{t("ch5p1")}</p>
          <p className={styles.p}>{t("ch5p2")}</p>
          <p className={styles.stanza}>{t("ch5Stanza1")}</p>
          <p className={styles.p}>{t("ch5p3")}</p>
          <p className={styles.p}>{t("ch5p4")}</p>
          <p className={styles.stanza}>{t("ch5Stanza2")}</p>
          <p className={styles.p}>{t("ch5p5")}</p>
          <blockquote className={styles.quote}>{t("ch5Quote")}</blockquote>
          <p className={styles.p}>{t("ch5p6")}</p>
          <p className={styles.p}>{t("ch5p7")}</p>
          <p className={styles.p}>{t("ch5p8")}</p>
          <p className={styles.p}>{t("ch5p9")}</p>
        </>
      );
    case "ch6":
      return (
        <>
          <h2 className={styles.chTitle}>{title}</h2>
          <p className={styles.p}>{t("ch6p1")}</p>
          <p className={styles.p}>{t("ch6p2")}</p>
          <p className={styles.p}>{t("ch6p3")}</p>
          <p className={styles.p}>{t("ch6p4")}</p>
          <p className={styles.p}>{t("ch6p5")}</p>
          <p className={styles.p}>{t("ch6p6")}</p>
          <div className={styles.pillGrid}>
            {(["ch6Pill1","ch6Pill2","ch6Pill3","ch6Pill4","ch6Pill5","ch6Pill6","ch6Pill7","ch6Pill8","ch6Pill9","ch6Pill10","ch6Pill11","ch6Pill12"] as const).map((k) => (
              <span key={k} className={styles.pill}>{t(k)}</span>
            ))}
          </div>
          <p className={styles.p}>{t("ch6p7")}</p>
          <p className={styles.stanza}>{t("ch6Stanza1")}</p>
          <p className={styles.stanza}>{t("ch6Stanza2")}</p>
          <p className={styles.p}>{t("ch6p8")}</p>
          <p className={styles.emphasis}>{t("ch6Emphasis")}</p>
        </>
      );
    case "ch7":
      return (
        <>
          <h2 className={styles.chTitle}>{title}</h2>
          <p className={styles.p}>{t("ch7p1")}</p>
          <p className={styles.p}>{t("ch7p2")}</p>
          <BenefitCategory title={t("ch7BodyTitle")} items={["ch7BodyList1","ch7BodyList2","ch7BodyList3","ch7BodyList4","ch7BodyList5","ch7BodyList6"]} t={t} />
          <BenefitCategory title={t("ch7MindTitle")} items={["ch7MindList1","ch7MindList2","ch7MindList3","ch7MindList4","ch7MindList5","ch7MindList6"]} t={t} />
          <BenefitCategory title={t("ch7HeartTitle")} items={["ch7HeartList1","ch7HeartList2","ch7HeartList3","ch7HeartList4","ch7HeartList5","ch7HeartList6"]} t={t} />
          <BenefitCategory title={t("ch7SoulTitle")} items={["ch7SoulList1","ch7SoulList2","ch7SoulList3","ch7SoulList4","ch7SoulList5","ch7SoulList6","ch7SoulList7","ch7SoulList8"]} t={t} />
          <p className={styles.p}>{t("ch7p3")}</p>
          <p className={styles.p}>{t("ch7p4")}</p>
        </>
      );
    case "ch8":
      return (
        <>
          <h2 className={styles.chTitle}>{title}</h2>
          <p className={styles.p}>{t("ch8p1")}</p>
          <p className={styles.p}>{t("ch8p2")}</p>
          <p className={styles.p}>{t("ch8p3")}</p>
          <p className={styles.stanza}>{t("ch8Stanza1")}</p>
          <p className={styles.p}>{t("ch8p4")}</p>
          <p className={styles.p}>{t("ch8p5")}</p>
          <p className={styles.p}>{t("ch8p6")}</p>
          <p className={styles.p}>{t("ch8p7")}</p>
          <p className={styles.p}>{t("ch8p8")}</p>
          <p className={styles.flow}>{t("ch8Flow")}</p>
          <p className={styles.p}>{t("ch8p9")}</p>
          <p className={styles.stanza}>{t("ch8Stanza2")}</p>
          <p className={styles.p}>{t("ch8p10")}</p>
          <p className={styles.p}>{t("ch8p11")}</p>
        </>
      );
    case "ch9":
      return (
        <>
          <h2 className={styles.chTitle}>{title}</h2>
          <p className={styles.p}>{t("ch9p1")}</p>
          <p className={styles.p}>{t("ch9p2")}</p>
          <p className={styles.p}>{t("ch9p3")}</p>
          <div className={styles.gridPairs}>
            {(["ch9Grid1","ch9Grid2","ch9Grid3","ch9Grid4"] as const).map((k) => (
              <span key={k} className={styles.gridPair}>{t(k)}</span>
            ))}
          </div>
          <p className={styles.p}>{t("ch9p4")}</p>
          <p className={styles.p}>{t("ch9p5")}</p>
          <p className={styles.p}>{t("ch9p6")}</p>
          <p className={styles.p}>{t("ch9p7")}</p>
          <p className={styles.p}>{t("ch9p8")}</p>
          <p className={styles.p}>{t("ch9p9")}</p>
          <p className={styles.p}>{t("ch9p10")}</p>
          <p className={styles.p}>{t("ch9p11")}</p>
          <p className={styles.p}>{t("ch9p12")}</p>
        </>
      );
    case "ch10":
      return (
        <>
          <h2 className={styles.chTitle}>{title}</h2>
          <p className={styles.p}>{t("ch10p1")}</p>
          <p className={styles.p}>{t("ch10p2")}</p>
          <p className={styles.stanza}>{t("ch10Stanza")}</p>
          <p className={styles.p}>{t("ch10Link")}</p>
          <Link href="/cacao#everyone" className={styles.inlineLink}>
            {t("ch10LinkText")}
          </Link>
        </>
      );
    case "ch11":
      return (
        <>
          <h2 className={styles.chTitle}>{title}</h2>
          <p className={styles.p}>{t("ch11p1")}</p>
          <p className={styles.p}>{t("ch11p2")}</p>
          <p className={styles.stanza}>{t("ch11Stanza1")}</p>
          <p className={styles.stanza}>{t("ch11Stanza2")}</p>
          <p className={styles.p}>{t("ch11p3")}</p>
          <p className={styles.p}>{t("ch11p4")}</p>
          <p className={styles.p}>{t("ch11p5")}</p>
          <p className={styles.stanza}>{t("ch11Stanza3")}</p>
          <p className={styles.closingStanza}>{t("ch11Closing")}</p>
        </>
      );
    default:
      return null;
  }
}

function BenefitCategory({
  title,
  items,
  t,
}: {
  title: string;
  items: string[];
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <div className={styles.benefitCard}>
      <h4 className={styles.benefitTitle}>{title}</h4>
      <ul className={styles.benefitList}>
        {items.map((key) => (
          <li key={key}>{t(key as never)}</li>
        ))}
      </ul>
    </div>
  );
}
