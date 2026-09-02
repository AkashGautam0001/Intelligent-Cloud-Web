import type { ServicePageContent } from "./types";

export const networking: ServicePageContent = {
  slug: "networking",
  title: "Networking",
  eyebrow: "Connectivity",
  tagline: "Connectivity that performs, segments, and stays secure as you grow",
  summary:
    "You need reliable links between sites, clouds, and apps — without flat networks or unexplained exposure. We design hub-spoke, hybrid, and private access paths so traffic is intentional and owned.",
  iconKey: "networking",
  category: "platforms",
  approachTitle: "Map flows → Design hub → Wire paths → Prove failover",
  approachLead:
    "We draw critical paths first, encode them consistently, and leave failover ownership with your team.",
  metrics: [
    { label: "Typical engagement", value: "5–12 weeks" },
    { label: "Patterns", value: "Hub-spoke & hybrid" },
    { label: "Default posture", value: "Private + least privilege" },
    { label: "Visibility", value: "Flow logs & monitors" },
  ],
  highlights: [
    {
      title: "A hub teams can grow from",
      body: "Shared egress, inspection, and DNS with spokes that stay isolated by default — so new environments join a known path.",
    },
    {
      title: "Hybrid links that have owners",
      body: "ExpressRoute, Direct Connect, or VPN with clear failover and routing ownership when a path fails.",
    },
    {
      title: "Private by default for sensitive services",
      body: "Private endpoints and private link patterns so databases and storage stay off the public internet.",
    },
    {
      title: "Segmentation that matches the app",
      body: "Baselines mapped to application tiers — so east-west traffic is deliberate, not accidental.",
    },
    {
      title: "DNS that survives growth",
      body: "Private zones and hybrid resolution that keep working as you add spokes and sites.",
    },
    {
      title: "Visibility during incidents",
      body: "Flow logs, connection monitors, and alerts tied to named runbook owners.",
    },
  ],
  problems: [
    {
      title: "Connectivity",
      body: "Sites, clouds, and apps need reliable paths — but links are fragile, undocumented, or owned by no one.",
    },
    {
      title: "Network performance",
      body: "Latency and unreliable routes slow users and apps — especially across hybrid or multi-site paths.",
    },
    {
      title: "Security",
      body: "Flat networks and public endpoints leave east-west traffic and sensitive services harder to defend.",
    },
    {
      title: "Scalability",
      body: "Every new environment reinvents peering and addressing — growth creates sprawl instead of a known pattern.",
    },
    {
      title: "Hybrid connectivity",
      body: "On-prem and cloud must talk — but ExpressRoute, Direct Connect, or VPN failover is untested or unclear.",
    },
    {
      title: "Network reliability",
      body: "When a path fails, teams scramble — no shared picture of traffic, DNS, or who owns recovery.",
    },
  ],
  challenges: [
    "Flat networks that allow east-west traffic by accident",
    "Public platform endpoints still used because private paths were never finished",
    "Hybrid links owned by no one when paths fail",
    "DNS sprawl across on-prem and cloud",
    "Security reviews that cannot explain traffic paths",
  ],
  outcomes: [
    "Documented traffic paths for user, app, and management planes",
    "Private-by-default access for sensitive platform services",
    "Segmented spokes with enforceable baselines",
    "Hybrid failover tested and owned",
    "Dashboards that answer who talked to what during incidents",
  ],
  deliverables: [
    {
      title: "Network blueprint",
      body: "Addressing, hub services, spoke templates, and routing rules — so network and security share one agreed plan.",
    },
    {
      title: "Repeatable connectivity patterns",
      body: "Reusable hub, spoke, and private access patterns your team can extend — so the next environment does not reinvent peering.",
    },
    {
      title: "Segmentation baselines",
      body: "Firewall and security-group baselines with a clear change process — so policy stays enforceable as apps grow.",
    },
    {
      title: "Connectivity operate pack",
      body: "Failover, DNS troubleshooting, and private endpoint onboarding guides — so day-two issues have named owners.",
    },
  ],
  approach: [
    {
      title: "Map critical flows",
      body: "Trace user, app, and management paths plus public exposure — focused on business risk and performance, not every subnet label.",
    },
    {
      title: "Agree the hub-spoke design",
      body: "Freeze addressing, hub services, and segmentation before implementation so delivery stays measurable.",
    },
    {
      title: "Wire private and hybrid paths",
      body: "Deploy the hub, first spokes, and private access; migrate one representative workload to prove the path.",
    },
    {
      title: "Prove failover and visibility",
      body: "Enable flow visibility and practice hybrid or DNS failover with named owners before handoff.",
    },
  ],
  stack: [
    "Azure VNet / Firewall",
    "AWS VPC / TGW",
    "Private Link",
    "ExpressRoute / Direct Connect",
    "DNS Private Zones",
    "Terraform",
  ],
  useCases: [],
  related: ["cloud-computing", "integration", "disaster-recovery"],
};
