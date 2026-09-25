import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import OurStory from "@/components/about/OurStory";
import Bios from "@/components/about/Bios";
import Together from "@/components/about/Together";
import Vision from "@/components/about/Vision";

export default async function AboutPage({
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
        <OurStory />
        <Bios />
        <Together />
        <Vision />
      </main>
      <Footer />
    </>
  );
}
