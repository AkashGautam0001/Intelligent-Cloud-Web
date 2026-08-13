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

const points = [
  {
    title: "Control plane first",
    body: "Identity, networking, and policy before workloads — so every environment inherits the same baselines.",
    Icon: CircuitBoard,
  },
  {
    title: "Private by default",
    body: "Hub-and-spoke or mesh patterns that stay reviewable, without brittle VPN sprawl.",
    Icon: Lock,
  },
  {
    title: "Owned signals",
    body: "Health wired to ownership — not vanity dashboards nobody pages on.",
    Icon: Radar,
  },
  {
    title: "Blast-radius boundaries",
    body: "Explicit cells between production estates so one failure doesn't become every failure.",
    Icon: Split,
  },
  {
    title: "Service discovery that matches topology",
    body: "DNS and discovery designed for how environments actually connect.",
    Icon: Globe2,
  },
  {
    title: "Progressive exposure",
    body: "Edge → identity → workload → data — each layer intentional, not accidental.",
    Icon: Route,
  },
] as const;

export function SignatureNetworkSection() {
  return (
    <SectionShell
      tone="navyLight"
      eyebrow="Platform network"
      title="From disconnected workloads to a healthy control plane"
      lead="We connect identity, networking, clusters, and data services so the estate behaves like one system — not a pile of accounts."
    >
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
