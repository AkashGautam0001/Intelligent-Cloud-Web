import type { ServicePageContent } from "./types";

export const storage: ServicePageContent = {
  slug: "storage",
  title: "Storage",
  eyebrow: "Platforms",
  tagline: "Object, block, and lifecycle policies that keep data available and affordable",
  summary:
    "Design storage tiers, retention, and access patterns across Azure and AWS so performance, durability, and cost stay intentional — not accidental.",
  iconKey: "storage",
  category: "platforms",
  architectureTitle: "Hot → cool → archive tiering",
  architectureLead:
    "A deliberate tier map with lifecycle automation — so capacity, egress, and retrieval SLAs stay intentional instead of accidental.",
  approachTitle: "Classify → Tier → Automate → Prove restores",
  approachLead:
    "We design storage around data classes and risk, then prove restore and access paths before declaring the work done.",
  metrics: [
    { label: "Typical engagement", value: "4–10 weeks" },
    { label: "Focus areas", value: "Tiers & lifecycle" },
    { label: "Compliance", value: "Retention & immutability" },
    { label: "Access model", value: "Private by default" },
  ],
  highlights: [
    {
      title: "Tier strategy",
      body: "Hot, cool, archive, and infrequent-access mappings tied to real access patterns — not guesswork.",
    },
    {
      title: "Lifecycle automation",
      body: "Policies that move and expire data on schedule with audit trails for compliance teams.",
    },
    {
      title: "Secure access",
      body: "Private endpoints, SAS/presigned hygiene, and identity-based access instead of long-lived keys.",
    },
    {
      title: "Backup & immutability",
      body: "WORM/immutable options and restore drills for ransomware-resilient copies.",
    },
    {
      title: "Performance baselines",
      body: "IOPS, throughput, and latency targets for block and file workloads before cutover.",
    },
    {
      title: "Cost visibility",
      body: "Egress, API, and capacity forecasts so finance sees the storage bill before it surprises anyone.",
    },
  ],
  challenges: [
    "Everything stuck in hot tier with rising monthly spend",
    "Shared keys and public endpoints still in production paths",
    "No clear retention owner when auditors ask for proof",
    "Restore untested until an incident forces the issue",
    "File and object estates grown without naming or tagging standards",
  ],
  outcomes: [
    "Documented tier map per data class with automated lifecycle",
    "Private access patterns as the default for production stores",
    "Immutable or WORM copies where ransomware risk is material",
    "Restore runbooks exercised on a defined cadence",
    "Showback that separates capacity from egress and API cost",
  ],
  deliverables: [
    {
      title: "Data classification matrix",
      body: "Classes, RPO/retention, encryption, and access owners agreed with security and data stewards.",
    },
    {
      title: "Storage architecture",
      body: "Account/bucket layout, networking, and replication choices with IaC modules.",
    },
    {
      title: "Lifecycle & policy pack",
      body: "Rules for transition, delete, and legal hold with monitoring on policy failures.",
    },
    {
      title: "Restore drill report",
      body: "Timed restore of a critical dataset with gaps and remediation logged.",
    },
  ],
  approach: [
    {
      title: "Classify the data",
      body: "Inventory stores, access paths, and the top cost or risk drivers in the last 90 days.",
    },
    {
      title: "Design the tiers",
      body: "Define hot/cool/archive, retention, and network boundaries per data class before moving bytes.",
    },
    {
      title: "Automate lifecycle",
      body: "Implement accounts/buckets, policies, and private connectivity with pipeline-managed config.",
    },
    {
      title: "Prove restores",
      body: "Hand over dashboards, exception process, and timed restore drills for critical datasets.",
    },
  ],
  stack: [
    "Azure Blob / Files",
    "AWS S3 / EBS / EFS",
    "Private Link / PrivateLink",
    "Terraform",
    "Immutability / Object Lock",
    "Azure Backup",
    "AWS Backup",
  ],
  useCases: [
    {
      title: "Media archive cost cut",
      body: "A content platform kept years of assets in hot storage. We introduced lifecycle to cool/archive with retrieval SLAs for editorial.",
      outcome: "Material monthly savings without breaking retrieval workflows.",
    },
    {
      title: "Private data lake landing",
      body: "Analytics needed a secure object landing zone with encryption, logging, and no public endpoints.",
      outcome: "Pipelines ingest via private paths with auditable access.",
    },
    {
      title: "Ransomware-ready backups",
      body: "An ops team had backups but no immutability or restore proof. We enabled locked retention and ran restore drills.",
      outcome: "Documented restore times for the top three critical systems.",
    },
  ],
  faqs: [
    {
      question: "Can you migrate data between clouds or on-prem?",
      answer:
        "Yes. We plan bandwidth, tools, and cutover windows carefully — especially for large archives — and validate integrity after transfer.",
    },
    {
      question: "Do you replace our backup product?",
      answer:
        "Not by default. We often integrate existing backup/DR tools with cloud-native stores and strengthen immutability and restore practice.",
    },
    {
      question: "How do you handle compliance retention?",
      answer:
        "We map legal/regulatory retention to policy, enable holds where needed, and leave evidence trails for auditors.",
    },
  ],
  related: ["cloud-computing", "disaster-recovery", "database"],
};
