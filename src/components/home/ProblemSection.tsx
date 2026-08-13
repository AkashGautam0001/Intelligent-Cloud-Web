import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import { IcCard } from "@/components/ui/ic-card";
import { IcIconTile } from "@/components/ui/ic-icon-tile";

const fragile = [
  "Snowflake environments nobody can rebuild",
  "Manual deploys that only one engineer trusts",
  "Cost blind spots until the invoice arrives",
  "DR plans that were never rehearsed",
];

const governed = [
  "Landing zones with identity and network baselines",
  "GitOps delivery auditors can follow",
  "FinOps guardrails and showback",
  "Tested RPO/RTO with named owners",
];

export function ProblemSection() {
  return (
    <SectionShell
      tone="white"
      eyebrow="The problem"
      title="Fragile cloud estates fail quietly — until they don't"
      lead="Most teams don't lose on the cloud because of bad ideas. They lose on unclear ownership, untested recovery, and platforms that can't survive the next release."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <IcCard className="border-danger/20 bg-danger/[0.03] p-6 sm:p-8">
          <IcIconTile className="bg-danger/10 text-danger">
            <AlertTriangle className="h-5 w-5" aria-hidden />
          </IcIconTile>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-danger">
            Fragile
          </p>
          <h3 className="font-display mt-2 text-xl font-semibold text-navy-900">
            What breaks under load
          </h3>
          <ul className="mt-5 space-y-3">
            {fragile.map((item) => (
              <li
                key={item}
                className="flex gap-3 border-t border-border-200 pt-3 text-sm text-text-600"
              >
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-danger/80" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </IcCard>
        <IcCard className="border-success/25 bg-success/[0.04] p-6 sm:p-8">
          <IcIconTile className="bg-success/10 text-success">
            <CheckCircle2 className="h-5 w-5" aria-hidden />
          </IcIconTile>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-success">
            Governed
          </p>
          <h3 className="font-display mt-2 text-xl font-semibold text-navy-900">
            What we engineer instead
          </h3>
          <ul className="mt-5 space-y-3">
            {governed.map((item) => (
              <li
                key={item}
                className="flex gap-3 border-t border-border-200 pt-3 text-sm text-text-600"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </IcCard>
      </div>
    </SectionShell>
  );
}
