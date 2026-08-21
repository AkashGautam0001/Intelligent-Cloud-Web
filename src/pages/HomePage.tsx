import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ProblemSection } from "@/components/home/ProblemSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { ServicesBentoSection } from "@/components/home/ServicesBentoSection";
import { SignatureNetworkSection } from "@/components/home/SignatureNetworkSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { SolutionsToggleSection } from "@/components/home/SolutionsToggleSection";
import { MigrationBand } from "@/components/home/MigrationBand";
import { SecurityBand } from "@/components/home/SecurityBand";
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
      <SignatureNetworkSection />
      <HowItWorksSection />
      <SolutionsToggleSection />
      <MigrationBand />
      <SecurityBand />
      <CredibilitySection />
      <TrustBar />
      <FaqSnippetSection />
      <CtaBand />
    </>
  );
}
