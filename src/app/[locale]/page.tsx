import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import SpaceSection from "@/components/sections/SpaceSection";
import PillarsSection from "@/components/sections/PillarsSection";
import AboutSection from "@/components/sections/AboutSection";
import RetreatsSection from "@/components/sections/RetreatsSection";
import FlyerSection from "@/components/sections/FlyerSection";
import FinalCta from "@/components/sections/FinalCta";

export default async function Home({
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
        <Hero />
        <SpaceSection />
        <PillarsSection />
        <AboutSection />
        <RetreatsSection />
        <FlyerSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
