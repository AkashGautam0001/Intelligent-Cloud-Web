import type { SolutionPageContent } from "./types";
import { cloudMigration } from "./cloud-migration";
import { devopsTransformation } from "./devops-transformation";
import { enterprises } from "./enterprises";
import { securityCompliance } from "./security-compliance";
import { startups } from "./startups";

const registry: Record<string, SolutionPageContent> = {
  [cloudMigration.slug]: cloudMigration,
  [devopsTransformation.slug]: devopsTransformation,
  [securityCompliance.slug]: securityCompliance,
  [startups.slug]: startups,
  [enterprises.slug]: enterprises,
};

export function getSolutionPage(slug: string | undefined): SolutionPageContent | undefined {
  if (!slug) return undefined;
  return registry[slug];
}

export function listSolutionPages(): SolutionPageContent[] {
  return Object.values(registry);
}

export { registry as solutionPageRegistry };
