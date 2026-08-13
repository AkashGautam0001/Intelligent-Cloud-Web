import type { ServicePageContent } from "./types";

export const analytics: ServicePageContent = {
  slug: "analytics",
  title: "Analytics",
  eyebrow: "Data & AI",
  tagline: "Pipelines for decision-ready insight — governed, observable, and owned",
  summary:
    "Build ingestion, transformation, and serving layers that turn operational data into trusted dashboards and products — with lineage and quality checks built in.",
  iconKey: "analytics",
  category: "data",
  architectureTitle: "Ingest → transform → serve pipeline",
  architectureLead:
    "Sources feed a governed transform layer; curated models serve BI and products with freshness and quality checks on the critical path.",
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
      title: "Ingestion patterns",
      body: "Batch and streaming paths with clear contracts for source system owners.",
    },
    {
      title: "Lakehouse / warehouse design",
      body: "Medallion or dimensional models that scale without becoming a swamp.",
    },
    {
      title: "Transformation as code",
      body: "dbt or equivalent with tests, documentation, and CI for model changes.",
    },
    {
      title: "Serving & BI",
      body: "Semantic layers and dashboard standards so metrics mean one thing.",
    },
    {
      title: "Governance basics",
      body: "Cataloguing, access roles, and PII handling that security can defend.",
    },
    {
      title: "Pipeline observability",
      body: "Freshness, failure alerts, and cost per pipeline visible to owners.",
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
      body: "Source map, target architecture, and domain onboarding path.",
    },
    {
      title: "Pipeline foundation",
      body: "Ingest and transform scaffolding with CI, secrets, and environments.",
    },
    {
      title: "Semantic / BI starter",
      body: "Core metrics and reference dashboards with documentation.",
    },
    {
      title: "Operate pack",
      body: "Runbooks for failed jobs, late sources, and access requests.",
    },
  ],
  approach: [
    {
      title: "Inventory decisions & sources",
      body: "Map sources, critical decisions, and the metric disputes costing the most trust.",
    },
    {
      title: "Design the analytics platform",
      body: "Agree architecture, ownership, and the first domain slice to prove the platform.",
    },
    {
      title: "Ship the first domain",
      body: "Deliver ingest → transform → serve for that slice with tests and dashboards.",
    },
    {
      title: "Enable self-serve onboarding",
      body: "Enable freshness monitoring and a domain onboarding checklist for the next teams.",
    },
  ],
  stack: [
    "Azure Data Factory / Synapse",
    "AWS Glue / Redshift",
    "Databricks / Spark",
    "dbt",
    "Power BI / QuickSight",
    "Terraform",
    "Great Expectations / dbt tests",
  ],
  useCases: [
    {
      title: "Finance metric alignment",
      body: "FP&A and ops reported different revenue figures. We established a governed semantic layer and pipeline tests.",
      outcome: "One revenue definition across executive dashboards.",
    },
    {
      title: "Operational lakehouse",
      body: "A logistics team needed near-real-time operational views from multiple systems.",
      outcome: "Streaming ingest with freshness alerts under an agreed SLA.",
    },
    {
      title: "Self-serve domain onboarding",
      body: "Central data team was a bottleneck. We packaged a domain starter kit with CI and access patterns.",
      outcome: "New domains onboard without rebuilding the platform.",
    },
  ],
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
        "Classification, column-level or row-level controls where supported, and clear separation of raw vs curated access.",
    },
  ],
  related: ["ai", "database", "integration"],
};
