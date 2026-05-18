import { createFileRoute } from "@tanstack/react-router";
import {
  Nav,
  HeroClassic,
  ClientLogos,
  Stats,
  Features,
  Platform,
  Cards,
  WPS,
  EmployeeValue,
  FAQ,
  DemoForm,
  Footer,
  seoMeta,
} from "@/components/landing/shared";

export const Route = createFileRoute("/")({
  head: () => seoMeta(),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <HeroClassic />
        <ClientLogos />
        <Stats />
        <Features />
        <Platform />
        <Cards />
        <WPS />
        <EmployeeValue />
        <FAQ />
        <DemoForm />
      </main>
      <Footer />
    </div>
  );
}
