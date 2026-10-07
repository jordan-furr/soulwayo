import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CacaoHero from "@/components/cacao/CacaoHero";
import NextCeremony from "@/components/cacao/NextCeremony";
import InvitationStanza from "@/components/cacao/InvitationStanza";
import AboutCacao from "@/components/cacao/AboutCacao";
import JourneyLinkCard from "@/components/cacao/JourneyLinkCard";
import CacaoForEveryone from "@/components/cacao/CacaoForEveryone";
import CacaoClosing from "@/components/cacao/CacaoClosing";

export default async function CacaoPage({
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
        <CacaoHero />
        <NextCeremony />
        <InvitationStanza />
        <AboutCacao />
        <JourneyLinkCard />
        <CacaoForEveryone />
        <CacaoClosing />
      </main>
      <Footer />
    </>
  );
}
