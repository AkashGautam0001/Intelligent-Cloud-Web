import type { SVGProps } from "react";
import type { ServiceCategory } from "@/content/services/types";

type MarkProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 320 200",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true as const,
};

export function LandingZoneMark(props: MarkProps) {
  return (
    <svg {...base} {...props}>
      <rect x="24" y="36" width="88" height="128" rx="12" stroke="#04275f" strokeWidth="2" fill="#04275f" fillOpacity="0.06" />
      <rect x="116" y="56" width="72" height="48" rx="10" stroke="#438bd8" strokeWidth="2" fill="#438bd8" fillOpacity="0.12" />
      <rect x="116" y="116" width="72" height="48" rx="10" stroke="#438bd8" strokeWidth="2" fill="#438bd8" fillOpacity="0.08" />
      <rect x="204" y="48" width="88" height="64" rx="12" stroke="#f26a13" strokeWidth="2" fill="#f26a13" fillOpacity="0.1" />
      <rect x="204" y="124" width="88" height="40" rx="10" stroke="#04275f" strokeWidth="2" strokeDasharray="4 4" fill="transparent" />
      <path d="M112 100H116M188 80H204M188 140H204" stroke="#04275f" strokeWidth="2" strokeOpacity="0.35" />
      <circle cx="68" cy="72" r="6" fill="#f26a13" />
      <circle cx="68" cy="100" r="6" fill="#438bd8" />
      <circle cx="68" cy="128" r="6" fill="#04275f" fillOpacity="0.45" />
    </svg>
  );
}

export function StorageTiersMark(props: MarkProps) {
  return (
    <svg {...base} {...props}>
      <rect x="40" y="40" width="240" height="36" rx="10" fill="#f26a13" fillOpacity="0.18" stroke="#f26a13" strokeWidth="2" />
      <rect x="56" y="88" width="208" height="36" rx="10" fill="#438bd8" fillOpacity="0.14" stroke="#438bd8" strokeWidth="2" />
      <rect x="72" y="136" width="176" height="36" rx="10" fill="#04275f" fillOpacity="0.1" stroke="#04275f" strokeWidth="2" />
      <text x="56" y="63" fill="#04275f" fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="600">
        Hot
      </text>
      <text x="72" y="111" fill="#04275f" fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="600">
        Cool
      </text>
      <text x="88" y="159" fill="#04275f" fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="600">
        Archive
      </text>
    </svg>
  );
}

export function NetworkMeshMark(props: MarkProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="160" cy="100" r="28" fill="#04275f" fillOpacity="0.1" stroke="#04275f" strokeWidth="2" />
      <circle cx="64" cy="56" r="18" fill="#438bd8" fillOpacity="0.15" stroke="#438bd8" strokeWidth="2" />
      <circle cx="256" cy="56" r="18" fill="#438bd8" fillOpacity="0.15" stroke="#438bd8" strokeWidth="2" />
      <circle cx="64" cy="152" r="18" fill="#f26a13" fillOpacity="0.12" stroke="#f26a13" strokeWidth="2" />
      <circle cx="256" cy="152" r="18" fill="#f26a13" fillOpacity="0.12" stroke="#f26a13" strokeWidth="2" />
      <path
        d="M80 64L140 90M240 64L180 90M80 144L140 110M240 144L180 110"
        stroke="#04275f"
        strokeWidth="2"
        strokeOpacity="0.35"
      />
      <circle cx="160" cy="100" r="6" fill="#f26a13" />
    </svg>
  );
}

export function DataCylinderMark(props: MarkProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="160" cy="48" rx="70" ry="22" fill="#438bd8" fillOpacity="0.15" stroke="#438bd8" strokeWidth="2" />
      <path d="M90 48V140C90 152 121 162 160 162C199 162 230 152 230 140V48" stroke="#04275f" strokeWidth="2" fill="#04275f" fillOpacity="0.05" />
      <ellipse cx="160" cy="90" rx="70" ry="22" stroke="#04275f" strokeWidth="1.5" strokeOpacity="0.35" />
      <ellipse cx="160" cy="130" rx="70" ry="22" stroke="#f26a13" strokeWidth="2" fill="#f26a13" fillOpacity="0.08" />
      <path d="M250 70H280M250 100H290M250 130H275" stroke="#04275f" strokeWidth="2" strokeOpacity="0.3" strokeLinecap="round" />
    </svg>
  );
}

export function AnalyticsPipelineMark(props: MarkProps) {
  return (
    <svg {...base} {...props}>
      <rect x="28" y="70" width="56" height="60" rx="10" stroke="#04275f" strokeWidth="2" fill="#04275f" fillOpacity="0.06" />
      <rect x="108" y="50" width="56" height="100" rx="10" stroke="#438bd8" strokeWidth="2" fill="#438bd8" fillOpacity="0.12" />
      <rect x="188" y="70" width="56" height="60" rx="10" stroke="#f26a13" strokeWidth="2" fill="#f26a13" fillOpacity="0.1" />
      <path d="M84 100H108M164 100H188M244 100H280" stroke="#04275f" strokeWidth="2" strokeOpacity="0.35" />
      <circle cx="292" cy="100" r="10" fill="#f26a13" />
      <text x="40" y="105" fill="#04275f" fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600">
        Src
      </text>
      <text x="118" y="105" fill="#04275f" fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600">
        Transform
      </text>
      <text x="200" y="105" fill="#04275f" fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600">
        Serve
      </text>
    </svg>
  );
}

export function AiPlatformMark(props: MarkProps) {
  return (
    <svg {...base} {...props}>
      <rect x="40" y="40" width="100" height="120" rx="12" stroke="#04275f" strokeWidth="2" fill="#04275f" fillOpacity="0.06" />
      <rect x="180" y="56" width="100" height="40" rx="10" stroke="#438bd8" strokeWidth="2" fill="#438bd8" fillOpacity="0.14" />
      <rect x="180" y="108" width="100" height="40" rx="10" stroke="#f26a13" strokeWidth="2" fill="#f26a13" fillOpacity="0.12" />
      <path d="M140 80H180M140 128H180" stroke="#04275f" strokeWidth="2" strokeOpacity="0.35" />
      <circle cx="90" cy="78" r="14" stroke="#f26a13" strokeWidth="2" fill="#f26a13" fillOpacity="0.15" />
      <circle cx="90" cy="122" r="10" fill="#438bd8" fillOpacity="0.5" />
      <text x="196" y="80" fill="#04275f" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600">
        Models
      </text>
      <text x="196" y="132" fill="#04275f" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600">
        Guardrails
      </text>
    </svg>
  );
}

export function IntegrationFlowMark(props: MarkProps) {
  return (
    <svg {...base} {...props}>
      <rect x="24" y="70" width="70" height="60" rx="10" stroke="#04275f" strokeWidth="2" fill="#04275f" fillOpacity="0.06" />
      <rect x="226" y="40" width="70" height="50" rx="10" stroke="#438bd8" strokeWidth="2" fill="#438bd8" fillOpacity="0.12" />
      <rect x="226" y="110" width="70" height="50" rx="10" stroke="#f26a13" strokeWidth="2" fill="#f26a13" fillOpacity="0.1" />
      <circle cx="160" cy="100" r="26" stroke="#04275f" strokeWidth="2" fill="#fff" />
      <path d="M94 100H134M186 80H226M186 120H226" stroke="#04275f" strokeWidth="2" strokeOpacity="0.4" />
      <text x="146" y="105" fill="#04275f" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="700">
        Bus
      </text>
    </svg>
  );
}

export function ResilienceMark(props: MarkProps) {
  return (
    <svg {...base} {...props}>
      <rect x="36" y="48" width="100" height="104" rx="12" stroke="#04275f" strokeWidth="2" fill="#04275f" fillOpacity="0.06" />
      <rect x="184" y="48" width="100" height="104" rx="12" stroke="#438bd8" strokeWidth="2" fill="#438bd8" fillOpacity="0.1" />
      <path d="M136 100H184" stroke="#f26a13" strokeWidth="3" strokeLinecap="round" />
      <path d="M168 88L184 100L168 112" stroke="#f26a13" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="86" cy="84" r="8" fill="#f26a13" fillOpacity="0.8" />
      <circle cx="234" cy="84" r="8" fill="#438bd8" fillOpacity="0.8" />
      <rect x="58" y="110" width="56" height="10" rx="3" fill="#04275f" fillOpacity="0.2" />
      <rect x="206" y="110" width="56" height="10" rx="3" fill="#04275f" fillOpacity="0.2" />
      <rect x="58" y="128" width="40" height="10" rx="3" fill="#04275f" fillOpacity="0.12" />
      <rect x="206" y="128" width="40" height="10" rx="3" fill="#04275f" fillOpacity="0.12" />
    </svg>
  );
}

export function ServiceCategoryMark({
  category,
  className,
}: {
  category: ServiceCategory;
  className?: string;
}) {
  const common = { className, role: "img" as const };
  if (category === "data") return <DataCylinderMark {...common} />;
  if (category === "resilience") return <ResilienceMark {...common} />;
  return <LandingZoneMark {...common} />;
}

/** One distinct mark per service slug so pages do not share visuals. */
export function ServiceSlugMark({ slug, className }: { slug: string; className?: string }) {
  const common = { className, role: "img" as const };
  switch (slug) {
    case "storage":
      return <StorageTiersMark {...common} />;
    case "networking":
      return <NetworkMeshMark {...common} />;
    case "database":
      return <DataCylinderMark {...common} />;
    case "analytics":
      return <AnalyticsPipelineMark {...common} />;
    case "ai":
      return <AiPlatformMark {...common} />;
    case "integration":
      return <IntegrationFlowMark {...common} />;
    case "disaster-recovery":
      return <ResilienceMark {...common} />;
    case "cloud-computing":
    default:
      return <LandingZoneMark {...common} />;
  }
}
