import { CloudCog, ShieldCheck, Boxes } from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import { IcCard } from "@/components/ui/ic-card";
import { IcIconTile } from "@/components/ui/ic-icon-tile";
import { useI18n } from "@/i18n";

export function WhatWeDoSection() {
  const { t } = useI18n();
  const w = t.home.whatWeDo;

  const capabilities = [
    {
      id: "migrate",
      title: w.migrate.title,
      icon: CloudCog,
      points: [
        w.migrate.points.wavePlanning,
        w.migrate.points.cutover,
        w.migrate.points.rpoRto,
        w.migrate.points.hybrid,
      ],
    },
    {
      id: "platform",
      title: w.platform.title,
      icon: Boxes,
      points: [
        w.platform.points.terraform,
        w.platform.points.aksEks,
        w.platform.points.cicd,
        w.platform.points.selfService,
      ],
    },
    {
      id: "secure",
      title: w.secure.title,
      icon: ShieldCheck,
      points: [
        w.secure.points.iam,
        w.secure.points.waf,
        w.secure.points.slo,
        w.secure.points.incident,
      ],
    },
  ] as const;

  return (
    <SectionShell tone="navyLight" eyebrow={w.eyebrow} title={w.title} lead={w.lead}>
      <div className="grid gap-5 md:grid-cols-3">
        {capabilities.map((c) => {
          const Icon = c.icon;
          return (
            <IcCard key={c.id} className="flex h-full flex-col p-6 sm:p-7">
              <IcIconTile>
                <Icon className="h-5 w-5" />
              </IcIconTile>
              <h3 className="font-display mt-5 text-xl font-semibold text-navy-900">
                {c.title}
              </h3>
              <ul className="mt-4 flex-1 space-y-2.5">
                {c.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed text-text-600">
                    {point}
                  </li>
                ))}
              </ul>
            </IcCard>
          );
        })}
      </div>
    </SectionShell>
  );
}
