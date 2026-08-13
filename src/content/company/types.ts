export type CompanyBlock = { title: string; body: string };
export type CompanyMetric = { label: string; value: string };
export type CompanyFaq = { question: string; answer: string };

export type CompanyPageContent = {
  slug: "about" | "partners" | "contact" | "book-demo";
  title: string;
  eyebrow: string;
  tagline: string;
  summary: string;
  metrics: CompanyMetric[];
  highlights: CompanyBlock[];
  principles: CompanyBlock[];
  faqs: CompanyFaq[];
  ctaTitle: string;
  ctaLead: string;
  ctaPrimary: { label: string; to: string };
  ctaSecondary?: { label: string; to: string };
};
