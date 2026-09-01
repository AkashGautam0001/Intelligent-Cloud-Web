import type { ServicePageContent } from "./types";

export const integration: ServicePageContent = {
  slug: "integration",
  title: "Integration",
  eyebrow: "Resilience",
  tagline: "APIs, events, and hybrid sync that keep systems consistent",
  summary:
    "Design integration patterns — APIs, messaging, and sync — so hybrid and multi-cloud estates exchange data reliably without brittle point-to-point spaghetti.",
  iconKey: "integration",
  category: "resilience",
  architectureTitle: "API and event bus between systems",
  architectureLead:
    "Producers and consumers stay loosely coupled through contracts, brokers, and resilience defaults — not brittle point-to-point chains.",
  approachTitle: "Map flows → Choose patterns → Migrate proofs → Observe",
  approachLead:
    "Integration debt clears when patterns are catalogued, contracts are tested, and dead-letter paths are owned.",
  metrics: [
    { label: "Typical engagement", value: "6–14 weeks" },
    { label: "Patterns", value: "API · event · sync" },
    { label: "Reliability", value: "Retries & DLQ" },
    { label: "Visibility", value: "Tracing & contracts" },
  ],
  highlights: [
    {
      title: "API platforms",
      body: "Gateway, versioning, auth, and developer experience for internal and partner APIs.",
    },
    {
      title: "Event-driven paths",
      body: "Topics, queues, and schemas with consumers that can fail independently.",
    },
    {
      title: "Hybrid sync",
      body: "Patterns for on-prem and cloud systems that must stay consistent across sites.",
    },
    {
      title: "Contracts & schemas",
      body: "Explicit payload contracts so breaking changes are caught in CI.",
    },
    {
      title: "Resilience defaults",
      body: "Timeouts, retries, idempotency, and dead-letter handling as standard.",
    },
    {
      title: "Observability",
      body: "Correlation IDs, tracing, and dashboards that show lag and error budgets.",
    },
  ],
  challenges: [
    "Point-to-point integrations that break every release",
    "No owner when a message sits in a queue overnight",
    "Partner APIs without versioning or auth standards",
    "Dual-write bugs between legacy and cloud systems",
    "Incidents where nobody can reconstruct the message path",
  ],
  outcomes: [
    "Integration patterns catalogued and reusable",
    "Clear ownership for producers, brokers, and consumers",
    "Contracts tested in pipelines",
    "Dead-letter and replay procedures exercised",
    "End-to-end visibility for critical flows",
  ],
  deliverables: [
    {
      title: "Integration landscape map",
      body: "Systems, flows, SLAs, and risk hotspots documented with owners.",
    },
    {
      title: "Reference patterns",
      body: "API, event, and sync blueprints with security and resilience defaults.",
    },
    {
      title: "Platform scaffolding",
      body: "Gateway/messaging foundations, schema registry approach, and CI checks.",
    },
    {
      title: "Operate pack",
      body: "DLQ replay, versioning, and incident triage runbooks.",
    },
  ],
  approach: [
    {
      title: "Map critical flows",
      body: "Document systems, SLAs, and failure modes with application and operations owners.",
    },
    {
      title: "Choose API vs event patterns",
      body: "Select patterns per flow — not one hammer for every nail — and freeze contracts.",
    },
    {
      title: "Migrate proof flows",
      body: "Implement platform pieces and migrate one or two high-value flows as proof.",
    },
    {
      title: "Observe & own the bus",
      body: "Enable tracing, error budgets, DLQ replay, and a change process for schemas.",
    },
  ],
  stack: [
    "Azure API Management",
    "Amazon API Gateway",
    "Service Bus / Event Grid / SNS·SQS",
    "Kafka / Event Hubs",
    "Logic Apps / Step Functions",
    "OpenAPI / AsyncAPI",
    "Terraform",
  ],
  useCases: [
    {
      title: "Partner API productization",
      body: "A business unit exposed ad-hoc APIs to partners. We introduced a gateway, versions, and auth standards.",
      outcome: "Safer partner onboarding with usage visibility.",
    },
    {
      title: "Order flow eventing",
      body: "Order updates were synchronous chains that failed loudly. We moved to events with idempotent consumers.",
      outcome: "Partial outages no longer blocked the entire chain.",
    },
    {
      title: "Hybrid ERP sync",
      body: "Cloud CRM and on-prem ERP drifted. We designed a sync path with conflict rules and monitoring.",
      outcome: "Measurable lag SLAs and fewer manual reconciliations.",
    },
  ],
  related: ["analytics", "networking", "disaster-recovery"],
};
