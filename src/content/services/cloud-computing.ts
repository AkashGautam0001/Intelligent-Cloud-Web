import type { ServicePageContent } from "./types";

export const cloudComputing: ServicePageContent = {
  slug: "cloud-computing",
  title: "Cloud Computing",
  eyebrow: "Cloud foundation",
  tagline: "Reliable cloud foundations your teams can trust and operate",
  summary:
    "You need environments that are secure, repeatable, and ready for growth — without months of design debates. We design and build cloud foundations so new workloads land with the same baseline every time.",
  iconKey: "cloud-computing",
  category: "platforms",
  approachTitle: "Discover → Agree → Build → Hand over",
  approachLead:
    "We lock decisions early, deliver a usable foundation, and prove your team can operate day two.",
  metrics: [
    { label: "Typical engagement", value: "6–14 weeks" },
    { label: "Foundation pattern", value: "Hub-spoke" },
    { label: "Clouds", value: "Azure · AWS · GCP" },
    { label: "Day-two ready", value: "Runbooks included" },
  ],
  highlights: [
    {
      title: "Environments you can trust",
      body: "Repeatable cloud foundations so new systems land on the same secure baseline — without months of redesign.",
    },
    {
      title: "Clear ownership",
      body: "Roles, access paths, and break-glass procedures so the right people get in — and risk stays bounded.",
    },
    {
      title: "Security built in from day one",
      body: "Network segmentation and policy guardrails before workloads go live — not bolted on after an incident.",
    },
    {
      title: "Cost you can explain",
      body: "Budgets, tags, and change reviews so spend stays visible before finance gets surprised.",
    },
    {
      title: "Faster path to production",
      body: "Placement rules and starter patterns so teams land containers, apps, and VMs without reinventing the path.",
    },
    {
      title: "Operate handover",
      body: "Diagrams, ownership matrix, and runbooks so your platform team owns day two after go-live.",
    },
  ],
  problems: [
    {
      title: "Environments that do not scale cleanly",
      body: "Accounts and subscriptions grew organically — every new project invents its own layout, and nothing feels repeatable.",
    },
    {
      title: "Unclear ownership and access",
      body: "Nobody is sure who owns which environment, who can change production, or how break-glass should work.",
    },
    {
      title: "Security added too late",
      body: "Networking and controls arrive after systems are live — reviews find gaps that are expensive to fix.",
    },
    {
      title: "Cloud cost surprises",
      body: "Spend climbs without tagging, budgets, or showback — finance cannot explain the bill.",
    },
    {
      title: "Slow to launch new workloads",
      body: "Standing up a safe place for the next app takes weeks of debate instead of a known path.",
    },
  ],
  challenges: [
    "Cloud accounts grown organically with unclear ownership",
    "Manual changes that cannot be reproduced or audited",
    "Security and networking added only after systems are live",
    "Cost surprises without tagging or showback",
    "Foundation projects that stall in endless design debates",
  ],
  outcomes: [
    "New environments provisioned in hours, not weeks",
    "Shared security and policy baselines across the estate",
    "Documented identity and network paths for each workload class",
    "Monitoring and alerts mapped to named owners",
    "A clear backlog for migrating workloads onto the new foundation",
  ],
  deliverables: [
    {
      title: "Foundation blueprint",
      body: "An agreed map of topology, naming, tagging, and policies — so security and platform owners share one plan.",
    },
    {
      title: "Ready-to-use cloud environment",
      body: "A deployable foundation you can recreate and scale consistently — not a one-off portal build.",
    },
    {
      title: "Workload starter kits",
      body: "Reference patterns for common workload types so teams onboard faster with less guesswork.",
    },
    {
      title: "Operate pack",
      body: "Practical runbooks for access, incidents, and monthly hygiene — so day-two work is owned by your team.",
    },
  ],
  approach: [
    {
      title: "Discover the problem",
      body: "Map accounts, identity gaps, and the workloads you need to host — focused on business risk, not tool catalogues.",
    },
    {
      title: "Agree the foundation",
      body: "Lock topology, network, and policy decisions early so delivery stays focused and measurable.",
    },
    {
      title: "Build and prove",
      body: "Implement the foundation and one reference workload end-to-end, including monitoring and access paths.",
    },
    {
      title: "Transfer ownership",
      body: "Walk through deploys, access requests, and reviews until your team can run the path without us.",
    },
  ],
  stack: [
    "Azure",
    "AWS",
    "Google Cloud",
    "Terraform",
    "Entra ID",
    "GitHub Actions",
  ],
  useCases: [],
  related: ["networking", "database", "disaster-recovery"],
};
