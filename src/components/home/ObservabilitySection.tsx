import { Activity, AlertOctagon, Gauge, Users } from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import { IcCard } from "@/components/ui/ic-card";
import { IcIconTile } from "@/components/ui/ic-icon-tile";

const signals = [
  {
    title: "Latency",
    body: "Golden-signal baselines with alert routing to the team that owns the service.",
    Icon: Gauge,
  },
  {
    title: "Errors",
    body: "Error budgets that influence ship decisions — not noise nobody acknowledges.",
    Icon: AlertOctagon,
  },
  {
    title: "Saturation",
    body: "Capacity forecasts tied to release calendars and real traffic patterns.",
    Icon: Activity,
  },
  {
    title: "Ownership",
    body: "Dashboards per service with runbooks linked from alerts, not buried in wikis.",
    Icon: Users,
  },
] as const;

export function ObservabilitySection() {
  return (
    <SectionShell
      tone="navyLight"
      eyebrow="Observability"
      title="Signals that map to ownership — not noise"
      lead="Prometheus, Grafana, and tracing patterns wired to SLOs. Conceptual framing for how we instrument estates — not live telemetry claims."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {signals.map((s) => (
          <IcCard key={s.title} className="p-6">
            <IcIconTile>
              <s.Icon className="h-5 w-5" aria-hidden />
            </IcIconTile>
            <h3 className="font-display mt-4 text-base font-semibold text-navy-900">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-600">{s.body}</p>
          </IcCard>
        ))}
      </div>
    </SectionShell>
  );
}
