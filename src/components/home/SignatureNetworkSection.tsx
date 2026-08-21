import {
  CircuitBoard,
  Globe2,
  Lock,
  Radar,
  Route,
  Split,
} from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";
import platformNetworkArt from "@/assets/homepage/platform-network.png";

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
    <SectionShell
      tone="white"
      eyebrow={sn.eyebrow}
      title={sn.title}
      lead={sn.lead}
      className="[&_.section-shell-body]:mt-8 lg:[&_.section-shell-body]:mt-10"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-16">
        {/* Left: scrolling points */}
        <div className="relative min-w-0 space-y-3 lg:space-y-4">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={Math.min(i * 0.05, 0.2)}>
              <article
                className={cn(
                  "group relative rounded-2xl border border-transparent bg-transparent p-5 transition-colors duration-300",
                  "hover:border-border-200 hover:bg-[#eef3f8]/60",
                  "sm:p-6",
                )}
              >
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-orange-500/10 text-orange-500 ring-1 ring-orange-500/15 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:ring-orange-500">
                    <p.Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[11px] tracking-[0.14em] text-navy-900/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-navy-900">
                        {p.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-text-600 sm:text-[15px]">
                      {p.body}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Right: column stretches with points so sticky has room to travel */}
        <aside className="relative hidden lg:block">
          <div className="sticky top-24 z-10">
            <img
              src={platformNetworkArt}
              alt={sn.title}
              width={1200}
              height={1000}
              className="mx-auto block h-auto w-full select-none object-contain"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        </aside>

        {/* Mobile / tablet: diagram after points */}
        <div className="lg:hidden">
          <img
            src={platformNetworkArt}
            alt={sn.title}
            width={1200}
            height={1000}
            className="mx-auto block h-auto w-full max-w-md select-none object-contain"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </div>
      </div>
    </SectionShell>
  );
}
