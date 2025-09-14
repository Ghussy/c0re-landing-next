export const metadata = {
  title: "About - c0re",
  description:
    "Meet the team building focus without friction. Learn about our mission to help you maintain deep work through distraction-free sessions.",
};

import Hero from "@/components/hero-about";
import Story from "@/components/story";
import Features02 from "@/components/features-02";
import Recruitment from "@/components/recruitment";
import Testimonials from "@/components/testimonials-02";
import Cta from "@/components/cta-02";

export default function About() {
  return (
    <>
      <Hero />
      <Features02 />
      <Cta />
    </>
  );
}
