"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site";
import styles from "./ContactForm.module.css";
import portraitImg from "../../../public/images/dance.jpg";

const INTEREST_KEYS = [
  "interest1",
  "interest2",
  "interest3",
  "interest4",
  "interest5",
  "interest6",
] as const;

export default function ContactForm() {
  const t = useTranslations("contact");
  const tForm = useTranslations("contact.form");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const toggleInterest = (key: string) => {
    setInterests((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all required fields.");
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
          interests: interests.map((k) => tForm(k as never)),
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
        <div className={styles.imageCol}>
          <Image
            src={portraitImg}
            alt="Sarah & Johannes"
            className={styles.image}
            sizes="(max-width: 900px) 0px, 50vw"
            priority
          />
        </div>
        <div className={styles.formCol}>
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
              <span className={styles.label}>{tForm("interests")}</span>
              <div className={styles.pills}>
                {INTEREST_KEYS.map((key) => (
                  <button
                    key={key}
                    type="button"
                    className={`${styles.pill} ${interests.includes(key) ? styles.pillActive : ""}`}
                    onClick={() => toggleInterest(key)}
                  >
                    <span className={styles.pillIcon}>
                      {interests.includes(key) ? "✓" : "+"}
                    </span>
                    {tForm(key)}
                  </button>
                ))}
              </div>
            </div>

            <label className={styles.field}>
              <span className={styles.label}>{tForm("message")}</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.textarea}
                rows={5}
                required
              />
            </label>

            {error && <p className={styles.error}>{error}</p>}

            <button type="submit" className={styles.submit} disabled={sending}>
              {sending ? "..." : tForm("submit")}
            </button>
          </form>

          <div className={styles.altContact}>
            <a href={`mailto:${siteConfig.contactEmail}`} className={styles.altLink}>
              {siteConfig.contactEmail}
            </a>
            <a
              href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
              className={styles.altLink}
            >
              {siteConfig.contactPhone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
