import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const title = t("title");
  const description = t("description");
  const ogLocale = locale === "de" ? "de_DE" : "en_US";

  return {
    metadataBase: new URL(`https://${siteConfig.domain}`),
    title,
    description,
    openGraph: {
      title: "Soulwayo",
      description,
      siteName: "Soulwayo",
      type: "website",
      locale: ogLocale,
      images: [
        {
          url: "/images/soulwayo-team.jpg",
          width: 1920,
          height: 1440,
          alt: "Sarah & Johannes in a fireside forest ceremony",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Soulwayo",
      description,
      images: ["/images/soulwayo-team.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${cormorant.variable} ${raleway.variable}`}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
