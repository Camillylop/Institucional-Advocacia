import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { PracticeAreas } from "@/components/home/PracticeAreas";
import { About } from "@/components/home/About";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <PracticeAreas />
      <About />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
