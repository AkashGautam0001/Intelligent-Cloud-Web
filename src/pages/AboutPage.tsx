import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Handshake,
  Layers,
  Lock,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import { about as aboutFallback, getCompanyPage } from "@/content/company";
import { useI18n } from "@/i18n";
import { Breadcrumbs } from "@/components/PageHero";
import { PageSeo } from "@/components/PageSeo";
import { TechBrandIcon } from "@/components/TechBrandIcon";
import { Button } from "@/components/ui/button";
import { IcCard } from "@/components/ui/ic-card";
import { IcIconTile } from "@/components/ui/ic-icon-tile";
import { SectionShell } from "@/components/ui/section-shell";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

const experienceBrands = ["azure", "kubernetes", "terraform", "argo"] as const;
const approachIcons = [Layers, Lock, RefreshCw] as const;
const differentiatorIcons = [Handshake, ShieldCheck, Sparkles, Wallet] as const;

function PointList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-600 sm:text-base">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/12 text-orange-500">
            <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function AboutPage() {
  const { t, locale } = useI18n();
  const about = getCompanyPage("about", locale) ?? aboutFallback;
  const a = t.pages.about;

  return (
    <>
      <PageSeo title={a.seoTitle} description={about.summary} />

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border-200 bg-[#eef3f8]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 90% 20%, rgba(242,106,19,0.12), transparent 55%), radial-gradient(ellipse 40% 50% at 10% 80%, rgba(67,139,216,0.12), transparent 50%)",
          }}
        />
        <div className="container-ic relative py-12 lg:py-16">
          <Breadcrumbs
            items={[
              { label: t.common.home, to: "/" },
              { label: t.common.company, to: "/about" },
              { label: t.common.aboutUs },
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-14">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#6b7a8c]">
                {a.eyebrow}
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-navy-900">
                {a.heroTitle}
              </h1>
              <p className="mt-5 max-w-2xl text-[clamp(1rem,1.35vw,1.125rem)] leading-[1.7] text-text-600">
                {a.heroLead}
              </p>
              <div className="mt-5">
                <PointList items={[...a.failurePoints]} />
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/book-demo">
                    {t.common.bookAssessment} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">{t.common.contactSales}</Link>
                </Button>
              </div>
            </div>

            <IcCard className="p-6 sm:p-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#6b7a8c]">
                {a.experienceEyebrow}
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-navy-900">
                {a.experienceTitle}
              </p>
              <ul className="mt-5 space-y-3">
                {a.experiencePoints.map((label, i) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-[10px] border border-border-200 bg-[#eef3f8]/70 px-3 py-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white shadow-[inset_0_0_0_1px_rgba(4,39,95,0.08)]">
                      <TechBrandIcon brand={experienceBrands[i] ?? "azure"} size="sm" />
                    </span>
                    <span className="text-sm font-medium leading-snug text-navy-900">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-text-600">
                {a.experienceFooter}
              </p>
            </IcCard>
          </div>
        </div>
      </div>

      {/* Vision + Mission */}
      <SectionShell
        tone="white"
        eyebrow={a.foundationEyebrow}
        title={a.foundationTitle}
        lead={a.foundationLead}
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <IcCard className="h-full p-6 sm:p-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-orange-500">
              {a.visionEyebrow}
            </p>
            <h3 className="mt-3 font-display text-xl font-semibold text-navy-900">
              {a.visionTitle}
            </h3>
            <div className="mt-5">
              <PointList items={[...a.visionPoints]} />
            </div>
          </IcCard>
          <IcCard className="h-full p-6 sm:p-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-orange-500">
              {a.missionEyebrow}
            </p>
            <h3 className="mt-3 font-display text-xl font-semibold text-navy-900">
              {a.missionTitle}
            </h3>
            <div className="mt-5">
              <PointList items={[...a.missionPoints]} />
            </div>
          </IcCard>
        </div>
      </SectionShell>

      {/* Approach */}
      <SectionShell
        tone="navyLight"
        eyebrow={a.approachEyebrow}
        title={a.approachTitle}
        lead={a.approachLead}
      >
        <Stagger className="grid gap-4 md:grid-cols-3" stagger={0.07}>
          {a.approach.map(({ title, points }, i) => {
            const Icon = approachIcons[i] ?? Layers;
            return (
              <StaggerItem key={title}>
                <IcCard interactive className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <IcIconTile size="sm">
                      <Icon className="h-4 w-4" aria-hidden />
                    </IcIconTile>
                    <span className="font-mono text-xs text-orange-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
                    {title}
                  </h3>
                  <ul className="mt-4 flex-1 space-y-3 border-t border-border-200 pt-4">
                    {points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-relaxed text-text-600"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </IcCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </SectionShell>

      {/* Differentiators */}
      <SectionShell
        tone="white"
        eyebrow={a.differentiatorsEyebrow}
        title={a.differentiatorsTitle}
        lead={a.differentiatorsLead}
      >
        <Stagger className="grid gap-4 sm:grid-cols-2" stagger={0.07}>
          {a.differentiators.map(({ title, body }, i) => {
            const Icon = differentiatorIcons[i] ?? Handshake;
            return (
              <StaggerItem key={title}>
                <IcCard interactive className="h-full p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-orange-500" aria-hidden />
                        <h3 className="font-display text-base font-semibold text-navy-900">
                          {title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-text-600">{body}</p>
                    </div>
                  </div>
                </IcCard>
              </StaggerItem>
            );
          })}
        </Stagger>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/services">{a.browseServices}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/solutions">{a.browseSolutions}</Link>
          </Button>
        </div>
      </SectionShell>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 80% at 100% 50%, rgba(242,106,19,0.18), transparent 55%), radial-gradient(ellipse 40% 60% at 0% 80%, rgba(67,139,216,0.16), transparent 50%)",
          }}
        />
        <div className="container-ic relative py-16 lg:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/55">
            {a.ctaEyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.75rem,3.2vw,2.35rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-white">
            {a.ctaTitle}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">
            {about.ctaLead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to={about.ctaPrimary.to}>
                {about.ctaPrimary.label} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            {about.ctaSecondary ? (
              <Button
                asChild
                size="lg"
                variant="light"
              >
                <Link to={about.ctaSecondary.to}>{about.ctaSecondary.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
