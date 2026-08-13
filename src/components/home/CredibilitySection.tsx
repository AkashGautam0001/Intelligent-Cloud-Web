import { Link } from "react-router-dom";
import { ArrowRight, Handshake, FlaskConical, Target } from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import { IcCard } from "@/components/ui/ic-card";
import { IcIconTile } from "@/components/ui/ic-icon-tile";

export function CredibilitySection() {
  return (
    <SectionShell
      tone="navyLight"
      eyebrow="Engagement model"
      title="Partnership over vague retainers"
      lead="We sell outcomes you can inspect: landing zones, migrations, platforms, and operations with named owners — not open-ended hours that never change the estate."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <IcCard interactive className="p-6">
          <IcIconTile>
            <Target className="h-5 w-5" aria-hidden />
          </IcIconTile>
          <h3 className="font-display mt-4 text-lg font-semibold text-navy-900">
            Outcome-based delivery
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-600">
            Transparent scopes focused on artifacts your team can operate: modules,
            pipelines, runbooks, and dashboards with ownership.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-text-600">
            <li className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-500" aria-hidden />
              Written acceptance criteria
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-500" aria-hidden />
              Demoable increments
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-500" aria-hidden />
              Knowledge transfer baked in
            </li>
          </ul>
        </IcCard>
        <IcCard interactive className="p-6">
          <IcIconTile>
            <FlaskConical className="h-5 w-5" aria-hidden />
          </IcIconTile>
          <h3 className="font-display mt-4 text-lg font-semibold text-navy-900">
            Proof of concept first
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-600">
            Start with a scoped assessment or pilot so risk stays visible and decisions
            stay grounded in your real constraints.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-text-600">
            <li className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-500" aria-hidden />
              30-minute assessment path
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-500" aria-hidden />
              Pilot success metrics
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-500" aria-hidden />
              Clear expand / stop gates
            </li>
          </ul>
        </IcCard>
        <IcCard interactive className="bg-surface-50 p-6">
          <IcIconTile>
            <Handshake className="h-5 w-5" aria-hidden />
          </IcIconTile>
          <h3 className="font-display mt-4 text-lg font-semibold text-navy-900">
            Partner program
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-600">
            Referral, reseller, and solution partner paths with clear ownership.
            We only publish logos we have approval to show.
          </p>
          <Link
            to="/partners"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-500 hover:underline"
          >
            Explore partner paths <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </IcCard>
      </div>
    </SectionShell>
  );
}
