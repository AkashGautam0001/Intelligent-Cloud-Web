import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageCircle,
  Package,
} from "lucide-react";
import type { ServicePageContent } from "@/content/services/types";
import { getServicePage } from "@/content/services";
import { serviceIcon } from "@/lib/service-icons";
import {
  ChallengeIcon,
  OutcomeIcon,
  pickIcon,
} from "@/lib/section-icons";
import { whatsappExpertUrl } from "@/lib/whatsapp";
import { useI18n } from "@/i18n";
import { Breadcrumbs } from "@/components/PageHero";
import { RichHtml } from "@/components/RichHtml";
import { Button } from "@/components/ui/button";
import { IcCard } from "@/components/ui/ic-card";
import { IcIconTile } from "@/components/ui/ic-icon-tile";
import { SectionShell } from "@/components/ui/section-shell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceSlugMark } from "@/components/services/service-svgs";
import { StackToolsSection } from "@/components/StackToolsSection";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

type ServiceLongFormProps = {
  content: ServicePageContent;
  /** Optional CMS body appended under approach */
  cmsBodyHtml?: string;
};

export function ServiceLongForm({
  content,
  cmsBodyHtml,
}: ServiceLongFormProps) {
  const { t, locale } = useI18n();
  const title = content.title;
  const summary = content.summary;
  const Icon = serviceIcon(content.iconKey);
  const related = content.related
    .map((slug) => getServicePage(slug, locale))
    .filter(Boolean) as ServicePageContent[];

  return (
    <>
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
              { label: "Services", to: "/services" },
              { label: title },
            ]}
          />
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#6b7a8c]">
                {content.eyebrow} · Service
              </p>
              <h1 className="mt-4 font-display text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-navy-900">
                {title}
              </h1>
              <p className="mt-3 max-w-2xl text-lg font-medium leading-snug text-navy-900/80">
                {content.tagline}
              </p>
              <p className="mt-4 max-w-2xl text-[clamp(1rem,1.35vw,1.125rem)] leading-[1.7] text-[#5f6b7a]">
                {summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/book-demo">
                    Book assessment <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={whatsappExpertUrl(t.whatsapp.defaultMessage)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Talk to an expert
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
              <IcCard className="overflow-hidden p-6">
                <div className="flex items-center gap-4">
                  <IcIconTile size="lg" className="h-14 w-14 rounded-[14px]">
                    <Icon className="h-7 w-7" aria-hidden />
                  </IcIconTile>
                  <div>
                    <p className="font-display text-sm font-semibold text-navy-900">{title}</p>
                    <p className="mt-1 text-sm text-text-600">{content.eyebrow}</p>
                  </div>
                </div>
                <ServiceSlugMark
                  slug={content.slug}
                  className="mt-6 h-auto w-full"
                />
              </IcCard>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <SectionShell
        tone="navyLight"
        eyebrow="Capabilities"
        title="What we deliver"
        lead="Modern building blocks — not a slide deck of buzzwords — so your team can operate what we leave behind."
      >
        <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" stagger={0.07}>
          {content.highlights.map((h, i) => {
            const Icon = pickIcon(i);
            return (
              <StaggerItem key={h.title}>
                <IcCard interactive className="h-full">
                  <div className="flex items-start gap-3">
                    <IcIconTile size="sm">
                      <Icon className="h-4 w-4" aria-hidden />
                    </IcIconTile>
                    <div>
                      <h3 className="font-display text-base font-semibold text-navy-900">
                        {h.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-600">{h.body}</p>
                    </div>
                  </div>
                </IcCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </SectionShell>

      {/* Challenges / Outcomes */}
      <SectionShell
        tone="white"
        eyebrow="Why it matters"
        title="Challenges we see — outcomes we aim for"
        lead="Most estates already have tools. The gap is usually clarity, ownership, and evidence."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <IcCard className="h-full border-orange-500/20 bg-orange-500/[0.03]">
            <div className="flex items-center gap-2">
              <ChallengeIcon className="h-4 w-4 text-orange-500" aria-hidden />
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-orange-500">
                Challenges
              </p>
            </div>
            <ul className="mt-4 space-y-3">
              {content.challenges.map((c) => (
                <li key={c} className="flex gap-3 text-sm leading-relaxed text-text-600">
                  <ChallengeIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
          </IcCard>
          <IcCard className="h-full border-navy-900/15 bg-navy-900/[0.03]">
            <div className="flex items-center gap-2">
              <OutcomeIcon className="h-4 w-4 text-navy-900" aria-hidden />
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-navy-900">
                Outcomes
              </p>
            </div>
            <ul className="mt-4 space-y-3">
              {content.outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-sm leading-relaxed text-text-600">
                  <OutcomeIcon className="mt-0.5 h-4 w-4 shrink-0 text-navy-900" aria-hidden />
                  {o}
                </li>
              ))}
            </ul>
          </IcCard>
        </div>
      </SectionShell>

      {/* Deliverables */}
      <SectionShell
        tone="navyLight"
        eyebrow="Deliverables"
        title="Artifacts you keep"
        lead="Concrete outputs — blueprints, IaC, runbooks — so the engagement does not vanish into slideware."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {content.deliverables.map((d, i) => {
            const Icon = pickIcon(i + 4);
            return (
              <IcCard key={d.title} interactive className="h-full">
                <div className="flex items-center gap-3">
                  <IcIconTile size="sm">
                    <Icon className="h-4 w-4" aria-hidden />
                  </IcIconTile>
                  <p className="font-mono text-xs text-orange-500">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-600">{d.body}</p>
              </IcCard>
            );
          })}
        </div>
      </SectionShell>

      {/* Approach steps */}
      <SectionShell
        tone="white"
        eyebrow="How we deliver"
        title={content.approachTitle}
        lead={content.approachLead}
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {content.approach.map((step, i) => {
            const Icon = pickIcon(i + 10);
            return (
              <IcCard key={step.title} interactive className="h-full">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-semibold text-white">
                    {i + 1}
                  </div>
                  <IcIconTile size="sm">
                    <Icon className="h-4 w-4" aria-hidden />
                  </IcIconTile>
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-600">{step.body}</p>
              </IcCard>
            );
          })}
        </div>
        {cmsBodyHtml ? (
          <IcCard className="mt-8">
            <h3 className="font-display text-lg font-semibold text-navy-900">
              Approach detail
            </h3>
            <div className="mt-3">
              <RichHtml html={cmsBodyHtml} />
            </div>
          </IcCard>
        ) : null}
      </SectionShell>

      {/* Architecture visual */}
      <SectionShell
        tone="navyLight"
        eyebrow="Architecture lens"
        title={content.architectureTitle}
        lead={content.architectureLead}
        aside={
          <IcCard className="overflow-hidden p-4 sm:p-6">
            <ServiceSlugMark slug={content.slug} className="h-auto w-full" />
          </IcCard>
        }
      >
        <p className="max-w-xl text-sm leading-relaxed text-text-600">
          The visual orients the conversation. Blueprints, IaC modules, and runbooks are the
          durable artifacts your team keeps after the engagement.
        </p>
      </SectionShell>

      {/* Use cases */}
      <SectionShell
        tone="white"
        eyebrow="Use cases"
        title="How teams apply this service"
        lead="Illustrative scenarios based on common engagement shapes — your path is scoped in assessment."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {content.useCases.map((u, i) => {
            const Icon = pickIcon(i + 16);
            return (
              <IcCard key={u.title} interactive className="flex h-full flex-col">
                <IcIconTile size="sm">
                  <Icon className="h-4 w-4" aria-hidden />
                </IcIconTile>
                <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">{u.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-600">{u.body}</p>
                <p className="mt-5 border-t border-border-200 pt-4 text-sm font-medium text-navy-900">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-orange-500">
                    <Package className="h-3.5 w-3.5" aria-hidden />
                    Outcome
                  </span>
                  <span className="mt-1.5 block">{u.outcome}</span>
                </p>
              </IcCard>
            );
          })}
        </div>
      </SectionShell>

      <StackToolsSection items={content.stack} />

      {/* FAQ */}
      <SectionShell
        tone="white"
        eyebrow="FAQ"
        title={`Questions about ${title}`}
        lead="Straight answers on scope, ownership, and how engagements usually run."
      >
        <IcCard className="p-2 sm:p-4">
          <Accordion type="single" collapsible>
            {content.faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`faq-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </IcCard>
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
        <div className="container-ic relative grid gap-10 py-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center lg:gap-14 lg:py-20">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/55">
              Next step
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.75rem,3.2vw,2.35rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-white">
              Ready to scope {title.toLowerCase()} for your estate?
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/65">
              Book a free assessment with an engineer, or message us on WhatsApp. Timing is
              confirmed manually — no calendar sync.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/book-demo">
                  Book assessment <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:border-navy-900 hover:text-white"
              >
                <a
                  href={whatsappExpertUrl(t.whatsapp.defaultMessage)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp an expert
                </a>
              </Button>
            </div>
          </div>
          {related.length > 0 ? (
            <div>
              <p className="text-sm font-medium text-white/55">Related services</p>
              <ul className="mt-4 space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to={`/services/${r.slug}`}
                      className="group/card flex items-center justify-between gap-3 rounded-[12px] border border-white/10 bg-white/[0.04] px-4 py-3 transition-[border-color,background-color] duration-500 hover:border-orange-500/40 hover:bg-orange-500/10"
                    >
                      <span>
                        <span className="block font-display text-sm font-semibold text-white">
                          {r.title}
                        </span>
                        <span className="mt-0.5 block text-xs text-white/50">{r.eyebrow}</span>
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-white/40 transition-transform duration-500 group-hover/card:translate-x-1 group-hover/card:text-orange-500" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
