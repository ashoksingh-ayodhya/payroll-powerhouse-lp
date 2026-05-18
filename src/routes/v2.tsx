import { createFileRoute } from "@tanstack/react-router";
import {
  Nav,
  HeroWithForm,
  ClientLogos,
  Stats,
  Features,
  Platform,
  Cards,
  WPS,
  EmployeeValue,
  FAQ,
  Footer,
  seoMeta,
} from "@/components/landing/shared";

export const Route = createFileRoute("/v2")({
  head: () => seoMeta(),
  component: LandingPageV2,
});

function LandingPageV2() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <HeroWithForm />
        <ClientLogos />
        <Stats />
        <Features />
        <Platform />
        <Cards />
        <WPS />
        <EmployeeValue />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
