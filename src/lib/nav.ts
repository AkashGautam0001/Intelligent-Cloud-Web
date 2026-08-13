import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Building2,
  Cloud,
  CloudCog,
  Database,
  FileQuestion,
  Handshake,
  HardDrive,
  LifeBuoy,
  LineChart,
  Network,
  BrainCircuit,
  Rocket,
  ShieldCheck,
  Workflow,
  Boxes,
} from "lucide-react";

export type MegaLink = {
  title: string;
  description: string;
  to: string;
  icon?: LucideIcon;
};

export type MegaColumn = {
  heading: string;
  links: MegaLink[];
};

export type MegaPanel = {
  id: "services" | "solutions" | "company" | "resources";
  label: string;
  overviewTo: string;
  overviewLabel: string;
  columns: MegaColumn[];
  featured?: {
    title: string;
    description: string;
    to: string;
    cta: string;
  };
};

/**
 * Desktop mega-menu IA for a cloud consulting site
 * (intent-based columns: Platforms / Data & AI / Resilience / Goals / Audiences).
 */
export const megaPanels: MegaPanel[] = [
  {
    id: "services",
    label: "Services",
    overviewTo: "/services",
    overviewLabel: "View all services",
    columns: [
      {
        heading: "Platforms",
        links: [
          {
            title: "Cloud Computing",
            description: "Landing zones & scalable workloads",
            to: "/services/cloud-computing",
            icon: Cloud,
          },
          {
            title: "Storage",
            description: "Object, block & lifecycle policies",
            to: "/services/storage",
            icon: HardDrive,
          },
          {
            title: "Networking",
            description: "Secure connectivity & segmentation",
            to: "/services/networking",
            icon: Network,
          },
          {
            title: "Database",
            description: "Managed data tiers & migrations",
            to: "/services/database",
            icon: Database,
          },
        ],
      },
      {
        heading: "Data & AI",
        links: [
          {
            title: "Analytics",
            description: "Pipelines for decision-ready insight",
            to: "/services/analytics",
            icon: LineChart,
          },
          {
            title: "AI",
            description: "Secure, governed AI platforms",
            to: "/services/ai",
            icon: BrainCircuit,
          },
        ],
      },
      {
        heading: "Resilience",
        links: [
          {
            title: "Integration",
            description: "APIs, events & hybrid sync",
            to: "/services/integration",
            icon: Workflow,
          },
          {
            title: "Disaster Recovery",
            description: "Backup, failover & runbooks",
            to: "/services/disaster-recovery",
            icon: ShieldCheck,
          },
        ],
      },
    ],
    featured: {
      title: "Need a capability map?",
      description: "See how our services connect across Azure, AWS, and Kubernetes.",
      to: "/services",
      cta: "Explore services",
    },
  },
  {
    id: "solutions",
    label: "Solutions",
    overviewTo: "/solutions",
    overviewLabel: "View all solutions",
    columns: [
      {
        heading: "By outcome",
        links: [
          {
            title: "Cloud Migration",
            description: "Move with clear cutover plans",
            to: "/solutions/cloud-migration",
            icon: CloudCog,
          },
          {
            title: "DevOps Transformation",
            description: "CI/CD, GitOps & platform engineering",
            to: "/solutions/devops-transformation",
            icon: Boxes,
          },
          {
            title: "Security & Compliance",
            description: "Identity, guardrails & audits",
            to: "/solutions/security-compliance",
            icon: ShieldCheck,
          },
        ],
      },
      {
        heading: "By audience",
        links: [
          {
            title: "For Startups",
            description: "Launch fast without infrastructure debt",
            to: "/solutions/startups",
            icon: Rocket,
          },
          {
            title: "For Enterprises",
            description: "Landing zones & managed operations",
            to: "/solutions/enterprises",
            icon: Building2,
          },
        ],
      },
    ],
    featured: {
      title: "Free cloud assessment",
      description: "30 minutes with an engineer — preferred time, confirmed manually.",
      to: "/book-demo",
      cta: "Book a demo",
    },
  },
  {
    id: "company",
    label: "Company",
    overviewTo: "/about",
    overviewLabel: "About Intelligent Cloud",
    columns: [
      {
        heading: "About us",
        links: [
          {
            title: "About",
            description: "Engineer-led cloud consulting",
            to: "/about",
            icon: Building2,
          },
          {
            title: "Partners",
            description: "Referral, reseller & solution paths",
            to: "/partners",
            icon: Handshake,
          },
        ],
      },
      {
        heading: "Talk to us",
        links: [
          {
            title: "Contact sales",
            description: "Email, phone & WhatsApp",
            to: "/contact",
            icon: Cloud,
          },
          {
            title: "Book a demo",
            description: "Cloud assessment request",
            to: "/book-demo",
            icon: Rocket,
          },
        ],
      },
    ],
    featured: {
      title: "Partner with us",
      description: "Grow with Intelligent Cloud through referral, reseller, and solution paths.",
      to: "/partners",
      cta: "Partner program",
    },
  },
  {
    id: "resources",
    label: "Resources",
    overviewTo: "/documentation",
    overviewLabel: "Browse documentation",
    columns: [
      {
        heading: "Learn",
        links: [
          {
            title: "Documentation",
            description: "Architecture, AKS, CI/CD & more",
            to: "/documentation",
            icon: BookOpen,
          },
          {
            title: "FAQ",
            description: "Direct answers on engagement",
            to: "/faq",
            icon: FileQuestion,
          },
        ],
      },
      {
        heading: "Help",
        links: [
          {
            title: "Support",
            description: "Standard, managed & priority tiers",
            to: "/support",
            icon: LifeBuoy,
          },
          {
            title: "Privacy Policy",
            description: "How we handle your data",
            to: "/privacy",
            icon: ShieldCheck,
          },
          {
            title: "Terms",
            description: "Website & service terms",
            to: "/terms",
            icon: FileQuestion,
          },
        ],
      },
    ],
    featured: {
      title: "Open a ticket",
      description: "Already a customer? Reach support with the right tier.",
      to: "/support",
      cta: "Get support",
    },
  },
];

export type MegaId = MegaPanel["id"];
