import type { ServicePageContent } from "./types";

export const networking: ServicePageContent = {
  slug: "networking",
  title: "Networking",
  eyebrow: "Platforms",
  tagline: "Secure connectivity and segmentation that scales with your estate",
  summary:
    "Hub-spoke, hybrid links, private service access, and segmentation patterns that keep traffic intentional — with observability so you can prove it.",
  iconKey: "networking",
  category: "platforms",
  architectureTitle: "Hub-spoke with private service access",
  architectureLead:
    "Shared egress and inspection in the hub, isolated spokes, and private paths to PaaS — so east-west and internet exposure stay deliberate.",
  approachTitle: "Map flows → Design hub → Wire private paths → Validate",
  approachLead:
    "Networking work succeeds when traffic paths are drawn first, then encoded in IaC with failover ownership.",
  metrics: [
    { label: "Typical engagement", value: "5–12 weeks" },
    { label: "Patterns", value: "Hub-spoke & hybrid" },
    { label: "Default posture", value: "Private + least privilege" },
    { label: "Visibility", value: "Flow logs & NSG/NACL" },
  ],
  highlights: [
    {
      title: "Hub-spoke design",
      body: "Shared egress, inspection, and DNS with spokes that stay isolated by default.",
    },
    {
      title: "Hybrid connectivity",
      body: "ExpressRoute / Direct Connect / VPN with clear failover and routing ownership.",
    },
    {
      title: "Private service access",
      body: "Private endpoints and private link patterns so PaaS stays off the public internet.",
    },
    {
      title: "Segmentation",
      body: "Micro-segmentation and NSG/NACL baselines mapped to application tiers.",
    },
    {
      title: "DNS & name resolution",
      body: "Private DNS zones and hybrid resolution that do not break when you add spokes.",
    },
    {
      title: "Network observability",
      body: "Flow logs, connection monitors, and alerting tied to runbook owners.",
    },
  ],
  challenges: [
    "Flat networks that allow east-west traffic by accident",
    "Public PaaS endpoints still used because private paths were never finished",
    "Hybrid links owned by no one when paths fail",
    "DNS sprawl across on-prem and cloud",
    "Security reviews that cannot explain traffic paths",
  ],
  outcomes: [
    "Documented traffic paths for user, app, and management planes",
    "Private-by-default access for sensitive PaaS",
    "Segmented spokes with enforceable baselines",
    "Hybrid failover tested and owned",
    "Dashboards that answer “who talked to what” during incidents",
  ],
  deliverables: [
    {
      title: "Network blueprint",
      body: "Addressing, hub services, spoke templates, and peering/routing rules.",
    },
    {
      title: "IaC network modules",
      body: "Reusable hub/spoke and private endpoint modules with CI validation.",
    },
    {
      title: "Segmentation policy pack",
      body: "NSG/NACL and firewall rule baselines with change process.",
    },
    {
      title: "Connectivity runbooks",
      body: "Failover, DNS troubleshooting, and private endpoint onboarding guides.",
    },
  ],
  approach: [
    {
      title: "Map critical flows",
      body: "Trace user, app, and management paths plus public exposure with security and app owners.",
    },
    {
      title: "Design the hub-spoke",
      body: "Freeze addressing, hub services, and segmentation before implementation.",
    },
    {
      title: "Wire private paths",
      body: "Deploy hub, first spokes, and private endpoints; migrate one representative workload.",
    },
    {
      title: "Validate failover",
      body: "Enable flow visibility and practice hybrid/DNS failover with named owners.",
    },
  ],
  stack: [
    "Azure VNet / Firewall",
    "AWS VPC / TGW",
    "Private Link",
    "ExpressRoute / Direct Connect",
    "DNS Private Zones",
    "Terraform",
    "Network Watcher / VPC Flow Logs",
  ],
  useCases: [
    {
      title: "Hub consolidation",
      body: "Several VNets peered ad-hoc. We introduced a hub with shared egress and spoke templates.",
      outcome: "New environments onboard with the same path and controls.",
    },
    {
      title: "Private PaaS cutover",
      body: "Databases and storage still had public endpoints. We moved consumers to private endpoints and locked public access.",
      outcome: "Attack surface reduced without application downtime.",
    },
    {
      title: "Hybrid failover proof",
      body: "Business continuity required dual paths to on-prem. We documented routing and ran a controlled failover.",
      outcome: "Measured RTO for connectivity and clear ownership.",
    },
  ],
  faqs: [
    {
      question: "Do you replace our firewall vendor?",
      answer:
        "Only if needed. We often integrate existing NVA/firewall platforms into hub designs and focus on paths, policy, and observability.",
    },
    {
      question: "Can you work with our network team’s standards?",
      answer:
        "Yes. We co-design with network and security — the goal is operable standards, not a parallel shadow network.",
    },
    {
      question: "How do you handle IP exhaustion?",
      answer:
        "We plan addressing early, including growth and overlapping CIDR remediation strategies when estates already conflict.",
    },
  ],
  related: ["cloud-computing", "integration", "disaster-recovery"],
};
