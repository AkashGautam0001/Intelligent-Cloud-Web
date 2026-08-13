import { about, bookDemo, contact, partners } from "./pages";
import type { CompanyPageContent } from "./types";

const registry: Record<string, CompanyPageContent> = {
  about,
  partners,
  contact,
  "book-demo": bookDemo,
};

export function getCompanyPage(slug: string | undefined): CompanyPageContent | undefined {
  if (!slug) return undefined;
  return registry[slug];
}

export { about, partners, contact, bookDemo };
