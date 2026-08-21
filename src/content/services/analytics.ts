import type { ServicePageContent } from "./types";

export const analytics: ServicePageContent = {
  slug: "analytics",
  title: "Analytics",
  eyebrow: "Decision visibility",
  tagline: "Trusted reporting and insights leaders can act on",
  summary:
    "You need one view of the business — without dashboards that disagree or pipelines only one engineer understands. We build governed ingest, transform, and serve paths so reporting and insights stay fresh, owned, and defensible.",
  iconKey: "analytics",
  category: "data",
  architectureTitle: "Sources → lake / warehouse → insights",
  architectureLead:
    "Data sources ingest into a governed lake or warehouse, then transform into BI dashboards that deliver business insights leaders can trust.",
  approachTitle: "Inventory → Platform design → First domain → Self-serve",
  approachLead:
    "We prove the platform with one high-value domain, then package onboarding so the next teams do not fork the stack.",
  metrics: [
    { label: "Typical engagement", value: "8–16 weeks" },
    { label: "Layers", value: "Ingest → transform → serve" },
    { label: "Quality", value: "Tests + lineage" },
    { label: "Consumers", value: "BI & products" },
  ],
  highlights: [
    {
      title: "Visibility from the source",
      body: "Batch and streaming ingest with clear contracts for source owners — so delays and gaps are visible before meetings discover them.",
    },
    {
      title: "Models that scale without becoming a swamp",
      body: "Lakehouse or warehouse designs that keep curated data usable as domains grow.",
    },
    {
      title: "Transformations you can trust",
      body: "Transformations as code with tests, documentation, and review — so metric changes are intentional.",
    },
    {
      title: "Reporting that means one thing",
      body: "Semantic layers and dashboard standards so revenue, margin, or SLA mean the same across teams.",
    },
    {
      title: "Governance security can defend",
      body: "Cataloguing, access roles, and PII handling that match sensitivity — not open curated lakes.",
    },
    {
      title: "Freshness and cost you can own",
      body: "Failure alerts and cost per pipeline visible to named owners.",
    },
  ],
  problems: [
    {
      title: "Data visibility",
      body: "Leaders cannot see one trusted picture of the business — sources disagree and gaps appear in meetings.",
    },
    {
      title: "Reporting",
      body: "Dashboards conflict because metrics are redefined in each tool — teams argue numbers instead of decisions.",
    },
    {
      title: "Data processing",
      body: "Pipelines are fragile scripts only one engineer understands — failures stall reporting with no clear owner.",
    },
    {
      title: "Business insights",
      body: "Data exists, but curated insight for product, finance, or operations never arrives in time to act.",
    },
    {
      title: "Data-driven decisions",
      body: "Decisions still rely on spreadsheets and anecdotes because freshness and ownership are unclear.",
    },
  ],
  challenges: [
    "Dashboards that disagree because metrics are redefined in each tool",
    "Fragile scripts that only one engineer understands",
    "No freshness SLAs — stakeholders discover stale data in meetings",
    "PII mixed into analytics stores without access controls",
    "Cloud spend rising as every team spins up its own warehouse",
  ],
  outcomes: [
    "Documented metric definitions owned by domain stewards",
    "Pipelines in CI with tests and rollback",
    "Freshness and quality alerts routed to named owners",
    "Access patterns aligned to sensitivity",
    "A platform path that new domains can join without forking everything",
  ],
  deliverables: [
    {
      title: "Analytics blueprint",
      body: "Source map, target architecture, and domain onboarding path — so leadership sees how decisions get reliable data.",
    },
    {
      title: "Pipeline foundation",
      body: "Ingest and transform scaffolding with environments and secrets — so the next domain does not start from a blank script.",
    },
    {
      title: "Trusted metrics starter",
      body: "Core metrics and reference dashboards with documentation — so reporting starts from shared definitions.",
    },
    {
      title: "Operate pack",
      body: "Runbooks for failed jobs, late sources, and access requests — so day-two problems have owners.",
    },
  ],
  approach: [
    {
      title: "Inventory decisions and sources",
      body: "Map sources, critical decisions, and the metric disputes costing the most trust — not every available table.",
    },
    {
      title: "Agree the analytics platform",
      body: "Lock architecture, ownership, and the first domain slice that proves the platform.",
    },
    {
      title: "Ship the first domain",
      body: "Deliver ingest → transform → serve for that slice with tests and dashboards leaders can use.",
    },
    {
      title: "Enable self-serve onboarding",
      body: "Enable freshness monitoring and a domain onboarding checklist so the next teams join cleanly.",
    },
  ],
  stack: [
    "Azure Data Factory / Synapse",
    "AWS Glue / Redshift",
    "Databricks",
    "dbt",
    "Power BI / QuickSight",
    "Terraform",
  ],
  useCases: [],
  faqs: [
    {
      question: "Do you build only warehouses, or lakes too?",
      answer:
        "Both. We pick lakehouse, warehouse, or hybrid based on latency, skills, and cost — not fashion.",
    },
    {
      question: "Can you work with our existing BI tools?",
      answer:
        "Yes. We usually stabilize the data layer and semantic definitions first, then improve dashboard quality on your current stack.",
    },
    {
      question: "How do you handle sensitive data?",
      answer:
        "Classification, column-level or row-level controls where supported, and clear separation of raw versus curated access.",
    },
    {
      question: "How soon do we see usable reporting?",
      answer:
        "Most engagements land one high-value domain with trusted dashboards in the first release wave, then expand domain by domain.",
    },
  ],
  related: ["ai", "database", "integration"],
};
