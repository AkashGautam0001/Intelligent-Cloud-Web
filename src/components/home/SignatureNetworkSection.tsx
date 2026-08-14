import {
  CircuitBoard,
  Globe2,
  Lock,
  Radar,
  Route,
  Split,
} from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import { IcCard } from "@/components/ui/ic-card";
import { IcIconTile } from "@/components/ui/ic-icon-tile";
import { useI18n } from "@/i18n";

export function SignatureNetworkSection() {
  const { t } = useI18n();
  const sn = t.home.signatureNetwork;

  const points = [
    {
      title: sn.controlPlane.title,
      body: sn.controlPlane.body,
      Icon: CircuitBoard,
    },
    {
      title: sn.privateByDefault.title,
      body: sn.privateByDefault.body,
      Icon: Lock,
    },
    {
      title: sn.ownedSignals.title,
      body: sn.ownedSignals.body,
      Icon: Radar,
    },
    {
      title: sn.blastRadius.title,
      body: sn.blastRadius.body,
      Icon: Split,
    },
    {
      title: sn.serviceDiscovery.title,
      body: sn.serviceDiscovery.body,
      Icon: Globe2,
    },
    {
      title: sn.progressiveExposure.title,
      body: sn.progressiveExposure.body,
      Icon: Route,
    },
  ] as const;

  return (
    <SectionShell tone="navyLight" eyebrow={sn.eyebrow} title={sn.title} lead={sn.lead}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((p) => (
          <IcCard key={p.title} className="p-6">
            <IcIconTile>
              <p.Icon className="h-5 w-5" aria-hidden />
            </IcIconTile>
            <h3 className="font-display mt-4 text-base font-semibold text-navy-900">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-600">{p.body}</p>
          </IcCard>
        ))}
      </div>
    </SectionShell>
  );
}
