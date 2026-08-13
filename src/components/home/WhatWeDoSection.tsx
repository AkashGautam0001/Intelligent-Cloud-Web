import { CloudCog, ShieldCheck, Boxes } from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import { IcCard } from "@/components/ui/ic-card";
import { IcIconTile } from "@/components/ui/ic-icon-tile";

const capabilities = [
  {
    id: "migrate",
    title: "Cloud migration",
    icon: CloudCog,
    points: [
      "Wave planning with dependency mapping",
      "Cutover runbooks and rollback criteria",
      "RPO/RTO targets agreed before move day",
      "Hybrid connectivity during transition",
    ],
  },
  {
    id: "platform",
    title: "Platform engineering",
    icon: Boxes,
    points: [
      "Terraform landing zones and modules",
      "AKS/EKS baselines with GitOps",
      "CI/CD promotion paths that audit cleanly",
      "Self-service patterns without snowflakes",
    ],
  },
  {
    id: "secure",
    title: "Security & operations",
    icon: ShieldCheck,
    points: [
      "IAM least privilege and break-glass",
      "WAF, network segmentation, secrets",
      "SLO-backed managed operations",
      "Incident response with clear ownership",
    ],
  },
] as const;

export function WhatWeDoSection() {
  return (
    <SectionShell
      tone="navyLight"
      eyebrow="What we do"
      title="One engineered path from assessment to managed operations"
      lead="Intelligent Cloud unifies architecture, delivery, and run — so Azure, AWS, and Kubernetes estates stay auditable, cost-aware, and operable by your team."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {capabilities.map((c) => {
          const Icon = c.icon;
          return (
            <IcCard key={c.id} className="flex h-full flex-col p-6 sm:p-7">
              <IcIconTile>
                <Icon className="h-5 w-5" />
              </IcIconTile>
              <h3 className="font-display mt-5 text-xl font-semibold text-navy-900">
                {c.title}
              </h3>
              <ul className="mt-4 flex-1 space-y-2.5">
                {c.points.map((p) => (
                  <li key={p} className="text-sm leading-relaxed text-text-600">
                    {p}
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
