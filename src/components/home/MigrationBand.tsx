import { Link } from "react-router-dom";
import {
  ArrowRight,
  Binoculars,
  MapPinned,
  RefreshCcw,
  TrendingDown,
} from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import { IcCard } from "@/components/ui/ic-card";
import { IcIconTile } from "@/components/ui/ic-icon-tile";
import { Button } from "@/components/ui/button";

const lanes = [
  {
    step: "01",
    title: "On-prem discovery",
    body: "Hard dependencies, data gravity, and freeze windows — not just a VM list.",
    Icon: Binoculars,
  },
  {
    step: "02",
    title: "Landing zone",
    body: "Identity, network, and policy baselines ready before the first wave lands.",
    Icon: MapPinned,
  },
  {
    step: "03",
    title: "Rehearsed cutover",
    body: "Go/no-go gates, named owners, and rollback criteria written before traffic moves.",
    Icon: RefreshCcw,
  },
  {
    step: "04",
    title: "Optimize",
    body: "Rightsizing and FinOps in the first 30 days so cost doesn't surprise anyone.",
    Icon: TrendingDown,
  },
] as const;

export function MigrationBand() {
  return (
    <SectionShell
      tone="white"
      eyebrow="Migration"
      title="Move with rehearsal, not hope"
      lead="Migrations fail on unknowns. We sequence waves, rehearse cutovers, and keep hybrid connectivity intact until the estate is proven in the target cloud."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {lanes.map((lane) => (
          <IcCard key={lane.step} className="p-6">
            <div className="flex items-start justify-between gap-3">
              <IcIconTile>
                <lane.Icon className="h-5 w-5" aria-hidden />
              </IcIconTile>
              <p className="font-mono text-[11px] tracking-[0.14em] text-orange-500">
                {lane.step}
              </p>
            </div>
            <h3 className="font-display mt-4 text-base font-semibold text-navy-900">
              {lane.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-600">{lane.body}</p>
          </IcCard>
        ))}
      </div>
      <Button asChild className="mt-8">
        <Link to="/solutions/cloud-migration">
          Plan your migration <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </SectionShell>
  );
}
