import type { ResourcePageContent } from "./types";

export const documentation: ResourcePageContent = {
  slug: "documentation",
  title: "Documentation",
  eyebrow: "Resources",
  tagline: "Guides for platforms, delivery, and day-two operations",
  summary:
    "Onboarding notes, landing-zone patterns, GitOps delivery, and operate runbooks — published articles for teams working with Intelligent Cloud. Engagement-specific packs still ship inside your project.",
  metrics: [
    { label: "Areas", value: "Start · Platform · Operate" },
    { label: "Format", value: "Guides + articles" },
    { label: "Source", value: "Published from admin" },
    { label: "Audience", value: "Builders & operators" },
  ],
  highlights: [
    {
      title: "Getting started",
      body: "How engagements begin, what access we need, and how environments are scoped before build.",
    },
    {
      title: "Platform guides",
      body: "Landing zones, Kubernetes, GitOps, and Terraform patterns we reuse across Azure and AWS.",
    },
    {
      title: "Operate",
      body: "Runbooks, change windows, and how to work with managed operations without tribal knowledge.",
    },
    {
      title: "Security baselines",
      body: "Identity, policy, and evidence notes that pair with our security engagements.",
    },
    {
      title: "Migration playbooks",
      body: "Wave planning, cutover checklists, and hypercare patterns written for practitioners.",
    },
    {
      title: "Engagement packs",
      body: "Customer-specific architecture and runbooks still live in your repos — this library is the public baseline.",
    },
  ],
  principles: [
    {
      title: "Practical over encyclopedic",
      body: "Docs should help you ship or operate today — not mirror a cloud vendor’s entire catalog.",
    },
    {
      title: "Version with delivery",
      body: "Patterns evolve with IaC modules. Articles note assumptions so you know when to ask for an update.",
    },
    {
      title: "No empty shelves",
      body: "We only list published categories and articles — placeholders never pad the library.",
    },
    {
      title: "Ask when stuck",
      body: "If a guide does not cover your estate, open support or book an assessment rather than guessing.",
    },
  ],
  faqs: [
    {
      question: "Why is the library empty sometimes?",
      answer:
        "Articles appear only after they are published from admin. Until then you still get the overview and can contact us for engagement-specific runbooks.",
    },
    {
      question: "Are these a substitute for SOW deliverables?",
      answer:
        "No. Public docs are baselines. Your blueprints, IaC, and runbooks are delivered inside the engagement.",
    },
    {
      question: "Can partners reuse these guides?",
      answer:
        "Yes for enablement. Co-branded or customer-specific packs need a partner or delivery agreement.",
    },
  ],
  ctaTitle: "Need a guide that is not published yet?",
  ctaLead: "Ask support for an existing customer, or book an assessment if you are scoping new work.",
  ctaPrimary: { label: "Open support", to: "/support" },
  ctaSecondary: { label: "Book assessment", to: "/book-demo" },
};

export const faq: ResourcePageContent = {
  slug: "faq",
  title: "FAQ",
  eyebrow: "Resources",
  tagline: "Direct answers on engagement, platforms, and operations",
  summary:
    "How assessments work, what we build on Azure and AWS, and how managed operations actually run — without a sales script. Browse static answers below; CMS-published FAQs appear when available.",
  metrics: [
    { label: "Themes", value: "Engage · Platform · Ops" },
    { label: "Tone", value: "Direct" },
    { label: "Depth", value: "Pre-sales + deliver" },
    { label: "Next step", value: "Support or assessment" },
  ],
  highlights: [
    {
      title: "Engagements",
      body: "Assessments, pilots, SOWs, RACI, and how success criteria get written before build accelerates.",
    },
    {
      title: "Platforms",
      body: "Landing zones, AKS/EKS, GitOps, and Terraform — what is default vs scoped separately.",
    },
    {
      title: "Operations",
      body: "SLOs, on-call, change windows, and incident flow under managed operations.",
    },
    {
      title: "Commercials",
      body: "How we price outcomes, what is in a pilot, and when managed coverage starts.",
    },
  ],
  principles: [
    {
      title: "Answer the real question",
      body: "We prefer a clear “it depends — here’s on what” over vague marketing language.",
    },
    {
      title: "Separate sales from support",
      body: "FAQ is for understanding. Production issues for customers go through Support tiers.",
    },
    {
      title: "Keep answers fresh",
      body: "CMS FAQs can extend this page. Static answers cover the questions we hear before demos.",
    },
    {
      title: "Point to the right door",
      body: "If the answer is “book time,” we link assessment or contact instead of inventing false certainty.",
    },
  ],
  faqs: [
    {
      question: "How does a free assessment work?",
      answer:
        "You share a preferred time on Book demo. We confirm manually, then spend ~30 minutes with an engineer on your workload and options. No live calendar sync.",
    },
    {
      question: "Do you only work on Azure?",
      answer:
        "No. Azure and AWS are both first-class. Kubernetes estates across clouds are common when that matches your strategy.",
    },
    {
      question: "What is included in a typical pilot?",
      answer:
        "A thin vertical slice — foundation or delivery path plus one representative workload — with written success criteria. Expansion happens after the pilot is operable.",
    },
    {
      question: "How is managed operations different from break/fix?",
      answer:
        "Managed ops assumes agreed SLOs, runbooks, and monitoring. Break/fix is reactive. We will not pretend coverage exists without a contract and baselines.",
    },
    {
      question: "Will our team own the IaC?",
      answer:
        "Yes. Code lives in your repos with CI. We document modules and hand over operate guides so routine changes do not require us.",
    },
    {
      question: "Where should I go for a production incident?",
      answer:
        "Existing customers: open a Support ticket with the correct tier. New prospects: Contact sales or Book assessment — Support is not a free consulting channel.",
    },
  ],
  ctaTitle: "Still stuck?",
  ctaLead: "Open a support ticket if you are a customer, or book an assessment to scope new work.",
  ctaPrimary: { label: "Open support", to: "/support" },
  ctaSecondary: { label: "Book assessment", to: "/book-demo" },
};

export const support: ResourcePageContent = {
  slug: "support",
  title: "Support",
  eyebrow: "Resources",
  tagline: "Standard, managed, and priority tiers with a clear ticket path",
  summary:
    "Choose a tier, open a ticket with environment and impact context, and we triage before acting — so change windows stay protected. For new scopes or sales, use Contact or Book assessment instead.",
  metrics: [
    { label: "Tiers", value: "STD · OPS · PRI" },
    { label: "Flow", value: "Open → Close" },
    { label: "Routing", value: "By selected tier" },
    { label: "Sales path", value: "Contact / Book" },
  ],
  highlights: [
    {
      title: "Standard Support",
      body: "Business-hours help for setup, configuration, and how-to questions on active engagements.",
    },
    {
      title: "Managed Operations (24×7)",
      body: "Monitoring and incident response for production estates under an operations agreement.",
    },
    {
      title: "Priority Support",
      body: "Named escalation and response targets for complex or multi-team estates.",
    },
    {
      title: "Ticket hygiene",
      body: "Environment, severity, blast radius, and recent changes — so triage is not a guessing game.",
    },
  ],
  principles: [
    {
      title: "Triage before change",
      body: "We confirm impact and windows before touching production — speed without recklessness.",
    },
    {
      title: "Tier tells the queue",
      body: "Your selection routes the ticket. Managed and priority assume an active agreement.",
    },
    {
      title: "Close with follow-ups",
      body: "Resolution includes documented actions so the same incident class does not return quietly.",
    },
    {
      title: "Wrong door? We’ll redirect",
      body: "New projects and commercials go to sales paths — support stays for contracted help.",
    },
  ],
  faqs: [
    {
      question: "Can I use Priority without a contract?",
      answer:
        "No. Priority and managed tiers require an active agreement. Standard may still help for limited how-to questions on active projects.",
    },
    {
      question: "What should I include in a ticket?",
      answer:
        "Environment, severity, user/business impact, recent changes, and any error text or dashboards. Screenshots help.",
    },
    {
      question: "Is WhatsApp a support channel?",
      answer:
        "WhatsApp is for quick expert/sales scope chats. Production incidents should go through this ticket form for auditability.",
    },
  ],
  ctaTitle: "Looking for a new engagement instead?",
  ctaLead: "Migrations, platforms, and partnerships start on Contact or Book assessment — not the support queue.",
  ctaPrimary: { label: "Contact sales", to: "/contact" },
  ctaSecondary: { label: "Book assessment", to: "/book-demo" },
};

export const privacy: ResourcePageContent = {
  slug: "privacy",
  title: "Privacy Policy",
  eyebrow: "Resources",
  tagline: "How we collect, use, and protect information you share",
  summary:
    "This policy covers the Intelligent Cloud website and related inquiries. Engagement data under a signed SOW or NDA is also governed by those agreements.",
  metrics: [
    { label: "Last updated", value: "August 14, 2026" },
    { label: "Scope", value: "Site + inquiries" },
    { label: "Sales of data", value: "Never" },
    { label: "Requests", value: "privacy@" },
  ],
  highlights: [
    {
      title: "What we collect",
      body: "Contact details from forms, first-party usage analytics (page views, unique visitor ID, approximate country), support ticket context, and engagement data under separate terms.",
    },
    {
      title: "How we use it",
      body: "To respond, operate website analytics, improve the site, send optional updates, and route support tickets.",
    },
    {
      title: "Analytics",
      body: "We measure visits and unique visitors for internal reporting. Optional third-party tools (e.g. GA/Clarity) may also run when configured — we do not sell personal data.",
    },
    {
      title: "Sharing",
      body: "Only with providers needed to operate (hosting, email, analytics) under confidentiality — we do not sell personal data.",
    },
    {
      title: "Your rights",
      body: "Request access, correction, or deletion via privacy@intelligent-cloud.com. Clearing browser storage resets the anonymous visitor ID.",
    },
  ],
  principles: [
    {
      title: "Least privilege",
      body: "Access to personal data is limited to staff who need it for the stated purpose.",
    },
    {
      title: "Separate engagement terms",
      body: "SOW/NDA obligations sit alongside this policy for delivery work.",
    },
    {
      title: "Transparent changes",
      body: "Material policy updates are posted here with a revised date.",
    },
    {
      title: "Security aligned to practice",
      body: "We apply the same cloud security instincts we implement for clients — encrypted transit where applicable and controlled access.",
    },
  ],
  faqs: [
    {
      question: "Do you sell personal data?",
      answer: "No. We do not sell personal data.",
    },
    {
      question: "Do you collect website analytics?",
      answer:
        "Yes. We collect limited first-party analytics (page views, an anonymous visitor ID in your browser, referrer, and approximate country) to measure traffic. Optional third-party tools may also run when configured. We do not sell this data.",
    },
    {
      question: "How do I request deletion?",
      answer:
        "Email privacy@intelligent-cloud.com with enough detail for us to locate your records. We may need to retain limited data for legal or contractual reasons. Clearing browser storage resets the anonymous visitor ID.",
    },
    {
      question: "Does this cover customer cloud estates?",
      answer:
        "Customer environments under delivery are governed by the SOW/NDA and cloud account ownership. This policy focuses on website and inquiry data.",
    },
  ],
  ctaTitle: "Questions about privacy?",
  ctaLead: "Email privacy@intelligent-cloud.com, or contact sales for commercial/contract topics.",
  ctaPrimary: { label: "Contact sales", to: "/contact" },
  ctaSecondary: { label: "Read terms", to: "/terms" },
};

export const terms: ResourcePageContent = {
  slug: "terms",
  title: "Terms & Conditions",
  eyebrow: "Resources",
  tagline: "Website and engagement terms — SOWs still win for paid work",
  summary:
    "These terms apply when you use the Intelligent Cloud website or engage our consulting and managed services. Signed statements of work and MSAs take precedence for paid engagements.",
  metrics: [
    { label: "Last updated", value: "August 14, 2026" },
    { label: "Website copy", value: "Illustrative" },
    { label: "Paid work", value: "SOW / MSA first" },
    { label: "Contact", value: "legal@" },
  ],
  highlights: [
    {
      title: "Services",
      body: "Cloud consulting, managed services, migration, platform engineering, security baselines, and operations as described on the site or in a signed SOW.",
    },
    {
      title: "Engagement terms",
      body: "Scope, pricing, timelines, and deliverables live in signed agreements — website copy is not a binding quote.",
    },
    {
      title: "Website analytics",
      body: "We collect limited usage data (page views, anonymous visitor ID, approximate country) for analytics as described in the Privacy Policy.",
    },
    {
      title: "Intellectual property",
      body: "Site content and branding belong to Intelligent Cloud. Client code, configs, and data remain the client’s.",
    },
    {
      title: "Confidentiality",
      body: "Engagement information is confidential and may be covered by a separate NDA.",
    },
  ],
  principles: [
    {
      title: "SOW precedence",
      body: "If a signed agreement conflicts with this page, the signed agreement controls for that engagement.",
    },
    {
      title: "Professional care",
      body: "We perform services professionally; liability limits for indirect damages are set in individual agreements.",
    },
    {
      title: "Honest marketing",
      body: "Site descriptions illustrate capabilities. They do not replace scoping.",
    },
    {
      title: "Clear contact",
      body: "Legal questions go to legal@intelligent-cloud.com.",
    },
  ],
  faqs: [
    {
      question: "Is the website a contract?",
      answer:
        "No. It describes services. Binding terms for paid work are in your SOW/MSA.",
    },
    {
      question: "Who owns deliverables?",
      answer:
        "Unless otherwise agreed in writing, client-owned code, configs, and data remain yours. Our pre-existing IP and site content remain ours.",
    },
    {
      question: "Which law applies?",
      answer:
        "Governing law follows the contracting entity’s jurisdiction as stated in the signed agreement, without conflict-of-law detours when the SOW specifies otherwise.",
    },
  ],
  ctaTitle: "Need a commercial discussion?",
  ctaLead: "Contact sales for partnerships and proposals, or email legal@ for terms questions.",
  ctaPrimary: { label: "Contact sales", to: "/contact" },
  ctaSecondary: { label: "Privacy policy", to: "/privacy" },
};
