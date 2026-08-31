import { HeroSection } from "@/components/home/HeroSection";
import { CloudPlatformsStrip } from "@/components/home/CloudPlatformsStrip";
import { ProblemSection } from "@/components/home/ProblemSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { ServicesBentoSection } from "@/components/home/ServicesBentoSection";
import { CredibilitySection } from "@/components/home/CredibilitySection";
import { FaqSnippetSection } from "@/components/home/FaqSnippetSection";
import { CtaBand } from "@/components/home/CtaBand";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CloudPlatformsStrip />
      <ProblemSection />
      <WhatWeDoSection />
      <ServicesBentoSection />
      <CredibilitySection />
      <FaqSnippetSection />
      <CtaBand />
    </>
  );
}
