"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";
import styles from "./BookingForm.module.css";

const RETREAT_KEYS = ["retreat1", "retreat2", "retreat3", "retreat4"] as const;
const WEEKLY_KEY = "weekly";
const UPCOMING_THURSDAYS = 6;

// Next few Thursdays, including today if it is Thursday.
function upcomingThursdays(locale: string): string[] {
  const now = new Date();
  const d = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const offset = (4 - d.getDay() + 7) % 7;
  d.setDate(d.getDate() + offset);

  const fmt = new Intl.DateTimeFormat(locale, {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  return Array.from({ length: UPCOMING_THURSDAYS }, (_, i) => {
    const date = new Date(d);
    date.setDate(d.getDate() + i * 7);
    return fmt.format(date);
  });
}

export default function BookingForm() {
  const t = useTranslations("booking");
  const tForm = useTranslations("booking.form");
  const locale = useLocale();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [thursdays, setThursdays] = useState<string[]>([]);
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const toggle = (key: string) => {
    setSelected((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  // Dates are computed on click rather than during render so the statically
  // built page never bakes in a stale list.
  const toggleWeekly = () => {
    if (selected.includes(WEEKLY_KEY)) {
      setSelectedDates([]);
    } else {
      setThursdays(upcomingThursdays(locale));
    }
    toggle(WEEKLY_KEY);
  };

  const toggleDate = (date: string) => {
    setSelectedDates((prev) =>
      prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]
    );
  };

  const interestLabel = (key: string) =>
    key === WEEKLY_KEY && selectedDates.length > 0
      ? `${tForm(WEEKLY_KEY)} (${thursdays.filter((d) => selectedDates.includes(d)).join(", ")})`
      : tForm(key as never);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || selected.length === 0) {
      setError("Please fill in your name, email, and select at least one option.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
          interests: selected.map(interestLabel),
          type: "booking",
        }),
      });
      const data = await res.json();
      if (data.ok) {
        setSent(true);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setError("Something went wrong.");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <section className={styles.section}>
        <div className={styles.successBox}>
          <h2 className={styles.successTitle}>{t("success.title")}</h2>
          <p className={styles.successBody}>{t("success.body")}</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>{t("eyebrow")}</div>
        <h1 className={styles.headline}>{t("headline")}</h1>
        <p className={styles.body}>{t("body")}</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <label className={styles.field}>
              <span className={styles.label}>{tForm("name")}</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
                required
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>{tForm("email")}</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
              />
            </label>
          </div>

          <label className={styles.field}>
            <span className={styles.label}>{tForm("phone")}</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles.input}
            />
          </label>

          <div className={styles.field}>
            <span className={styles.label}>{tForm("selectLabel")}</span>

            <div className={styles.groupLabel}>{tForm("groupRetreats")}</div>
            <div className={styles.pills}>
              {RETREAT_KEYS.map((key) => (
                <button
                  key={key}
                  type="button"
                  className={`${styles.pill} ${selected.includes(key) ? styles.pillActive : ""}`}
                  onClick={() => toggle(key)}
                >
                  <span className={styles.pillIcon}>
                    {selected.includes(key) ? "✓" : "+"}
                  </span>
                  {tForm(key)}
                </button>
              ))}
            </div>

            <div className={styles.groupLabel}>{tForm("groupWeekly")}</div>
            <div className={styles.pills}>
              <button
                type="button"
                className={`${styles.pill} ${selected.includes(WEEKLY_KEY) ? styles.pillActive : ""}`}
                onClick={toggleWeekly}
              >
                <span className={styles.pillIcon}>
                  {selected.includes(WEEKLY_KEY) ? "✓" : "+"}
                </span>
                {tForm(WEEKLY_KEY)}
              </button>
            </div>

            {selected.includes(WEEKLY_KEY) && (
              <>
                <div className={styles.groupLabel}>{tForm("weeklyDatesLabel")}</div>
                <div className={styles.pills}>
                  {thursdays.map((date) => (
                    <button
                      key={date}
                      type="button"
                      className={`${styles.pill} ${selectedDates.includes(date) ? styles.pillActive : ""}`}
                      onClick={() => toggleDate(date)}
                    >
                      <span className={styles.pillIcon}>
                        {selectedDates.includes(date) ? "✓" : "+"}
                      </span>
                      {date}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <label className={styles.field}>
            <span className={styles.label}>{tForm("message")}</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.textarea}
              rows={4}
            />
          </label>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.submit} disabled={sending}>
            {sending ? "..." : tForm("submit")}
          </button>
        </form>

        <div className={styles.altContact}>
          <Link href="/contact" className={styles.altLink}>
            Contact form
          </Link>
          <a
            href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
            className={styles.altLink}
          >
            {siteConfig.contactPhone}
          </a>
        </div>
      </div>
    </section>
  );
}
