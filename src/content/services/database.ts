import type { ServicePageContent } from "./types";

export const database: ServicePageContent = {
  slug: "database",
  title: "Database",
  eyebrow: "Data platforms",
  tagline: "Databases that stay fast, available, and operable after go-live",
  summary:
    "You need performance and availability you can trust — without risky migrations or day-two guesswork. We plan managed tiers, cutovers, and operate models so data platforms grow with clear RPO and ownership.",
  iconKey: "database",
  category: "platforms",
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
      title: "Right engine for the workload",
      body: "Managed SQL, Postgres, Cosmos/Dynamo, and in-memory options sized to how the app actually behaves — not a default SKU guess.",
    },
    {
      title: "Secure access as the default",
      body: "Private endpoints, encryption, least-privilege roles, and secrets outside connection strings.",
    },
    {
      title: "Migrations with a real rollback",
      body: "Assessment, data move, cutover, and rollback with measured downtime windows — so go-live is rehearsed, not hoped for.",
    },
    {
      title: "Performance you can compare",
      body: "Query and resource baselines before and after move so regressions are visible to owners.",
    },
    {
      title: "Availability tied to the business",
      body: "Multi-AZ or zone patterns, point-in-time recovery, and restore drills mapped to agreed RPO and RTO.",
    },
    {
      title: "Clear day-two ownership",
      body: "Patch windows, capacity reviews, and handoffs between app and platform teams.",
    },
  ],
  problems: [
    {
      title: "Database performance",
      body: "Queries slow down, resources spike, and nobody has a clear before/after baseline when something changes.",
    },
    {
      title: "Availability",
      body: "Outages or zone failures hurt the business — RPO and RTO exist as slides, not proven recovery.",
    },
    {
      title: "Scalability",
      body: "Growth forces oversized instances or emergency SKU jumps instead of a managed path that scales cleanly.",
    },
    {
      title: "Backup and recovery",
      body: "Backups are configured, but restores are rarely drilled — confidence collapses in a real incident.",
    },
    {
      title: "Database migration",
      body: "Moving engines or platforms feels risky — cutover windows are guessed, and rollback is undefined.",
    },
    {
      title: "Operational complexity",
      body: "Patching, access, and day-two ownership sit between app and platform teams with no clear handoff.",
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
    "Documented RPO and RTO with restore evidence",
    "Dashboards and alert routing owned by named teams",
  ],
  deliverables: [
    {
      title: "Data platform assessment",
      body: "Inventory, risk, sizing, and target recommendations — so you know what to move, what to retire, and what it will cost to run.",
    },
    {
      title: "Target architecture you can defend",
      body: "HA, networking, encryption, and access model agreed with security — ready to provision consistently.",
    },
    {
      title: "Migration runbook",
      body: "Wave plan, tooling, cutover checklist, and rollback criteria — so production windows are predictable.",
    },
    {
      title: "Operate pack",
      body: "Backup policy, restore drill, patching, and capacity review cadence — so day-two work stays owned after we leave.",
    },
  ],
  approach: [
    {
      title: "Profile the problem",
      body: "Profile engines, dependencies, and change windows with application owners — focused on risk and performance, not tool catalogues.",
    },
    {
      title: "Agree managed targets",
      body: "Choose engines, HA, and access model; freeze cutover constraints and rollback criteria early.",
    },
    {
      title: "Migrate with rehearsal",
      body: "Provision targets, migrate non-prod first, then rehearse production cutover against the clock.",
    },
    {
      title: "Harden day two",
      body: "Enable monitoring, restore proof, patching windows, and capacity ownership with your teams.",
    },
  ],
  stack: [
    "Azure SQL / Flexible Server",
    "Amazon RDS / Aurora",
    "Cosmos DB / DynamoDB",
    "Private Link",
    "DMS / ADF",
    "Terraform",
  ],
  useCases: [],
  related: ["storage", "cloud-computing", "disaster-recovery"],
};
