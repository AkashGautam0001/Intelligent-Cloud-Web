import type { SolutionPageContent } from "./types";

export const cloudMigration: SolutionPageContent = {
  slug: "cloud-migration",
  title: "Cloud Migration",
  eyebrow: "By outcome",
  tagline: "Move with clear cutover plans — not a risky big-bang weekend",
  summary:
    "Wave planning, dependency mapping, hybrid connectivity, and rehearsed cutovers so workloads land on Azure or AWS with operable day-two ownership and FinOps visibility.",
  iconKey: "cloud-migration",
  kind: "outcome",
  pillar: "migration",
  audiences: ["both"],
  ctaLabel: "Plan your migration",
  ctaTo: "/book-demo",
  architectureTitle: "Waves, landing zone, and cutover path",
  architectureLead:
    "Workloads move in sequenced waves onto a prepared foundation — with rollback criteria written before the cutover window opens.",
  approachTitle: "Discover → Wave plan → Rehearse → Cut over",
  approachLead:
    "Migrations fail on unknowns. We inventory dependencies first, prove the path in non-prod, then execute with measured downtime.",
  metrics: [
    { label: "Typical engagement", value: "8–20 weeks" },
    { label: "Pattern", value: "Wave-based move" },
    { label: "Cutover style", value: "Rehearsed" },
    { label: "Day two", value: "Operate + FinOps" },
  ],
  highlights: [
    {
      title: "Dependency & readiness maps",
      body: "Application, data, identity, and network dependencies ranked by risk before any wave is scheduled.",
    },
    {
      title: "Landing-zone prerequisites",
      body: "Identity, network, logging, and policy baselines ready so migrated workloads do not land in a vacuum.",
    },
    {
      title: "Wave factory",
      body: "Repeatable migrate → validate → operate loops with clear exit criteria per wave.",
    },
    {
      title: "Cutover runbooks",
      body: "Timed steps, owners, rollback triggers, and communications for the change window.",
    },
    {
      title: "Hybrid bridging",
      body: "Connectivity and DNS patterns that keep on-prem and cloud coherent during the transition.",
    },
    {
      title: "Post-move FinOps",
      body: "Rightsizing, tagging, and showback so the bill does not surprise finance after go-live.",
    },
  ],
  challenges: [
    "Inventory that understates coupling between apps and data stores",
    "Landing zones unfinished when the first wave is already booked",
    "Cutover plans that exist only as slides",
    "No rollback criteria — only forward pressure",
    "Cost growth after move with no ownership for rightsizing",
  ],
  outcomes: [
    "Prioritized wave backlog with owners and risk scores",
    "At least one rehearsed cutover with measured downtime",
    "Workloads on a governed foundation with observability",
    "Documented hybrid paths during transition",
    "FinOps baseline for the migrated estate",
  ],
  deliverables: [
    {
      title: "Migration assessment pack",
      body: "Inventory, 6R recommendations, risk register, and proposed wave sequence.",
    },
    {
      title: "Target architecture per wave",
      body: "Compute, data, network, and identity placement with IaC hooks.",
    },
    {
      title: "Cutover & rollback runbooks",
      body: "Minute-by-minute plans with decision authority and communication templates.",
    },
    {
      title: "Hypercare handoff",
      body: "Stabilization checklist, alert routing, and operate ownership map.",
    },
  ],
  approach: [
    {
      title: "Discover & score risk",
      body: "Inventory apps, data, and integrations; score move complexity with application owners.",
    },
    {
      title: "Plan waves & prerequisites",
      body: "Sequence waves against landing-zone readiness and business change windows.",
    },
    {
      title: "Rehearse the path",
      body: "Migrate a pilot, time the cutover, and fix gaps before production waves.",
    },
    {
      title: "Cut over & stabilize",
      body: "Execute with hypercare, then rightsizing and FinOps reviews.",
    },
  ],
  stack: [
    "Azure Migrate / AWS Migration Hub",
    "Terraform / Bicep",
    "DMS / ADF",
    "ExpressRoute / Direct Connect",
    "Azure Monitor / CloudWatch",
    "FinOps tags & budgets",
  ],
  useCases: [
    {
      title: "Datacenter exit in waves",
      body: "A lease end forced a multi-year estate into a sequenced exit. We prepared the landing zone, then moved low-risk waves first to prove the factory.",
      outcome: "On-schedule exit with documented cutovers and no emergency big-bang.",
    },
    {
      title: "Regulated app move",
      body: "A financial workload needed private connectivity and evidence for auditors during migration.",
      outcome: "Rehearsed cutover under the approved window with control evidence retained.",
    },
    {
      title: "Hybrid coexistence year",
      body: "Not everything could move at once. We designed DNS and network bridging for a 12-month coexistence period.",
      outcome: "Stable hybrid path while remaining waves completed.",
    },
  ],
  faqs: [
    {
      question: "Do you only do lift-and-shift?",
      answer:
        "No. We recommend 6R actions per workload — rehost, replatform, or refactor when the business case is clear — instead of one pattern for everything.",
    },
    {
      question: "How do you limit downtime?",
      answer:
        "Through dependency clarity, data sync strategies, and timed rehearsals. Exact downtime depends on the application; we write the number before cutover, not after.",
    },
    {
      question: "What if our landing zone is incomplete?",
      answer:
        "We sequence foundation work ahead of or beside early waves. Moving into an unfinished platform is how migrations create permanent debt.",
    },
  ],
  related: ["devops-transformation", "enterprises", "security-compliance"],
};
