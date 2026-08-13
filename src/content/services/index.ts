import type { ServicePageContent } from "./types";
import { ai } from "./ai";
import { analytics } from "./analytics";
import { cloudComputing } from "./cloud-computing";
import { database } from "./database";
import { disasterRecovery } from "./disaster-recovery";
import { integration } from "./integration";
import { networking } from "./networking";
import { storage } from "./storage";

const registry: Record<string, ServicePageContent> = {
  [cloudComputing.slug]: cloudComputing,
  [storage.slug]: storage,
  [networking.slug]: networking,
  [database.slug]: database,
  [analytics.slug]: analytics,
  [ai.slug]: ai,
  [integration.slug]: integration,
  [disasterRecovery.slug]: disasterRecovery,
};

export function getServicePage(slug: string | undefined): ServicePageContent | undefined {
  if (!slug) return undefined;
  return registry[slug];
}

export function listServicePages(): ServicePageContent[] {
  return Object.values(registry);
}

export { registry as servicePageRegistry };
