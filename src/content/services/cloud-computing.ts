import type { ServicePageContent } from "./types";

export const cloudComputing: ServicePageContent = {
  slug: "cloud-computing",
  title: "Cloud Computing",
  eyebrow: "Platforms",
  tagline: "Landing zones and scalable workloads your teams can operate",
  summary:
    "Design and build Azure and AWS foundations — identity, network, guardrails, and workload platforms — so new environments ship with the same baseline every time.",
  iconKey: "cloud-computing",
  category: "platforms",
  architectureTitle: "Landing-zone topology at a glance",
  architectureLead:
    "Hub services, spokes, and workload placement rules — the foundation pattern we tailor to your Azure or AWS estate before writing IaC.",
  approachTitle: "Discover → Freeze → Provision → Transfer",
  approachLead:
    "We stop endless design debates early, ship a usable foundation, and prove operate ownership with your platform team.",
  metrics: [
    { label: "Typical engagement", value: "6–14 weeks" },
    { label: "Landing zone patterns", value: "Hub-spoke & CAF" },
    { label: "Delivery model", value: "IaC + GitOps" },
    { label: "Day-two ready", value: "Runbooks included" },
  ],
  highlights: [
    {
      title: "Landing zones",
      body: "Subscription/account topology, shared services, and policy baselines aligned to Cloud Adoption Framework patterns.",
    },
    {
      title: "Workload platforms",
      body: "AKS/EKS, App Service, or VM estates with clear placement rules, scaling, and observability hooks.",
    },
    {
      title: "Identity & access",
      body: "Entra ID / IAM roles, privileged access paths, and break-glass procedures documented before go-live.",
    },
    {
      title: "Cost guardrails",
      body: "Budgets, tags, and showback so finance and engineering share one view of spend growth.",
    },
    {
      title: "Change control",
      body: "Terraform or Bicep pipelines with peer review — no silent portal changes in production.",
    },
    {
      title: "Handoff packs",
      body: "Architecture diagrams, ownership matrix, and operate guides so your team owns day two.",
    },
  ],
  challenges: [
    "Subscriptions and accounts grown organically with unclear ownership",
    "Portal-driven changes that cannot be reproduced or audited",
    "Security and networking bolted on after workloads are live",
    "Cost spikes without tagging or showback",
    "Landing-zone projects that stall on endless design debates",
  ],
  outcomes: [
    "Repeatable environment provision in hours, not weeks",
    "Policy-as-code baselines enforced at subscription/account scope",
    "Documented identity and network paths for every workload class",
    "Observable platforms with alerts mapped to runbook owners",
    "A backlog of workload migrations sequenced against the new foundation",
  ],
  deliverables: [
    {
      title: "Foundation blueprint",
      body: "Topology, naming, tagging, and policy catalogue agreed with security and platform owners.",
    },
    {
      title: "IaC landing zone",
      body: "Modular Terraform/Bicep that provisions hub, spokes, shared logging, and identity wiring.",
    },
    {
      title: "Workload starter kits",
      body: "Reference modules for containers, PaaS apps, and IaaS with CI/CD stubs.",
    },
    {
      title: "Operate pack",
      body: "Runbooks for access requests, incident triage, and monthly hygiene reviews.",
    },
  ],
  approach: [
    {
      title: "Discover the estate",
      body: "Map subscriptions/accounts, identity gaps, and the workload classes you need to host in the next 12 months.",
    },
    {
      title: "Freeze the landing zone",
      body: "Agree topology, policy, and network patterns — lock decisions before code so delivery stays focused.",
    },
    {
      title: "Provision foundations",
      body: "Implement landing zones and one reference workload end-to-end through pipeline and observability.",
    },
    {
      title: "Transfer day-two ownership",
      body: "Drill access requests, deploys, rollbacks, and cost reviews until your platform team owns the path.",
    },
  ],
  stack: [
    "Azure",
    "AWS",
    "Terraform",
    "Bicep",
    "AKS / EKS",
    "Entra ID",
    "GitHub Actions",
    "Azure Monitor",
  ],
  useCases: [
    {
      title: "Greenfield SaaS platform",
      body: "A product team needed production in weeks without inheriting ad-hoc cloud debt. We delivered a CAF-aligned landing zone, AKS starter, and GitOps path.",
      outcome: "First customer tenant live with policy and observability from day one.",
    },
    {
      title: "Enterprise consolidation",
      body: "Multiple business units ran separate Azure subscriptions with conflicting standards. We unified hub services and migrated spokes onto shared baselines.",
      outcome: "One platform team, one policy set, clearer cost showback.",
    },
    {
      title: "Regulated workload onboarding",
      body: "A financial services team needed a segmented spoke with private endpoints and privileged access workflows before moving a core system.",
      outcome: "Approved pattern reused for three subsequent workloads.",
    },
  ],
  faqs: [
    {
      question: "Do you only work on Azure?",
      answer:
        "No. We deliver Azure and AWS landing zones and can support hybrid patterns. The stack is chosen with your team — not forced by a single-cloud playbook.",
    },
    {
      question: "How long until we can onboard the first workload?",
      answer:
        "Most engagements land a usable foundation and one reference workload in 6–10 weeks, depending on identity and network prerequisites.",
    },
    {
      question: "Will our team own the code?",
      answer:
        "Yes. IaC lives in your repos with CI checks. We document modules and hand over operate runbooks so you are not dependent on us for routine changes.",
    },
    {
      question: "Can this plug into an existing CAF or Well-Architected effort?",
      answer:
        "Absolutely. We align to your existing CAF/WAF decisions and fill the gaps — we do not restart strategy for its own sake.",
    },
  ],
  related: ["networking", "database", "disaster-recovery"],
};
