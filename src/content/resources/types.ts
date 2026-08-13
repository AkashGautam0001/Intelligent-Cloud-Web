export type ResourceBlock = { title: string; body: string };
export type ResourceMetric = { label: string; value: string };
export type ResourceFaq = { question: string; answer: string };

export type ResourcePageContent = {
  slug: "documentation" | "faq" | "support" | "privacy" | "terms";
  title: string;
  eyebrow: string;
  tagline: string;
  summary: string;
  metrics: ResourceMetric[];
  highlights: ResourceBlock[];
  principles: ResourceBlock[];
  faqs: ResourceFaq[];
  ctaTitle: string;
  ctaLead: string;
  ctaPrimary: { label: string; to: string };
  ctaSecondary?: { label: string; to: string };
};
