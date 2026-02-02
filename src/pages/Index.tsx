import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { PracticeAreasSection } from "@/components/home/PracticeAreasSection";
import { ValuesSection } from "@/components/home/ValuesSection";
import { CredibilitySection } from "@/components/home/CredibilitySection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <CredibilitySection />
      <PracticeAreasSection />
      <ValuesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
