import type { ServicePageContent } from "./types";

export const ai: ServicePageContent = {
  slug: "ai",
  title: "AI",
  eyebrow: "Data & AI",
  tagline: "Secure, governed AI platforms your teams can ship and operate",
  summary:
    "Stand up responsible AI foundations — model access, retrieval, evaluation, and guardrails — so copilots and agents ship with security and cost controls, not as shadow IT.",
  iconKey: "ai",
  category: "data",
  architectureTitle: "Governed model access with retrieval & guardrails",
  architectureLead:
    "A secure model plane, access-aware retrieval over your corpora, and evaluation gates — so copilots ship as platform products, not shadow IT.",
  approachTitle: "Risk scan → Controls → First use case → Govern scale",
  approachLead:
    "AI value sticks when security, eval, and cost controls exist before the second team asks for keys.",
  metrics: [
    { label: "Typical engagement", value: "6–14 weeks" },
    { label: "Focus", value: "Platform + first use case" },
    { label: "Controls", value: "Identity, data, eval" },
    { label: "Ops", value: "Cost & quality gates" },
  ],
  highlights: [
    {
      title: "AI landing patterns",
      body: "Secure model endpoints, private networking, and secrets handling for Azure OpenAI / Bedrock and peers.",
    },
    {
      title: "Retrieval architectures",
      body: "RAG patterns with chunking, indexing, and access-aware retrieval over your corpora.",
    },
    {
      title: "Evaluation & quality",
      body: "Offline and online eval harnesses so regressions are caught before users feel them.",
    },
    {
      title: "Guardrails",
      body: "Content filters, prompt injection defenses, and logging appropriate for your risk profile.",
    },
    {
      title: "Cost controls",
      body: "Token budgets, caching, and per-app showback so AI spend stays intentional.",
    },
    {
      title: "Delivery path",
      body: "CI for prompts/config, environments, and a clear promote-to-prod checklist.",
    },
  ],
  challenges: [
    "Shadow AI tools with corporate data pasted into public models",
    "PoCs that never graduate because there is no platform path",
    "No evaluation — quality judged by anecdote",
    "Unclear data permissions for retrieval corpora",
    "Cost spikes when a popular internal copilot goes viral",
  ],
  outcomes: [
    "Approved model access paths with identity and network controls",
    "At least one production use case with eval and monitoring",
    "Documented data boundaries for retrieval",
    "Cost and quality dashboards owned by product and platform",
    "A backlog process for the next AI use cases on the same foundation",
  ],
  deliverables: [
    {
      title: "AI platform blueprint",
      body: "Model providers, networking, identity, logging, and environment strategy.",
    },
    {
      title: "Reference RAG / agent path",
      body: "Working reference with retrieval, guardrails, and observability hooks.",
    },
    {
      title: "Eval starter kit",
      body: "Datasets, scoring approach, and CI gate recommendations.",
    },
    {
      title: "Operate pack",
      body: "Incident playbooks, cost reviews, and change control for prompts and indexes.",
    },
  ],
  approach: [
    {
      title: "Scan risk & use cases",
      body: "Map use cases, data sensitivity, and existing shadow AI usage with security.",
    },
    {
      title: "Stand up platform controls",
      body: "Freeze identity, network, logging, and quotas; pick one high-value use case as the proving ground.",
    },
    {
      title: "Ship the first production use case",
      body: "Deliver platform baselines and the first use case through eval and production.",
    },
    {
      title: "Govern cost & quality at scale",
      body: "Enable cost/quality monitoring and a governed intake for subsequent apps.",
    },
  ],
  stack: [
    "Azure OpenAI",
    "Amazon Bedrock",
    "Azure AI Search / OpenSearch",
    "LangChain / Semantic Kernel",
    "Prompt flow / eval harnesses",
    "Private Link",
    "Terraform",
    "Application Insights / CloudWatch",
  ],
  useCases: [
    {
      title: "Internal knowledge copilot",
      body: "Employees needed answers from policies and runbooks without leaking data to public tools.",
      outcome: "Private RAG with access-aware retrieval and usage logging.",
    },
    {
      title: "Support deflection assistant",
      body: "A support org wanted suggested replies grounded in product docs with human review.",
      outcome: "Assisted workflows with eval gates before full automation.",
    },
    {
      title: "Secure model gateway",
      body: "Multiple teams requested model access. We centralized a gateway with quotas and audit.",
      outcome: "Approved path that replaced unmanaged API keys.",
    },
  ],
  faqs: [
    {
      question: "Do you build custom models from scratch?",
      answer:
        "Rarely as a first step. Most value comes from governed use of foundation models plus your data. Fine-tuning is scoped when evaluation proves the need.",
    },
    {
      question: "How do you keep prompts and data secure?",
      answer:
        "Private networking, identity-based access, corpus ACLs, and logging policies agreed with security before production traffic.",
    },
    {
      question: "Can you help with AI policy and training?",
      answer:
        "Yes — we align technical controls with acceptable-use guidance so platform and policy reinforce each other.",
    },
  ],
  related: ["analytics", "integration", "cloud-computing"],
};
