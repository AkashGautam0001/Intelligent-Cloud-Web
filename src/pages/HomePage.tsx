import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ProblemSection } from "@/components/home/ProblemSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { ServicesBentoSection } from "@/components/home/ServicesBentoSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { CredibilitySection } from "@/components/home/CredibilitySection";
import { FaqSnippetSection } from "@/components/home/FaqSnippetSection";
import { CtaBand } from "@/components/home/CtaBand";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <WhatWeDoSection />
      <ServicesBentoSection />
      <HowItWorksSection />
      <CredibilitySection />
      <TrustBar />
      <FaqSnippetSection />
      <CtaBand />
    </>
  );
}
