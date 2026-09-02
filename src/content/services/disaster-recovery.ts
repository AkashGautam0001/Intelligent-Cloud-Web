import type { ServicePageContent } from "./types";

export const disasterRecovery: ServicePageContent = {
  slug: "disaster-recovery",
  title: "Disaster Recovery",
  eyebrow: "Resilience",
  tagline: "Backup, failover, and runbooks you can prove under pressure",
  summary:
    "Define RPO/RTO, implement backup and failover patterns, and rehearse recovery so resilience is evidenced — not assumed — when something fails.",
  iconKey: "disaster-recovery",
  category: "resilience",
  approachTitle: "Set targets → Design recovery → Implement → Game-day prove",
  approachLead:
    "Resilience is evidence. We size investment to business impact and leave timed drill reports behind.",
  metrics: [
    { label: "Typical engagement", value: "5–12 weeks" },
    { label: "Outcomes", value: "RPO/RTO evidence" },
    { label: "Practice", value: "Scheduled drills" },
    { label: "Scope", value: "Apps + data + people" },
  ],
  highlights: [
    {
      title: "Business-aligned targets",
      body: "RPO/RTO set per criticality tier with executive and app owner sign-off.",
    },
    {
      title: "Backup architecture",
      body: "Immutable options, cross-region copies, and retention that matches policy.",
    },
    {
      title: "Failover patterns",
      body: "Active-passive or multi-region designs with clear DNS/traffic shift steps.",
    },
    {
      title: "Runbooks & ownership",
      body: "Who decides, who executes, and how communications work during an event.",
    },
    {
      title: "Game days",
      body: "Controlled drills that measure recovery time and surface gaps safely.",
    },
    {
      title: "Continuous improvement",
      body: "Post-drill actions tracked until evidence matches the stated targets.",
    },
  ],
  challenges: [
    "RPO/RTO written in a binder but never tested",
    "Backups that succeed yet restores fail or take too long",
    "Failover depends on one engineer’s memory",
    "Ransomware scenarios ignored because “we have snapshots”",
    "Multi-region designs that double cost without proven benefit",
  ],
  outcomes: [
    "Tiered RPO/RTO with named owners",
    "Restore and failover evidence for top systems",
    "Immutable or locked copies where risk warrants them",
    "Runbooks that non-hero engineers can follow",
    "A drill calendar that keeps evidence fresh",
  ],
  deliverables: [
    {
      title: "Resilience assessment",
      body: "Critical systems, dependencies, current gaps, and recommended tiers.",
    },
    {
      title: "DR architecture",
      body: "Backup, replication, and failover design with cost/trade-off notes.",
    },
    {
      title: "Runbook pack",
      body: "Decision trees, technical steps, and communication templates.",
    },
    {
      title: "Drill report",
      body: "Timed exercise results, findings, and remediation backlog.",
    },
  ],
  approach: [
    {
      title: "Set RPO/RTO targets",
      body: "Identify critical services, dependencies, and the honest current recovery capability with executives.",
    },
    {
      title: "Design recovery patterns",
      body: "Agree tiers, backup/failover patterns, and investment level before buying more tooling.",
    },
    {
      title: "Implement & lock copies",
      body: "Implement backup/failover for priority systems and harden access to recovery stores.",
    },
    {
      title: "Game-day prove",
      body: "Run a controlled drill, fix gaps, and set the recurring cadence that keeps evidence fresh.",
    },
  ],
  stack: [
    "Azure Site Recovery / Backup",
    "AWS Elastic Disaster Recovery / Backup",
    "Object Lock / Immutable storage",
    "Traffic Manager / Route 53",
    "Terraform",
    "Runbook automation",
    "Observability / status pages",
  ],
  useCases: [
    {
      title: "First proven restore",
      body: "A mid-size firm had nightly backups but no restore evidence. We ran restores for the top three systems and fixed gaps.",
      outcome: "Documented restore times accepted by leadership.",
    },
    {
      title: "Region failover for SaaS",
      body: "A SaaS platform needed a secondary region for a contractual RTO. We implemented replication and a controlled failover drill.",
      outcome: "Measured failover under the contracted window.",
    },
    {
      title: "Ransomware-ready copies",
      body: "Security required immutable backups. We enabled locked retention and tested recovery to a clean environment.",
      outcome: "Recovery path that does not trust the compromised estate.",
    },
  ],
  related: ["storage", "cloud-computing", "database"],
};
