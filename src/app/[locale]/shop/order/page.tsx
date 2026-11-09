import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import OrderForm from "@/components/shop/OrderForm";

export default async function ShopOrderPage({
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
        <OrderForm />
      </main>
      <Footer />
    </>
  );
}
