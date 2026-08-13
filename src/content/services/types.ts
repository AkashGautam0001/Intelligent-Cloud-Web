export type ServiceHighlight = {
  title: string;
  body: string;
  iconHint?: string;
};

export type ServiceDeliverable = {
  title: string;
  body: string;
};

export type ServiceApproachStep = {
  title: string;
  body: string;
};

export type ServiceUseCase = {
  title: string;
  body: string;
  outcome: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceMetric = {
  label: string;
  value: string;
};

export type ServiceCategory = "platforms" | "data" | "resilience";

export type ServicePageContent = {
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  summary: string;
  iconKey: string;
  category: ServiceCategory;
  /** Short blurb unique to this service's architecture section */
  architectureTitle: string;
  architectureLead: string;
  /** Unique “how we deliver” section chrome */
  approachTitle: string;
  approachLead: string;
  metrics: ServiceMetric[];
  highlights: ServiceHighlight[];
  challenges: string[];
  outcomes: string[];
  deliverables: ServiceDeliverable[];
  approach: ServiceApproachStep[];
  stack: string[];
  useCases: ServiceUseCase[];
  faqs: ServiceFaq[];
  related: string[];
};
