/** Site URL used for absolute OG/canonical/sitemap links. */
export function siteOrigin(): string {
  const fromEnv = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (typeof window !== "undefined") return window.location.origin;
  return "https://intelligent-cloud.com";
}

export const DEFAULT_TITLE = "Cloud Services | Intelligent Cloud";
export const DEFAULT_DESCRIPTION =
  "Intelligent Cloud provides Cloud Migration, Managed Cloud, AI Solutions, Cybersecurity, DevOps, and Data Analytics services for startups and enterprises.";
export const DEFAULT_OG_IMAGE = "/assets/illustrations/og/og-share.svg";
export const SITE_NAME = "Intelligent Cloud";

/** Static route meta — pattern `{Page} | Intelligent Cloud` (home is special). */
export const routeMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  "/services": {
    title: "Cloud Services | Intelligent Cloud",
    description:
      "Cloud computing, storage, networking, databases, analytics, AI, integration, and disaster recovery for startups and enterprises.",
  },
  "/solutions": {
    title: "Cloud Solutions | Intelligent Cloud",
    description:
      "Migration, DevOps, and security solutions tailored for startups and enterprises on AWS and Azure.",
  },
  "/about": {
    title: "About | Intelligent Cloud",
    description:
      "Built by engineers who've run production cloud at scale — Azure landing zones, AKS, Terraform, and GitOps for startups and enterprises.",
  },
  "/partners": {
    title: "Partners | Intelligent Cloud",
    description:
      "Partner with Intelligent Cloud for cloud delivery, managed services, and joint go-to-market.",
  },
  "/documentation": {
    title: "Documentation | Intelligent Cloud",
    description:
      "Architecture guides, Kubernetes on AKS, CI/CD, observability, and security documentation from Intelligent Cloud.",
  },
  "/faq": {
    title: "FAQ | Intelligent Cloud",
    description:
      "Answers about Intelligent Cloud services, migration, managed cloud, and how engagements work.",
  },
  "/support": {
    title: "Support | Intelligent Cloud",
    description:
      "Standard, Managed 24×7, and Priority support tiers — open a ticket with Intelligent Cloud.",
  },
  "/contact": {
    title: "Contact | Intelligent Cloud",
    description:
      "Contact Intelligent Cloud sales for cloud migration, managed services, Kubernetes, and DevOps consulting.",
  },
  "/book-demo": {
    title: "Book a Demo | Intelligent Cloud",
    description:
      "Book a free 30-minute cloud assessment with Intelligent Cloud. Prefer a time — we confirm manually.",
  },
  "/privacy": {
    title: "Privacy Policy | Intelligent Cloud",
    description: "How Intelligent Cloud collects, uses, and protects personal information.",
  },
  "/terms": {
    title: "Terms & Conditions | Intelligent Cloud",
    description: "Terms governing use of the Intelligent Cloud website and services.",
  },
};

export function titleForPath(pathname: string): string | undefined {
  if (routeMeta[pathname]) return routeMeta[pathname].title;
  if (pathname.startsWith("/services/")) return "Service | Intelligent Cloud";
  if (pathname.startsWith("/solutions/")) return "Solution | Intelligent Cloud";
  if (pathname.startsWith("/documentation/")) return "Documentation | Intelligent Cloud";
  return undefined;
}

export function descriptionForPath(pathname: string): string | undefined {
  if (routeMeta[pathname]) return routeMeta[pathname].description;
  return undefined;
}

export function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${siteOrigin()}${path}`;
}
