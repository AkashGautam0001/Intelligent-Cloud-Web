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
import { useI18n } from "@/i18n";

export function MigrationBand() {
  const { t } = useI18n();
  const m = t.home.migration;

  const lanes = [
    {
      step: "01",
      title: m.discovery.title,
      body: m.discovery.body,
      Icon: Binoculars,
    },
    {
      step: "02",
      title: m.landingZone.title,
      body: m.landingZone.body,
      Icon: MapPinned,
    },
    {
      step: "03",
      title: m.cutover.title,
      body: m.cutover.body,
      Icon: RefreshCcw,
    },
    {
      step: "04",
      title: m.optimize.title,
      body: m.optimize.body,
      Icon: TrendingDown,
    },
  ] as const;

  return (
    <SectionShell tone="mist" eyebrow={m.eyebrow} title={m.title} lead={m.lead}>
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
          {m.cta} <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </SectionShell>
  );
}
