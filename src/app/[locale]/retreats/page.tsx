import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RetreatsHero from "@/components/retreats/RetreatsHero";
import NextRetreat from "@/components/retreats/NextRetreat";
import RetreatsIntro from "@/components/retreats/RetreatsIntro";
import JourneyContent from "@/components/retreats/JourneyContent";
import MoreDates from "@/components/retreats/MoreDates";

export default async function RetreatsPage({
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
        <RetreatsHero />
        <NextRetreat />
        <RetreatsIntro />
        <JourneyContent />
        <MoreDates />
      </main>
      <Footer />
    </>
  );
}
