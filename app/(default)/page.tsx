export const metadata = {
  title: "c0re — Focus without friction",
  description:
    "c0re helps you focus by scheduling distraction‑free sessions that temporarily block selected apps and websites. Launch approved tools via deep links and stay motivated with optional in‑app rewards (unlockable pets).",
};

import Hero from "@/components/hero";
import Clients from "@/components/clients";
import Features from "@/components/features";
import Features02 from "@/components/features-02";
import Features03 from "@/components/features-03";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Features04 from "@/components/features-04";
import Pricing from "./pricing-section";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <Features02 />
      <Features03 />
      <Features04 />
      <Testimonials />
      <Cta />
    </>
  );
}
