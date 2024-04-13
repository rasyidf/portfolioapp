import type { MetaFunction } from "@remix-run/node";
import { HeroSection } from "../components/landing-page/hero-section";
import { AboutSection } from "~/components/landing-page/about-section";
import { ContactSection } from "~/components/landing-page/contact-section";
import { PortfolioSection } from "~/components/landing-page/portfolio-section";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>

      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}
