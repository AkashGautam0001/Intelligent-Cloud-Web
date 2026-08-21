import type { ServicePageContent } from "./types";

export const storage: ServicePageContent = {
  slug: "storage",
  title: "Storage",
  eyebrow: "Data protection",
  tagline: "Storage that grows with you — without surprise cost or restore risk",
  summary:
    "You need room for growth, reliable backups, and clear cost control — without leaving critical data exposed. We design tiers, lifecycle, and protected copies so capacity, recovery, and spend stay intentional.",
  iconKey: "storage",
  category: "platforms",
  architectureTitle: "Secure access to object, file & block storage",
  architectureLead:
    "Applications reach storage through secure access — object, file, and block paths — with backup and archive as the protected layer underneath.",
  approachTitle: "Classify → Tier → Protect → Prove restores",
  approachLead:
    "We design around data classes and risk, automate lifecycle, and prove restore paths before calling the work done.",
  metrics: [
    { label: "Typical engagement", value: "4–10 weeks" },
    { label: "Focus areas", value: "Growth · cost · protect" },
    { label: "Compliance", value: "Retention & immutability" },
    { label: "Access model", value: "Private by default" },
  ],
  highlights: [
    {
      title: "Room to grow without waste",
      body: "Hot, cool, and archive mappings tied to how teams actually use data — so you expand capacity without paying hot-tier rates forever.",
    },
    {
      title: "Lifecycle that runs itself",
      body: "Policies that move and expire data on schedule with audit trails — so retention is enforced, not remembered in a spreadsheet.",
    },
    {
      title: "Access you can defend",
      body: "Private endpoints and identity-based access instead of long-lived keys and public paths.",
    },
    {
      title: "Backups that survive ransomware",
      body: "Immutable or WORM options plus restore drills — so recovery is proven, not assumed.",
    },
    {
      title: "Performance you can plan for",
      body: "IOPS, throughput, and latency targets for block and file workloads before cutover.",
    },
    {
      title: "Cost you can explain",
      body: "Capacity, egress, and API forecasts so finance sees the bill before it surprises anyone.",
    },
  ],
  problems: [
    {
      title: "Data growth",
      body: "Volume keeps rising and everything lands in the expensive tier — capacity expands, but cost expands faster.",
    },
    {
      title: "Backup",
      body: "Backups exist on paper, yet nobody is sure the last critical restore would succeed under time pressure.",
    },
    {
      title: "Data availability",
      body: "Teams need data when they need it — outages, slow restores, or unclear failover put operations at risk.",
    },
    {
      title: "Storage cost",
      body: "Finance cannot explain the bill: hot storage, egress, and API charges stack without a clear owner.",
    },
    {
      title: "Data protection",
      body: "Public paths, shared keys, or missing immutability leave critical data exposed to ransomware and misuse.",
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
      body: "Agreed classes, retention, encryption, and owners — so security and stewards share one view of what must be protected.",
    },
    {
      title: "Storage layout you can operate",
      body: "Account and bucket structure, private access, and replication choices your team can recreate — not a one-off portal build.",
    },
    {
      title: "Lifecycle and retention pack",
      body: "Transition, delete, and hold rules with alerts when policy fails — so compliance is continuous, not annual panic.",
    },
    {
      title: "Restore proof report",
      body: "A timed restore of a critical dataset with gaps logged — so you know recovery works before you need it.",
    },
  ],
  approach: [
    {
      title: "Classify what matters",
      body: "Inventory stores, access paths, and the top cost or risk drivers — focused on business impact, not every bucket name.",
    },
    {
      title: "Agree the tier map",
      body: "Lock hot/cool/archive, retention, and network boundaries per data class before moving bytes.",
    },
    {
      title: "Build protection in",
      body: "Implement stores, lifecycle, private connectivity, and immutability where risk warrants it.",
    },
    {
      title: "Prove you can recover",
      body: "Hand over dashboards, exception process, and timed restore drills for critical datasets.",
    },
  ],
  stack: [
    "Azure Blob / Files",
    "AWS S3 / EBS / EFS",
    "Private Link",
    "Terraform",
    "Object Lock / WORM",
    "Azure & AWS Backup",
  ],
  useCases: [],
  faqs: [
    {
      question: "Can you migrate data between clouds or on-prem?",
      answer:
        "Yes. We plan bandwidth, tools, and cutover windows carefully — especially for large archives — and validate integrity after transfer.",
    },
    {
      question: "Do you replace our backup product?",
      answer:
        "Not by default. We often strengthen what you already run with immutability, private access, and proven restore practice.",
    },
    {
      question: "How do you handle compliance retention?",
      answer:
        "We map legal and regulatory retention to policy, enable holds where needed, and leave evidence trails for auditors.",
    },
    {
      question: "Will our team own the lifecycle after go-live?",
      answer:
        "Yes. Policies and diagrams live with you. We hand over exception handling and restore cadence so day-two work stays in-house.",
    },
  ],
  related: ["cloud-computing", "disaster-recovery", "database"],
};
