import { useState } from "react";
import {
  Eye,
  GitCommitHorizontal,
  Hammer,
  Rocket,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import { IcCard } from "@/components/ui/ic-card";
import { IcChip } from "@/components/ui/ic-chip";
import { IcIconTile } from "@/components/ui/ic-icon-tile";
import { cn } from "@/lib/utils";

const stages = [
  {
    label: "Commit",
    body: "Protected branches and review gates that match how your teams ship.",
    Icon: GitCommitHorizontal,
  },
  {
    label: "Build",
    body: "Repeatable pipelines with artifact provenance — not laptop-only builds.",
    Icon: Hammer,
  },
  {
    label: "Scan",
    body: "Policy and security checks before promotion, not after production.",
    Icon: ScanSearch,
  },
  {
    label: "Deploy",
    body: "Environment-gated promotion with rollback as a first-class path.",
    Icon: Rocket,
  },
  {
    label: "Verify",
    body: "Post-deploy checks tied to SLOs — release isn't done at merge.",
    Icon: ShieldCheck,
  },
  {
    label: "Observe",
    body: "GitOps reconciliation and signals that map to on-call ownership.",
    Icon: Eye,
  },
] as const;

export function DevOpsStripSection() {
  const [active, setActive] = useState(3);

  return (
    <SectionShell
      tone="navyLight"
      eyebrow="DevOps"
      title="CI/CD and GitOps that auditors can follow"
      lead="Promotion paths, environment gates, and desired-state sync — so releases are repeatable and the cluster never drifts from what's reviewed."
    >
      <div className="flex flex-wrap gap-2">
        {stages.map((s, i) => (
          <IcChip key={s.label} active={active === i} onClick={() => setActive(i)}>
            <s.Icon className="h-3.5 w-3.5" aria-hidden />
            {s.label}
          </IcChip>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stages.map((s, i) => (
          <button key={s.label} type="button" className="text-left" onClick={() => setActive(i)}>
            <IcCard
              interactive
              className={cn("h-full p-5", active === i && "border-orange-500 before:scale-x-100")}
            >
              <div className="flex items-start justify-between gap-3">
                <IcIconTile size="sm" className={cn(active === i && "bg-orange-500 text-white")}>
                  <s.Icon className="h-4 w-4" aria-hidden />
                </IcIconTile>
                <p className="font-mono text-[11px] tracking-[0.12em] text-orange-500">
                  {String(i + 1).padStart(2, "0")}
                </p>
              </div>
              <h3 className="font-display mt-3 text-base font-semibold text-navy-900">
                {s.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-600">{s.body}</p>
            </IcCard>
          </button>
        ))}
      </div>
    </SectionShell>
  );
}
