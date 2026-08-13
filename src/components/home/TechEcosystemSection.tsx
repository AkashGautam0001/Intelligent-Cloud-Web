import { SectionShell } from "@/components/ui/section-shell";
import { IcCard } from "@/components/ui/ic-card";
import { TechBrandIcon } from "@/components/TechBrandIcon";
import type { TechBrand } from "@/lib/tech-brands";
import { getTechBrand } from "@/lib/tech-brands";

const groups: {
  title: string;
  body: string;
  brandIds: string[];
}[] = [
  {
    title: "Cloud foundations",
    body: "Azure Landing Zones and AWS multi-account patterns with shared identity baselines.",
    brandIds: ["azure", "aws"],
  },
  {
    title: "Containers",
    body: "AKS and EKS with workload identity — clusters that stay operable after handoff.",
    brandIds: ["kubernetes", "docker", "helm"],
  },
  {
    title: "Infrastructure as code",
    body: "Terraform modules with policy checks — no one-off portal clicks in production.",
    brandIds: ["terraform", "opentofu", "ansible"],
  },
  {
    title: "Delivery",
    body: "GitHub Actions / Azure DevOps plus Argo CD for desired-state reconciliation.",
    brandIds: ["github-actions", "azure-devops", "argo", "gitlab"],
  },
  {
    title: "Observability",
    body: "Prometheus, Grafana, and structured logs wired to ownership and SLOs.",
    brandIds: ["prometheus", "grafana", "elastic"],
  },
  {
    title: "Security tooling",
    body: "Secrets, IAM, and policy-as-code integrated into the same delivery path.",
    brandIds: ["vault", "cloudflare"],
  },
];

function brandsFor(ids: string[]): TechBrand[] {
  return ids.map((id) => getTechBrand(id)).filter((b): b is TechBrand => Boolean(b));
}

export function TechEcosystemSection() {
  return (
    <SectionShell
      tone="white"
      eyebrow="Ecosystem"
      title="The tools we actually run in production estates"
      lead="Not a partner endorsement wall — a working stack. Each card maps how we compose cloud, delivery, and operations tooling."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => {
          const brands = brandsFor(g.brandIds);
          return (
            <IcCard key={g.title} className="p-6">
              <div className="flex flex-wrap items-center gap-3">
                {brands.map((b) => (
                  <TechBrandIcon key={b.id} brand={b} size="md" />
                ))}
              </div>
              <h3 className="font-display mt-4 text-base font-semibold text-navy-900">
                {g.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-600">{g.body}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {brands.map((b) => (
                  <li
                    key={b.id}
                    className="rounded-md bg-[#eef3f8] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-navy-900/70"
                  >
                    {b.name}
                  </li>
                ))}
              </ul>
            </IcCard>
          );
        })}
      </div>
    </SectionShell>
  );
}
