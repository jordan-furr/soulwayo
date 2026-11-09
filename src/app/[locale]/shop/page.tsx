import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SacredEarthCollection } from "@/components/cacao/MarketMenu";
import {
  ShopHero,
  SacredNights,
  HolySalt,
  CollectionOrder,
  SaltRitual,
  ShopContactStrip,
} from "@/components/shop/Shop";

export default async function ShopPage({
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
        <ShopHero />
        <SacredNights />
        <HolySalt />
        <SacredEarthCollection id="collection" />
        <CollectionOrder />
        <SaltRitual />
        <ShopContactStrip />
      </main>
      <Footer />
    </>
  );
}
