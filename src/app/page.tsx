import HeroBanner from "@/app/_lib/components/features/hero-banner";
import Footer from "@/app/_lib/components/features/footer";

export default function HomePage(): React.ReactElement {
  return (
    <main className="size-full overflow-hidden">
      <HeroBanner />
      <Footer />
    </main>
  );
}
