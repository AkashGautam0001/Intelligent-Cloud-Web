import { Link } from "react-router-dom";
import {
  AppWindow,
  ArrowRight,
  Check,
  Fingerprint,
  Network,
  Shield,
} from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import { IcCard } from "@/components/ui/ic-card";
import { IcIconTile } from "@/components/ui/ic-icon-tile";
import { Button } from "@/components/ui/button";

const layers = [
  {
    label: "Application",
    detail: "Workload identity, secrets, SBOM, and short-lived credentials.",
    Icon: AppWindow,
  },
  {
    label: "Edge / WAF",
    detail: "Bot controls, rate limits, and exposure that matches risk.",
    Icon: Shield,
  },
  {
    label: "Identity",
    detail: "Least privilege, break-glass, and reviewable access paths.",
    Icon: Fingerprint,
  },
  {
    label: "Network",
    detail: "Segmentation, private links, and clear blast-radius boundaries.",
    Icon: Network,
  },
] as const;

export function SecurityBand() {
  return (
    <SectionShell
      tone="white"
      eyebrow="Security"
      title="Controls layered where attacks actually land"
      lead="Security that ships with the platform — identity, network, edge, and workload baselines — not a binder after go-live."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {layers.map((l, i) => (
          <IcCard key={l.label} className="p-6">
            <div className="flex items-start justify-between gap-3">
              <IcIconTile>
                <l.Icon className="h-5 w-5" aria-hidden />
              </IcIconTile>
              <p className="font-mono text-[11px] tracking-[0.14em] text-orange-500">
                {String(i + 1).padStart(2, "0")}
              </p>
            </div>
            <h3 className="font-display mt-4 text-lg font-semibold text-navy-900">
              {l.label}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-600">{l.detail}</p>
          </IcCard>
        ))}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          "Policy-as-code for accounts and clusters",
          "Evidence packs for audits without theater",
        ].map((p) => (
          <div
            key={p}
            className="flex items-start gap-3 rounded-[12px] border border-border-200 bg-[#eef3f8]/60 px-4 py-3.5"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/12 text-orange-500">
              <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden />
            </span>
            <p className="text-sm font-medium leading-relaxed text-navy-900">{p}</p>
          </div>
        ))}
      </div>
      <Button asChild className="mt-8">
        <Link to="/solutions/security-compliance">
          Discuss security <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </SectionShell>
  );
}
