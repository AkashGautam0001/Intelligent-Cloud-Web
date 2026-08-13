import type { ServicePageContent } from "./types";

export const database: ServicePageContent = {
  slug: "database",
  title: "Database",
  eyebrow: "Platforms",
  tagline: "Managed data tiers and migrations with clear RPO, performance, and ownership",
  summary:
    "Plan and deliver managed databases, migrations, and day-two operations so data platforms stay available, secure, and cost-aware as workloads grow.",
  iconKey: "database",
  category: "platforms",
  architectureTitle: "Managed data tiers with HA and private access",
  architectureLead:
    "Engine choice, zone resilience, and private connectivity drawn against your RPO/RTO — before any cutover window is booked.",
  approachTitle: "Profile → Select → Migrate → Harden day two",
  approachLead:
    "Database moves fail on unknowns. We profile first, rehearse cutover, and leave restore evidence behind.",
  metrics: [
    { label: "Typical engagement", value: "6–16 weeks" },
    { label: "Engines", value: "SQL, Postgres, NoSQL" },
    { label: "Migration style", value: "Online where possible" },
    { label: "Day two", value: "Backups + observability" },
  ],
  highlights: [
    {
      title: "Platform selection",
      body: "Right-size managed SQL, Postgres, Cosmos/Dynamo, and in-memory options to workload shape.",
    },
    {
      title: "Secure by default",
      body: "Private endpoints, encryption, least-privilege roles, and secrets outside connection strings.",
    },
    {
      title: "Migration playbooks",
      body: "Assessment, schema/data move, cutover, and rollback with measured downtime windows.",
    },
    {
      title: "Performance baselining",
      body: "Query and resource baselines before and after move so regressions are visible.",
    },
    {
      title: "HA & backups",
      body: "Multi-AZ/zone patterns, PITR, and restore drills tied to business RPO/RTO.",
    },
    {
      title: "Operate model",
      body: "Patch windows, capacity reviews, and ownership between app and platform teams.",
    },
  ],
  challenges: [
    "Lift-and-shift of oversized on-prem instances into cloud without rightsizing",
    "Public database endpoints and shared admin credentials",
    "Migrations planned without a tested rollback",
    "Backups that exist but have never been restored",
    "No clear owner for performance regressions after go-live",
  ],
  outcomes: [
    "Managed tiers matched to workload criticality and growth",
    "Private, identity-aware access as the production default",
    "Cutover plans with timed rehearsals",
    "Documented RPO/RTO with restore evidence",
    "Dashboards and alert routing owned by named teams",
  ],
  deliverables: [
    {
      title: "Data platform assessment",
      body: "Inventory, risk, sizing, and target engine recommendations.",
    },
    {
      title: "Target architecture",
      body: "HA, networking, encryption, and IaC for the chosen managed services.",
    },
    {
      title: "Migration runbook",
      body: "Wave plan, tooling, cutover checklist, and rollback criteria.",
    },
    {
      title: "Operate pack",
      body: "Backup policy, restore drill, patching, and capacity review cadence.",
    },
  ],
  approach: [
    {
      title: "Profile workloads",
      body: "Profile engines, dependencies, and change windows with application owners.",
    },
    {
      title: "Select managed targets",
      body: "Choose engines, HA, and access model; freeze cutover constraints and rollback criteria.",
    },
    {
      title: "Migrate with rehearsal",
      body: "Provision targets, migrate non-prod first, then rehearse production cutover against the clock.",
    },
    {
      title: "Harden day two",
      body: "Enable monitoring, restore proof, patching windows, and capacity ownership.",
    },
  ],
  stack: [
    "Azure SQL / Flexible Server",
    "Amazon RDS / Aurora",
    "Cosmos DB / DynamoDB",
    "Private Link",
    "DMS / ADF",
    "Terraform",
    "Query Insights / Performance Insights",
  ],
  useCases: [
    {
      title: "SQL Server to managed Azure SQL",
      body: "An enterprise line-of-business app needed lower ops load without a risky big-bang rewrite.",
      outcome: "Online migration with measured downtime under the agreed window.",
    },
    {
      title: "Postgres rightsizing",
      body: "A SaaS team over-provisioned for peak. We redesigned HA and storage growth with clearer cost controls.",
      outcome: "Stable latency and lower steady-state spend.",
    },
    {
      title: "Multi-region read path",
      body: "A customer-facing API needed regional reads. We introduced replicas and connection routing with failure tests.",
      outcome: "Improved regional latency with documented failover.",
    },
  ],
  faqs: [
    {
      question: "Do you support both relational and NoSQL?",
      answer:
        "Yes. We help choose the right model and operate managed offerings across Azure and AWS — including hybrid estates.",
    },
    {
      question: "Can you migrate with near-zero downtime?",
      answer:
        "Often yes for supported engines, using continuous replication and a short cutover. Exact downtime depends on application coupling and change freezes.",
    },
    {
      question: "Will you tune queries?",
      answer:
        "We baseline and address top offenders with your developers. Deep application rewrite is scoped separately when needed.",
    },
  ],
  related: ["storage", "cloud-computing", "disaster-recovery"],
};
