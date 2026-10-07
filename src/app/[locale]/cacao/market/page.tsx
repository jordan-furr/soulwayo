import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MarketHero from "@/components/cacao/MarketHero";
import NextCeremony from "@/components/cacao/NextCeremony";
import CacaoGifts from "@/components/cacao/CacaoGifts";
import MeditationInvite from "@/components/cacao/MeditationInvite";
import stallPoster from "../../../../../public/images/flyer-sacred-cacao-volketswil.jpg";

export default async function CacaoMarketPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main>
        <MarketHero />
        <NextCeremony
          namespace="market.visit"
          href="/contact"
          image={stallPoster}
          imageAlt="Soulwayo Sacred Cacao – every Thursday, 8:30–12:00, Volketswil"
          tone="brown"
        />
        <CacaoGifts />
        <MeditationInvite />
      </main>
      <Footer />
    </>
  );
}
