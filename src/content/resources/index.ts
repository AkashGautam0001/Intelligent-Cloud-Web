import { documentation, faq, privacy, support, terms } from "./pages";
import type { ResourcePageContent } from "./types";

const registry: Record<string, ResourcePageContent> = {
  documentation,
  faq,
  support,
  privacy,
  terms,
};

export function getResourcePage(slug: string | undefined): ResourcePageContent | undefined {
  if (!slug) return undefined;
  return registry[slug];
}

export { documentation, faq, support, privacy, terms };
