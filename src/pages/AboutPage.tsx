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
import { Button } from "@/components/ui/button";
import { IcCard } from "@/components/ui/ic-card";
import { IcIconTile } from "@/components/ui/ic-icon-tile";
import { SectionShell } from "@/components/ui/section-shell";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { StickyPhotoHero, StickyPhotoHeroBody } from "@/components/StickyPhotoHero";
import { cn } from "@/lib/utils";
import aboutHero from "@/assets/about-page.jpg";
import visionImg from "@/assets/vision.jpg";
import missionImg from "@/assets/mission.jpg";

const approachIcons = [Layers, Lock, RefreshCw] as const;
const differentiatorIcons = [Handshake, ShieldCheck, Sparkles, Wallet] as const;

function PointList({ items, tone = "light" }: { items: string[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex gap-3 text-sm leading-relaxed sm:text-base",
            dark ? "text-white/75" : "text-text-600",
          )}
        >
          <span
            className={cn(
              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-orange-500",
              dark ? "bg-orange-500/20" : "bg-orange-500/12",
            )}
          >
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

      <StickyPhotoHero src={aboutHero}>
        <Breadcrumbs
          items={[
            { label: t.common.home, to: "/" },
            { label: t.common.company, to: "/about" },
            { label: t.common.aboutUs },
          ]}
          className="text-white/65 [&_span.text-navy-900]:text-white [&_a]:text-white/75 [&_a:hover]:text-orange-400"
        />
        <div className="mt-8 max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-orange-400/90">
            {a.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-white">
            {a.heroTitle}
          </h1>
          <p className="mt-5 text-[clamp(1rem,1.35vw,1.125rem)] leading-[1.7] text-white/70">
            {a.heroLead}
          </p>
          <div className="mt-5">
            <PointList items={[...a.failurePoints]} tone="dark" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/book-demo">
                {t.common.bookAssessment} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/35 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <Link to="/contact">{t.common.contactSales}</Link>
            </Button>
          </div>
        </div>
      </StickyPhotoHero>

      <StickyPhotoHeroBody>
      {/* Vision + Mission */}
      <SectionShell
        tone="soft"
        eyebrow={a.foundationEyebrow}
        title={a.foundationTitle}
        lead={a.foundationLead}
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <IcCard className="flex h-full flex-col overflow-hidden p-0">
            <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[2/1]">
              <img
                src={visionImg}
                alt=""
                className="h-full w-full object-cover object-center"
                decoding="async"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-orange-500">
                {a.visionEyebrow}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-navy-900">
                {a.visionTitle}
              </h3>
              <div className="mt-5">
                <PointList items={[...a.visionPoints]} />
              </div>
            </div>
          </IcCard>
          <IcCard className="flex h-full flex-col overflow-hidden p-0">
            <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[2/1]">
              <img
                src={missionImg}
                alt=""
                className="h-full w-full object-cover object-center"
                decoding="async"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-orange-500">
                {a.missionEyebrow}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-navy-900">
                {a.missionTitle}
              </h3>
              <div className="mt-5">
                <PointList items={[...a.missionPoints]} />
              </div>
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
        tone="soft"
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
      </StickyPhotoHeroBody>
    </>
  );
}
