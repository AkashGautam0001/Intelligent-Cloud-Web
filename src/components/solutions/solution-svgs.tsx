import { cn } from "@/lib/utils";

import cloudMigrationSrc from "@/assets/solutions/cloud-migration.svg?url";
import devopsSrc from "@/assets/solutions/devops-transformation.svg?url";
import securitySrc from "@/assets/solutions/security-compliance.svg?url";
import startupsSrc from "@/assets/solutions/startups.svg?url";
import enterprisesSrc from "@/assets/solutions/enterprises.svg?url";

const solutionArt: Record<string, { src: string; alt: string }> = {
  "cloud-migration": {
    src: cloudMigrationSrc,
    alt: "Cloud migration path from on-premise to Azure and AWS",
  },
  "devops-transformation": {
    src: devopsSrc,
    alt: "DevOps and GitOps delivery path",
  },
  "security-compliance": {
    src: securitySrc,
    alt: "Layered security and compliance controls",
  },
  startups: {
    src: startupsSrc,
    alt: "Startup cloud platform path",
  },
  enterprises: {
    src: enterprisesSrc,
    alt: "Enterprise platform hub and spokes",
  },
};

type MarkProps = {
  slug: string;
  className?: string;
  variant?: "hero" | "tile";
};

export function SolutionSlugMark({ slug, className, variant = "hero" }: MarkProps) {
  const art = solutionArt[slug] ?? solutionArt["cloud-migration"]!;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[12px] border border-border-200 bg-white",
        variant === "tile" && "bg-[#eef3f8]/60",
        className,
      )}
    >
      <img
        src={art.src}
        alt={art.alt}
        width={640}
        height={220}
        className={cn(
          "block w-full object-contain object-center",
          variant === "tile" ? "h-28 p-2" : "h-auto max-h-[220px] p-2",
        )}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
