import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BookOpen,
  Boxes,
  Code2,
  Container,
  GitBranch,
  Layers,
  LifeBuoy,
  Network,
  Rocket,
  ShieldCheck,
  Wallet,
} from "lucide-react";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "getting-started": Rocket,
  architecture: Network,
  "kubernetes-aks": Container,
  "cicd-pipelines": GitBranch,
  observability: Activity,
  "security-compliance": ShieldCheck,
  "api-reference": Code2,
  "managed-operations": LifeBuoy,
  "cost-optimization": Wallet,
};

export function docsCategoryIcon(slug: string): LucideIcon {
  return CATEGORY_ICONS[slug] ?? Boxes;
}

export function docsArticleIcon(slug: string): LucideIcon {
  if (slug === "overview") return BookOpen;
  if (slug.includes("network")) return Network;
  if (slug.includes("identity") || slug.includes("access") || slug.includes("security")) {
    return ShieldCheck;
  }
  if (slug.includes("pipeline") || slug.includes("git") || slug.includes("ci")) {
    return GitBranch;
  }
  if (slug.includes("alert") || slug.includes("observ") || slug.includes("dashboard")) {
    return Activity;
  }
  if (slug.includes("api") || slug.includes("endpoint")) return Code2;
  if (slug.includes("cost") || slug.includes("finops") || slug.includes("tag")) {
    return Wallet;
  }
  if (slug.includes("helm") || slug.includes("aks") || slug.includes("namespace")) {
    return Container;
  }
  if (slug.includes("landing") || slug.includes("architecture") || slug.includes("reference")) {
    return Layers;
  }
  return BookOpen;
}
