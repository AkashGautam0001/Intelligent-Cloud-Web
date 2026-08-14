import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import { IcCard } from "@/components/ui/ic-card";
import { IcIconTile } from "@/components/ui/ic-icon-tile";
import { useI18n } from "@/i18n";

export function ProblemSection() {
  const { t } = useI18n();
  const p = t.home.problem;
  const fragile = [
    p.fragile.snowflake,
    p.fragile.manualDeploys,
    p.fragile.costBlind,
    p.fragile.drPlans,
  ];
  const governed = [
    p.governed.landingZones,
    p.governed.gitops,
    p.governed.finops,
    p.governed.rpoRto,
  ];

  return (
    <SectionShell tone="white" eyebrow={p.eyebrow} title={p.title} lead={p.lead}>
      <div className="grid gap-6 lg:grid-cols-2">
        <IcCard className="border-danger/20 bg-danger/[0.03] p-6 sm:p-8">
          <IcIconTile className="bg-danger/10 text-danger">
            <AlertTriangle className="h-5 w-5" aria-hidden />
          </IcIconTile>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-danger">
            {p.fragileLabel}
          </p>
          <h3 className="font-display mt-2 text-xl font-semibold text-navy-900">
            {p.fragileTitle}
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
            {p.governedLabel}
          </p>
          <h3 className="font-display mt-2 text-xl font-semibold text-navy-900">
            {p.governedTitle}
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
