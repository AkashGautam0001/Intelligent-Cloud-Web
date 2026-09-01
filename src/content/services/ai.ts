import type { ServicePageContent } from "./types";

export const ai: ServicePageContent = {
  slug: "ai",
  title: "AI",
  eyebrow: "Intelligent automation",
  tagline: "AI that automates work safely — and your teams can actually adopt",
  summary:
    "You need productivity gains from copilots and agents — without shadow tools, uncontrolled spend, or data leaving approved paths. We stand up governed model access, retrieval, and evaluation so AI ships as a platform product your teams can adopt.",
  iconKey: "ai",
  category: "data",
  architectureTitle: "AI gateway with RAG, model & guardrails",
  architectureLead:
    "Users and apps reach a secured AI gateway — RAG over company data and the model path join through guardrails, with monitoring on the way out.",
  approachTitle: "Risk scan → Controls → First use case → Govern scale",
  approachLead:
    "AI value sticks when security, evaluation, and cost controls exist before the second team asks for keys.",
  metrics: [
    { label: "Typical engagement", value: "6–14 weeks" },
    { label: "Focus", value: "Platform + first use case" },
    { label: "Controls", value: "Identity, data, eval" },
    { label: "Ops", value: "Cost & quality gates" },
  ],
  highlights: [
    {
      title: "Approved paths instead of shadow AI",
      body: "Secure model endpoints, private networking, and identity-based access — so teams stop pasting corporate data into public tools.",
    },
    {
      title: "Answers grounded in your knowledge",
      body: "Retrieval patterns with chunking, indexing, and access-aware search over policies, runbooks, and product docs.",
    },
    {
      title: "Quality you can measure",
      body: "Offline and online evaluation so regressions are caught before users feel them.",
    },
    {
      title: "Guardrails matched to risk",
      body: "Content filters, injection defenses, and logging appropriate for your risk profile.",
    },
    {
      title: "Spend that stays intentional",
      body: "Token budgets, caching, and per-app showback so a popular copilot does not surprise finance.",
    },
    {
      title: "A delivery path teams adopt",
      body: "Environments, change control for prompts and indexes, and a promote-to-prod checklist — so the next use case reuses the foundation.",
    },
  ],
  problems: [
    {
      title: "Business automation",
      body: "Repetitive work drains teams — but automation ideas stall without a safe, approved way to use AI.",
    },
    {
      title: "AI adoption",
      body: "Pilot tools appear in pockets; security and IT cannot offer a path people will actually use.",
    },
    {
      title: "Intelligent applications",
      body: "Product teams want copilots and agents in real workflows — not another demo that never reaches production.",
    },
    {
      title: "Data and AI solutions",
      body: "Answers need your policies and knowledge — without controlled retrieval, data leaves approved paths.",
    },
    {
      title: "AI infrastructure",
      body: "Model access, networking, identity, and logging are unclear — every project reinvents the foundation.",
    },
    {
      title: "Business productivity",
      body: "Leaders expect measurable gains — but cost, quality, and ownership are undefined when usage grows.",
    },
  ],
  challenges: [
    "Shadow AI tools with corporate data pasted into public models",
    "Proofs of concept that never graduate because there is no platform path",
    "No evaluation — quality judged by anecdote",
    "Unclear data permissions for retrieval corpora",
    "Cost spikes when a popular internal copilot goes viral",
  ],
  outcomes: [
    "Approved model access paths with identity and network controls",
    "At least one production use case with evaluation and monitoring",
    "Documented data boundaries for retrieval",
    "Cost and quality dashboards owned by product and platform",
    "A backlog process for the next AI use cases on the same foundation",
  ],
  deliverables: [
    {
      title: "AI platform blueprint",
      body: "Model providers, networking, identity, logging, and environment strategy — so sponsors and security agree how AI will run.",
    },
    {
      title: "Working reference use case",
      body: "A production-shaped path with retrieval, guardrails, and observability — so teams see adoption, not another demo.",
    },
    {
      title: "Evaluation starter kit",
      body: "Datasets, scoring approach, and release gates — so quality is a control, not a hallway opinion.",
    },
    {
      title: "Operate pack",
      body: "Incident playbooks, cost reviews, and change control for prompts and indexes — so day-two ownership is clear.",
    },
  ],
  approach: [
    {
      title: "Scan risk and opportunity",
      body: "Map use cases, data sensitivity, and existing shadow AI usage with security — focused on business value and exposure.",
    },
    {
      title: "Stand up platform controls",
      body: "Freeze identity, network, logging, and quotas; pick one high-value use case as the proving ground.",
    },
    {
      title: "Ship the first production use case",
      body: "Deliver platform baselines and the first use case through evaluation and production.",
    },
    {
      title: "Govern cost and quality at scale",
      body: "Enable cost and quality monitoring plus a governed intake for subsequent apps.",
    },
  ],
  stack: [
    "Azure OpenAI",
    "Amazon Bedrock",
    "Azure AI Search / OpenSearch",
    "LangChain / Semantic Kernel",
    "Private Link",
    "Terraform",
  ],
  useCases: [],
  related: ["analytics", "integration", "cloud-computing"],
};
