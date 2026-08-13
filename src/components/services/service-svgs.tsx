import { cn } from "@/lib/utils";
import type { ServiceCategory } from "@/content/services/types";

import cloudComputingSrc from "@/assets/services/cloud-computing.svg?url";
import storageSrc from "@/assets/services/storage.svg?url";
import networkingSrc from "@/assets/services/networking.svg?url";
import databaseSrc from "@/assets/services/database.svg?url";
import analyticsSrc from "@/assets/services/analytics.svg?url";
import aiSrc from "@/assets/services/ai.svg?url";
import integrationSrc from "@/assets/services/integration.svg?url";
import disasterRecoverySrc from "@/assets/services/disaster-recovery.svg?url";

const serviceArt: Record<string, { src: string; alt: string }> = {
  "cloud-computing": {
    src: cloudComputingSrc,
    alt: "Cloud computing landing zone",
  },
  storage: { src: storageSrc, alt: "Cloud storage lifecycle" },
  networking: { src: networkingSrc, alt: "Hub and spoke networking" },
  database: { src: databaseSrc, alt: "Managed database primary and replica" },
  analytics: { src: analyticsSrc, alt: "Analytics data pipeline" },
  ai: { src: aiSrc, alt: "AI platform RAG architecture" },
  integration: {
    src: integrationSrc,
    alt: "API and event integration architecture",
  },
  "disaster-recovery": {
    src: disasterRecoverySrc,
    alt: "Multi-region disaster recovery",
  },
};

type MarkProps = {
  slug: string;
  className?: string;
  variant?: "hero" | "tile";
};

export function ServiceSlugMark({ slug, className, variant = "hero" }: MarkProps) {
  const art = serviceArt[slug] ?? serviceArt["cloud-computing"]!;

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

export function ServiceCategoryMark({
  category,
  className,
}: {
  category: ServiceCategory;
  className?: string;
}) {
  const slug =
    category === "data"
      ? "database"
      : category === "resilience"
        ? "disaster-recovery"
        : "cloud-computing";
  return <ServiceSlugMark slug={slug} className={className} variant="tile" />;
}
