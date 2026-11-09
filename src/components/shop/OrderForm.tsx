"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site";
import styles from "./OrderForm.module.css";

import nightsEn from "../../../public/images/sacred-nights-en.jpg";
import nightsDe from "../../../public/images/sacred-nights-de.jpg";
import saltCrystal from "../../../public/images/products/salt-crystal.jpg";
import saltFine from "../../../public/images/products/salt-fine.jpg";
import cacao from "../../../public/images/products/cacao.jpg";
import incense from "../../../public/images/products/incense.jpg";
import personal from "../../../public/images/products/personal.jpg";
import marirri from "../../../public/images/products/marirri.jpg";
import salts from "../../../public/images/products/salts.jpg";
import bay from "../../../public/images/products/bay.jpg";
import hemp from "../../../public/images/products/hemp.jpg";
import spice from "../../../public/images/products/spice.jpg";
import oregano from "../../../public/images/products/oregano.jpg";

// Images line up with the item order in the messages files.
const SALT_IMAGES = [saltCrystal, saltFine];
const COLLECTION_IMAGES = [cacao, incense, personal, marirri, salts, bay, hemp, spice, oregano];

type NightsOption = { name: string; note: string; price: string };
type Priced = {
  name: string;
  subtitle?: string;
  prices: string[];
  // Products sold in kinds (e.g. cacao) get one selectable row per kind.
  variants?: { name: string; price: string }[];
};

type Item = { id: string; title: string; detail: string; image?: StaticImageData };

function ItemRow({
  item,
  selected,
  onToggle,
}: {
  item: Item;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onToggle}
      className={`${styles.item} ${selected ? styles.itemOn : ""} ${item.image ? "" : styles.itemNoImage}`}
    >
      {item.image && (
        <span className={styles.thumb}>
          <Image src={item.image} alt="" fill sizes="120px" className={styles.thumbImg} />
        </span>
      )}
      <span className={styles.itemText}>
        <span className={styles.itemTitle}>{item.title}</span>
        <span className={styles.itemDetail}>{item.detail}</span>
      </span>
      <span className={styles.check} aria-hidden="true">
        {selected ? "✓" : "+"}
      </span>
    </button>
  );
}

// Order request: pick products, leave contact details, we reply personally.
export default function OrderForm() {
  const t = useTranslations("shop.order");
  const tNights = useTranslations("shop.nights");
  const tSalt = useTranslations("shop.salt");
  const tMenu = useTranslations("market.menu");
  const locale = useLocale();

  const nightsItems: Item[] = (tNights.raw("options") as NightsOption[]).map((o) => ({
    id: o.name,
    title: o.name,
    detail: `${o.price} · ${o.note}`,
  }));
  const saltItems: Item[] = (tSalt.raw("products") as Priced[]).map((p, i) => ({
    id: p.name,
    title: p.name,
    detail: p.prices.join(" · "),
    image: SALT_IMAGES[i],
  }));
  const collectionItems: Item[] = (tMenu.raw("items") as Priced[]).flatMap((p, i) => {
    if (p.variants) {
      return p.variants.map((v) => {
        const title = `${p.name} – ${v.name}`;
        return { id: title, title, detail: v.price, image: COLLECTION_IMAGES[i] };
      });
    }
    const title = p.subtitle ? `${p.name} – ${p.subtitle}` : p.name;
    return [{ id: title, title, detail: p.prices.join(" · "), image: COLLECTION_IMAGES[i] }];
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState<string[]>([]);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const toggle = (id: string) =>
    setProducts((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim()) {
      setError(t("errors.required"));
      return;
    }
    if (products.length === 0 && !message.trim()) {
      setError(t("errors.pick"));
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "order",
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          address: address.trim(),
          message: message.trim(),
          interests: products,
        }),
      });
      const data = await res.json();
      if (data.ok) {
        setSent(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setError(data.error || t("errors.generic"));
      }
    } catch {
      setError(t("errors.generic"));
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <section className={`${styles.band} ${styles.intro}`}>
        <div className={styles.center}>
          <h1 className={styles.headline}>{t("success.title")}</h1>
          <p className={styles.lead}>{t("success.body")}</p>
        </div>
      </section>
    );
  }

  const sections = [
    { key: "nights", tone: styles.night, title: t("groups.nights"), hint: t("hints.nights"), items: nightsItems },
    { key: "salt", tone: styles.salt, title: t("groups.salt"), hint: t("hints.salt"), items: saltItems },
    {
      key: "collection",
      tone: styles.collection,
      title: t("groups.collection"),
      hint: t("hints.collection"),
      items: collectionItems,
    },
  ];

  return (
    <form onSubmit={handleSubmit} noValidate>
      <section className={`${styles.band} ${styles.intro}`}>
        <div className={styles.center}>
          <div className={styles.eyebrow}>{t("eyebrow")}</div>
          <h1 className={styles.headline}>{t("headline")}</h1>
          <p className={styles.lead}>{t("body")}</p>
          <div className={styles.step}>{t("step1")}</div>
        </div>
      </section>

      {sections.map((s) => (
        <section key={s.key} className={`${styles.band} ${s.tone}`}>
          <div className={styles.center}>
            <h2 className={styles.groupTitle}>{s.title}</h2>
            <p className={styles.groupHint}>{s.hint}</p>
            {s.key === "nights" && (
              <div className={styles.flyer}>
                <Image
                  src={locale === "de" ? nightsDe : nightsEn}
                  alt={tNights("imageAlt")}
                  className={styles.flyerImg}
                  sizes="(max-width: 600px) 80vw, 340px"
                />
              </div>
            )}
            <div className={styles.items}>
              {s.items.map((item) => (
                <ItemRow
                  key={item.id}
                  item={item}
                  selected={products.includes(item.id)}
                  onToggle={() => toggle(item.id)}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {products.length > 0 && (
        <div className={styles.bar}>
          <span className={styles.barCount}>
            {t("selected", { count: products.length })}
          </span>
          <a href="#details" className={styles.barCta}>
            {t("continue")}
          </a>
        </div>
      )}

      <section id="details" className={`${styles.band} ${styles.details}`}>
        <div className={styles.center}>
          <div className={styles.step}>{t("step2")}</div>
          <h2 className={styles.groupTitle}>{t("detailsTitle")}</h2>

          {products.length > 0 && (
            <ul className={styles.summary}>
              {products.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}

          <div className={styles.fields}>
            <label className={styles.field}>
              <span className={styles.label}>{t("fields.name")}</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
                autoComplete="name"
                required
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>{t("fields.email")}</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                autoComplete="email"
                required
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>{t("fields.phone")}</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={styles.input}
                autoComplete="tel"
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>{t("fields.address")}</span>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={styles.input}
                rows={3}
                autoComplete="street-address"
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>{t("fields.message")}</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.input}
                rows={4}
                placeholder={t("fields.messagePlaceholder")}
              />
            </label>
          </div>

          {error && (
            <p className={styles.error} role="alert">
              {error}
            </p>
          )}

          <button type="submit" className={styles.submit} disabled={sending}>
            {sending ? "…" : t("submit")}
          </button>

          <p className={styles.call}>
            {t("orCall")}{" "}
            <a href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}>
              {siteConfig.contactPhone}
            </a>
          </p>
        </div>
      </section>

    </form>
  );
}
