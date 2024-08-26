import ProductSection from "./components/ProductSection";
import CartSection from "./components/CartSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-around bg-Rose-50 p-24">
      <ProductSection />
      <CartSection />
    </main>
  );
}
