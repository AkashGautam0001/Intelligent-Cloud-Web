import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CalendarDays, FileText, Scale, Shield } from "lucide-react";
import { privacy as privacyContent, terms as termsContent } from "@/content/resources";
import { ResourceLongForm } from "@/components/resources/ResourceLongForm";
import { IcCard } from "@/components/ui/ic-card";
import { IcIconTile } from "@/components/ui/ic-icon-tile";
import { cn } from "@/lib/utils";

const LAST_UPDATED = "August 5, 2026";

type LegalSection = {
  id: string;
  title: string;
  body: ReactNode;
};

type LegalDocumentProps = {
  kind: "privacy" | "terms";
  intro: ReactNode;
  sections: LegalSection[];
  contactEmail: string;
  contactLabel: string;
  sibling: { label: string; to: string };
};

function LegalDocument({
  kind,
  intro,
  sections,
  contactEmail,
  contactLabel,
  sibling,
}: LegalDocumentProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0]?.target.id;
        if (top) setActiveId(top);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, [sections]);

  return (
    <section className="border-b border-border-200 bg-white">
      <div className="container-ic py-12 lg:py-16">
        <div className="mb-10 flex overflow-hidden rounded-[14px] border border-border-200 bg-[#eef3f8]">
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-3 px-5 py-4 text-sm text-text-600">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-navy-900">
              <CalendarDays className="h-3.5 w-3.5 text-orange-500" aria-hidden />
              Updated {LAST_UPDATED}
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-border-200 sm:inline" />
            <span>
              {kind === "privacy"
                ? "Applies to website and inquiry data"
                : "Website terms — SOWs take precedence"}
            </span>
          </div>
          <Link
            to={sibling.to}
            className="inline-flex shrink-0 items-center gap-1.5 self-stretch border-s border-border-200 bg-white px-5 text-sm font-medium text-navy-900 transition-colors hover:bg-orange-500 hover:text-white"
          >
            {sibling.label}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#6b7a8c]">
              On this page
            </p>
            <nav className="ic-scroll max-h-[min(70vh,28rem)] space-y-0.5 overflow-y-auto pe-2">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={cn(
                    "flex items-start gap-2.5 rounded-[8px] px-2.5 py-2 text-sm transition-colors",
                    activeId === section.id
                      ? "bg-azure-100 font-medium text-navy-900"
                      : "text-text-600 hover:bg-[#eef3f8] hover:text-navy-900",
                  )}
                >
                  <span className="mt-0.5 font-mono text-[10px] text-orange-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-snug">{section.title}</span>
                </a>
              ))}
            </nav>
          </aside>

          <article className="min-w-0">
            <div className="mb-10 rounded-[16px] border border-border-200 bg-[#eef3f8]/70 p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <IcIconTile size="sm">
                  <FileText className="h-4 w-4" aria-hidden />
                </IcIconTile>
                <div className="text-base leading-relaxed text-text-600">{intro}</div>
              </div>
            </div>

            <div className="space-y-0 divide-y divide-border-200 rounded-[16px] border border-border-200 bg-white">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 px-5 py-8 sm:px-8 sm:py-10"
                >
                  <div className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-navy-900 font-mono text-xs text-white"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-navy-900 sm:text-2xl">
                        {section.title}
                      </h2>
                      <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-text-600">
                        {section.body}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 rounded-[14px] border border-orange-500/20 bg-orange-500/[0.04] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <p className="font-display text-base font-semibold text-navy-900">{contactLabel}</p>
                <p className="mt-1 text-sm text-text-600">We respond to legal and privacy requests by email.</p>
              </div>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-500 hover:underline"
              >
                {contactEmail}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

const privacySections: LegalSection[] = [
  {
    id: "collect",
    title: "Information we collect",
    body: (
      <ul className="list-disc space-y-2 ps-5">
        <li>
          Contact information you provide (name, email, phone, company) via forms or demo bookings
        </li>
        <li>Usage data (pages visited, interactions) via analytics tools</li>
        <li>
          Information shared during consulting engagements, handled under separate
          confidentiality/NDA terms where applicable
        </li>
        <li>Support ticket details you submit (subject, environment context, and message body)</li>
      </ul>
    ),
  },
  {
    id: "use",
    title: "How we use your information",
    body: (
      <ul className="list-disc space-y-2 ps-5">
        <li>To respond to inquiries and provide requested services</li>
        <li>To improve our website and service offerings</li>
        <li>To send relevant updates (with opt-out available at any time)</li>
        <li>To route and resolve support tickets according to the selected tier</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Data sharing",
    body: (
      <p>
        We do not sell your personal data. We may share data with service providers (e.g., hosting,
        analytics, email delivery) strictly to operate our business, under confidentiality
        obligations.
      </p>
    ),
  },
  {
    id: "security",
    title: "Data security",
    body: (
      <p>
        We apply industry-standard security practices to protect your information, consistent with
        the same cloud security principles we implement for clients — least privilege, encrypted
        transit where applicable, and access limited to staff who need it.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your rights",
    body: (
      <p>
        You may request access to, correction of, or deletion of your personal data by contacting{" "}
        <a className="font-medium text-orange-500 hover:underline" href="mailto:privacy@intelligent-cloud.com">
          privacy@intelligent-cloud.com
        </a>
        .
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy periodically. Material changes will be posted on this page with an
        updated date.
      </p>
    ),
  },
];

const termsSections: LegalSection[] = [
  {
    id: "services",
    title: "Services",
    body: (
      <p>
        Intelligent Cloud provides cloud consulting, managed services, and related technical
        services as described on this website or in a separate signed agreement/SOW for specific
        engagements — including migration, platform engineering, security baselines, and operations.
      </p>
    ),
  },
  {
    id: "engagement",
    title: "Engagement terms",
    body: (
      <p>
        Specific project scope, pricing, timelines, and deliverables are governed by individually
        signed agreements, which take precedence over general website content. Website copy is
        illustrative and not a binding quote.
      </p>
    ),
  },
  {
    id: "ip",
    title: "Intellectual property",
    body: (
      <p>
        All website content, branding, and documentation are the property of Intelligent Cloud
        unless otherwise stated. Client-owned code, infrastructure configurations, and data remain
        the property of the client.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        Intelligent Cloud will perform services with professional care; however, liability for
        indirect or consequential damages is limited as detailed in individual service agreements.
      </p>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    body: (
      <p>
        Information shared during consulting engagements is treated as confidential and may be
        governed by a separate NDA.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by applicable law in the jurisdiction of the contracting entity,
        without regard to conflict-of-law principles.
      </p>
    ),
  },
];

export function PrivacyPage() {
  return (
    <ResourceLongForm
      content={privacyContent}
      showFaq={false}
      heroVisual={
        <IcCard className="overflow-hidden p-0">
          <div className="relative bg-[linear-gradient(145deg,#04275f_0%,#0a3a7a_55%,#124a8c_100%)] p-6 text-white">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 100% 0%, rgba(242,106,19,0.35), transparent 55%)",
              }}
            />
            <div className="relative">
              <IcIconTile size="lg" className="h-14 w-14 rounded-[14px] bg-white/10 text-orange-500">
                <Shield className="h-7 w-7" aria-hidden />
              </IcIconTile>
              <p className="mt-5 font-display text-lg font-semibold">Privacy Policy</p>
              <p className="mt-2 text-sm text-white/70">Last updated {LAST_UPDATED}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                Website and inquiry data. Engagement work under SOW/NDA is also governed by those
                agreements.
              </p>
            </div>
          </div>
        </IcCard>
      }
    >
      <LegalDocument
        kind="privacy"
        intro={
          <p>
            Intelligent Cloud (“we,” “us,” “our”) respects your privacy. This policy explains what
            information we collect, how we use it, and your rights regarding that information.
            Engagement data under a signed SOW or NDA is governed by those agreements in addition to
            this policy.
          </p>
        }
        sections={privacySections}
        contactEmail="privacy@intelligent-cloud.com"
        contactLabel="Privacy requests"
        sibling={{ label: "Terms of use", to: "/terms" }}
      />
    </ResourceLongForm>
  );
}

export function TermsPage() {
  return (
    <ResourceLongForm
      content={termsContent}
      showFaq={false}
      heroVisual={
        <IcCard className="overflow-hidden p-0">
          <div className="relative bg-[linear-gradient(145deg,#04275f_0%,#0a3a7a_55%,#124a8c_100%)] p-6 text-white">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 100% 0%, rgba(242,106,19,0.35), transparent 55%)",
              }}
            />
            <div className="relative">
              <IcIconTile size="lg" className="h-14 w-14 rounded-[14px] bg-white/10 text-orange-500">
                <Scale className="h-7 w-7" aria-hidden />
              </IcIconTile>
              <p className="mt-5 font-display text-lg font-semibold">Terms of use</p>
              <p className="mt-2 text-sm text-white/70">Last updated {LAST_UPDATED}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                Website terms are illustrative. Signed SOWs and MSAs take precedence for paid
                engagements.
              </p>
            </div>
          </div>
        </IcCard>
      }
    >
      <LegalDocument
        kind="terms"
        intro={
          <p>
            By accessing or using the Intelligent Cloud website or services, you agree to the
            following terms. Signed statements of work and master service agreements take precedence
            for paid engagements.
          </p>
        }
        sections={termsSections}
        contactEmail="legal@intelligent-cloud.com"
        contactLabel="Legal questions"
        sibling={{ label: "Privacy policy", to: "/privacy" }}
      />
    </ResourceLongForm>
  );
}
