export const en = {
  brand: "Intelligent Cloud",
  tagline: "Secure. Innovate. Transform.",
  nav: {
    services: "Services",
    solutions: "Solutions",
    about: "About",
    partners: "Partners",
    resources: "Resources",
    docs: "Documentation",
    faq: "FAQ",
    support: "Support",
    contactSales: "Contact Sales",
    bookDemo: "Book a Demo",
    search: "Search",
    searchShortcut: "⌘K",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  footer: {
    blurb:
        "Cloud consulting and managed services for Azure, AWS, and Kubernetes — engineered for startups and enterprises.",
    company: "Company",
    resources: "Resources",
    legal: "Legal",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    talkExpert: "Talk to an Expert",
    rights: "All rights reserved.",
  },
  whatsapp: {
    label: "Talk to an Expert on WhatsApp",
    defaultMessage:
      "Hi Intelligent Cloud — I'd like to talk to an expert about our cloud needs.",
  },
} as const;

export type Messages = typeof en;
export type Locale = "en"; // future: "ar"

export const messagesByLocale: Record<Locale, Messages> = {
  en,
};
