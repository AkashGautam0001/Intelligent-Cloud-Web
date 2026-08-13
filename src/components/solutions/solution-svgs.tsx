import type { SVGProps } from "react";

type MarkProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 320 200",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true as const,
};

export function MigrationWavesMark(props: MarkProps) {
  return (
    <svg {...base} {...props}>
      <rect x="28" y="120" width="60" height="40" rx="8" stroke="#04275f" strokeWidth="2" fill="#04275f" fillOpacity="0.08" />
      <rect x="100" y="90" width="60" height="70" rx="8" stroke="#438bd8" strokeWidth="2" fill="#438bd8" fillOpacity="0.12" />
      <rect x="172" y="60" width="60" height="100" rx="8" stroke="#f26a13" strokeWidth="2" fill="#f26a13" fillOpacity="0.12" />
      <path d="M88 140H100M160 110H172M232 100H280" stroke="#04275f" strokeWidth="2" strokeOpacity="0.35" />
      <circle cx="292" cy="100" r="12" fill="#f26a13" />
      <text x="40" y="145" fill="#04275f" fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600">
        W1
      </text>
      <text x="118" y="130" fill="#04275f" fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600">
        W2
      </text>
      <text x="190" y="115" fill="#04275f" fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600">
        W3
      </text>
    </svg>
  );
}

export function DevOpsPathMark(props: MarkProps) {
  return (
    <svg {...base} {...props}>
      <rect x="24" y="70" width="56" height="60" rx="10" stroke="#04275f" strokeWidth="2" fill="#04275f" fillOpacity="0.06" />
      <rect x="100" y="70" width="56" height="60" rx="10" stroke="#438bd8" strokeWidth="2" fill="#438bd8" fillOpacity="0.12" />
      <rect x="176" y="70" width="56" height="60" rx="10" stroke="#f26a13" strokeWidth="2" fill="#f26a13" fillOpacity="0.1" />
      <rect x="252" y="70" width="44" height="60" rx="10" stroke="#04275f" strokeWidth="2" strokeDasharray="4 4" fill="transparent" />
      <path d="M80 100H100M156 100H176M232 100H252" stroke="#04275f" strokeWidth="2" strokeOpacity="0.35" />
      <text x="36" y="105" fill="#04275f" fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600">
        Build
      </text>
      <text x="112" y="105" fill="#04275f" fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600">
        Gate
      </text>
      <text x="188" y="105" fill="#04275f" fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600">
        Deploy
      </text>
    </svg>
  );
}

export function SecurityShieldMark(props: MarkProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M160 36L240 64V112C240 148 204 172 160 184C116 172 80 148 80 112V64L160 36Z"
        stroke="#04275f"
        strokeWidth="2"
        fill="#04275f"
        fillOpacity="0.06"
      />
      <circle cx="160" cy="108" r="28" stroke="#438bd8" strokeWidth="2" fill="#438bd8" fillOpacity="0.12" />
      <path d="M148 108L156 116L176 96" stroke="#f26a13" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function StartupRocketMark(props: MarkProps) {
  return (
    <svg {...base} {...props}>
      <path d="M160 40C180 70 188 100 184 140L160 168L136 140C132 100 140 70 160 40Z" stroke="#f26a13" strokeWidth="2" fill="#f26a13" fillOpacity="0.12" />
      <circle cx="160" cy="100" r="14" fill="#04275f" fillOpacity="0.15" stroke="#04275f" strokeWidth="2" />
      <path d="M136 140L120 168M184 140L200 168" stroke="#438bd8" strokeWidth="2" strokeLinecap="round" />
      <rect x="40" y="56" width="64" height="28" rx="8" stroke="#04275f" strokeWidth="2" fill="#04275f" fillOpacity="0.06" />
      <rect x="40" y="100" width="64" height="28" rx="8" stroke="#438bd8" strokeWidth="2" fill="#438bd8" fillOpacity="0.1" />
    </svg>
  );
}

export function EnterpriseHubMark(props: MarkProps) {
  return (
    <svg {...base} {...props}>
      <rect x="120" y="70" width="80" height="70" rx="12" stroke="#04275f" strokeWidth="2" fill="#04275f" fillOpacity="0.08" />
      <rect x="28" y="40" width="64" height="44" rx="10" stroke="#438bd8" strokeWidth="2" fill="#438bd8" fillOpacity="0.12" />
      <rect x="28" y="120" width="64" height="44" rx="10" stroke="#438bd8" strokeWidth="2" fill="#438bd8" fillOpacity="0.08" />
      <rect x="228" y="40" width="64" height="44" rx="10" stroke="#f26a13" strokeWidth="2" fill="#f26a13" fillOpacity="0.1" />
      <rect x="228" y="120" width="64" height="44" rx="10" stroke="#f26a13" strokeWidth="2" fill="#f26a13" fillOpacity="0.08" />
      <path d="M92 62H120M92 142H120M200 62H228M200 142H228" stroke="#04275f" strokeWidth="2" strokeOpacity="0.35" />
      <circle cx="160" cy="105" r="8" fill="#f26a13" />
    </svg>
  );
}

export function SolutionSlugMark({ slug, className }: { slug: string; className?: string }) {
  const common = { className, role: "img" as const };
  switch (slug) {
    case "devops-transformation":
      return <DevOpsPathMark {...common} />;
    case "security-compliance":
      return <SecurityShieldMark {...common} />;
    case "startups":
      return <StartupRocketMark {...common} />;
    case "enterprises":
      return <EnterpriseHubMark {...common} />;
    case "cloud-migration":
    default:
      return <MigrationWavesMark {...common} />;
  }
}
