import { createFileRoute } from "@tanstack/react-router";
import {
  Nav,
  HeroClassic,
  ClientLogos,
  Features,
  Platform,
  Cards,
  WPS,
  EmployeeValue,
  FAQ,
  DemoForm,
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
        <Features />
        <Platform />
        <Cards />
        <WPS />
        <EmployeeValue />
        <FAQ />
        <DemoForm />
      </main>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground px-4">
        © {new Date().getFullYear()} Edenred Prepaid Cards Management Services LLC. All rights reserved.
      </div>
    </div>
  );
}
