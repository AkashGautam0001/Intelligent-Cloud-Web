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
import { about } from "@/content/company";
import { Breadcrumbs } from "@/components/PageHero";
import { PageSeo } from "@/components/PageSeo";
import { TechBrandIcon } from "@/components/TechBrandIcon";
import { Button } from "@/components/ui/button";
import { IcCard } from "@/components/ui/ic-card";
import { IcIconTile } from "@/components/ui/ic-icon-tile";
import { SectionShell } from "@/components/ui/section-shell";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

const failurePoints = [
  "Fragile infrastructure",
  "Unclear cost visibility",
  "DevOps that doesn’t scale past the first few engineers",
];

const experiencePoints = [
  { label: "Azure landing zone design", brand: "azure" },
  { label: "AKS-based container platforms", brand: "kubernetes" },
  { label: "Terraform-driven Infrastructure-as-Code", brand: "terraform" },
  { label: "GitOps delivery pipelines for HA workloads", brand: "argo" },
];

const visionPoints = [
  "Cloud infrastructure should be a competitive advantage — not a constant fire drill.",
  "Growing companies deserve enterprise-grade reliability without an enterprise-sized team.",
];

const missionPoints = [
  "Make enterprise-grade architecture, security, and automation accessible at every stage.",
  "Support 5-person startups shipping their first product.",
  "Help enterprise teams modernize a decade of technical debt.",
];

const approach = [
  {
    title: "Automation-First",
    Icon: Layers,
    points: [
      "If it can be scripted, it shouldn’t be manual",
      "Terraform, Helm, and ArgoCD by default",
      "Version-controlled, auditable, and repeatable infrastructure",
    ],
  },
  {
    title: "Security",
    Icon: Lock,
    points: [
      "Landing zones designed in from day one",
      "Network segmentation built into the foundation",
      "Cost governance before audits or surprise bills",
    ],
  },
  {
    title: "Continuous Improvement",
    Icon: RefreshCw,
    points: [
      "Observability by default — Prometheus, Grafana, Loki, Tempo",
      "Work as an extension of your team",
      "One-time migrations or ongoing 24×7 managed operations",
    ],
  },
];

const differentiators = [
  {
    title: "Trusted Partner",
    body: "Partnership, not just delivery — transparent, outcome-based engagements with no vague retainers.",
    Icon: Handshake,
  },
  {
    title: "Experienced Team",
    body: "Deep Kubernetes & Azure specialization — not generalist IT support — with trunk-based CI/CD practices.",
    Icon: ShieldCheck,
  },
  {
    title: "Modern Tech",
    body: "Strategic technology partnerships across Azure and the open-source Kubernetes ecosystem.",
    Icon: Sparkles,
  },
  {
    title: "Cost Effective",
    body: "Pilot programs for early customers and proof-of-concept engagements.",
    Icon: Wallet,
  },
];

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
  return (
    <>
      <PageSeo title="About | Intelligent Cloud" description={about.summary} />

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
              { label: "Home", to: "/" },
              { label: "Company", to: "/about" },
              { label: "About Us" },
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-14">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#6b7a8c]">
                About Us
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-navy-900">
                Built by Engineers Who&apos;ve Run Production Cloud at Scale
              </h1>
              <p className="mt-5 max-w-2xl text-[clamp(1rem,1.35vw,1.125rem)] leading-[1.7] text-text-600">
                Intelligent-Cloud was founded on a simple observation: most companies
                don&apos;t fail on the cloud because of bad ideas — they fail because of:
              </p>
              <div className="mt-5">
                <PointList items={failurePoints} />
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/book-demo">
                    Book assessment <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Contact sales</Link>
                </Button>
              </div>
            </div>

            <IcCard className="p-6 sm:p-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#6b7a8c]">
                Hands-on experience
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-navy-900">
                We started Intelligent-Cloud to fix that
              </p>
              <ul className="mt-5 space-y-3">
                {experiencePoints.map(({ label, brand }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-[10px] border border-border-200 bg-[#eef3f8]/70 px-3 py-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white shadow-[inset_0_0_0_1px_rgba(4,39,95,0.08)]">
                      <TechBrandIcon brand={brand} size="sm" />
                    </span>
                    <span className="text-sm font-medium leading-snug text-navy-900">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-text-600">
                Real high-availability workloads — not just theoretical best practices.
              </p>
            </IcCard>
          </div>
        </div>
      </div>

      {/* Vision + Mission */}
      <SectionShell
        tone="white"
        eyebrow="Foundation"
        title="Vision & Mission"
        lead="What we believe — and what we build toward for every engagement."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <IcCard className="h-full p-6 sm:p-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-orange-500">
              Our Vision
            </p>
            <h3 className="mt-3 font-display text-xl font-semibold text-navy-900">
              Competitive advantage, not fire drills
            </h3>
            <div className="mt-5">
              <PointList items={visionPoints} />
            </div>
          </IcCard>
          <IcCard className="h-full p-6 sm:p-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-orange-500">
              Our Mission
            </p>
            <h3 className="mt-3 font-display text-xl font-semibold text-navy-900">
              Enterprise-grade — at every stage
            </h3>
            <div className="mt-5">
              <PointList items={missionPoints} />
            </div>
          </IcCard>
        </div>
      </SectionShell>

      {/* Approach */}
      <SectionShell
        tone="navyLight"
        eyebrow="Approach"
        title="Our Approach"
        lead="How we design, ship, and stay with your team after go-live."
      >
        <Stagger className="grid gap-4 md:grid-cols-3" stagger={0.07}>
          {approach.map(({ title, Icon, points }, i) => (
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
          ))}
        </Stagger>
      </SectionShell>

      {/* Differentiators */}
      <SectionShell
        tone="white"
        eyebrow="Trust & credibility"
        title="What Makes Us Different"
        lead="Clear signals — not vague promises."
      >
        <Stagger className="grid gap-4 sm:grid-cols-2" stagger={0.07}>
          {differentiators.map(({ title, body, Icon }, i) => (
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
          ))}
        </Stagger>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/services">Browse services</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/solutions">Browse solutions</Link>
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
            Next step
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.75rem,3.2vw,2.35rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-white">
            {about.ctaTitle}
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
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:border-navy-900 hover:text-white"
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
