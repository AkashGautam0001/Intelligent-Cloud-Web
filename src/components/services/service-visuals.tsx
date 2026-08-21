import { cn } from "@/lib/utils";

import cloudComputingWeb from "@/assets/services/cloud-computing-web.png";
import cloudComputingMobile from "@/assets/services/cloud-computing-mobile.png";
import cloudStorageWeb from "@/assets/services/cloud-storage-web.png";
import cloudStorageMobile from "@/assets/services/cloud-storage-mobile.png";
import networkingWeb from "@/assets/services/networking-web.png";
import networkingMobile from "@/assets/services/networking-mobile.png";
import databaseWeb from "@/assets/services/database-web.png";
import databaseMobile from "@/assets/services/database-mobile.png";
import analyticsWeb from "@/assets/services/analytics-web.png";
import analyticsMobile from "@/assets/services/analytics-mobile.png";
import aiWeb from "@/assets/services/ai-web.png";
import aiMobile from "@/assets/services/ai-mobile.png";

export type ServiceDiagramPair = {
  web: string;
  mobile: string;
  alt: string;
};

const serviceDiagrams: Record<string, ServiceDiagramPair> = {
  "cloud-computing": {
    web: cloudComputingWeb,
    mobile: cloudComputingMobile,
    alt: "Cloud computing architecture",
  },
  storage: {
    web: cloudStorageWeb,
    mobile: cloudStorageMobile,
    alt: "Storage architecture",
  },
  networking: {
    web: networkingWeb,
    mobile: networkingMobile,
    alt: "Networking architecture",
  },
  database: {
    web: databaseWeb,
    mobile: databaseMobile,
    alt: "Database architecture",
  },
  analytics: {
    web: analyticsWeb,
    mobile: analyticsMobile,
    alt: "Analytics architecture",
  },
  ai: {
    web: aiWeb,
    mobile: aiMobile,
    alt: "AI architecture",
  },
};

export function getServiceDiagram(slug: string): ServiceDiagramPair | undefined {
  return serviceDiagrams[slug];
}

export function hasServiceDiagram(slug: string): boolean {
  return Boolean(serviceDiagrams[slug]);
}

type ServiceDiagramProps = {
  slug: string;
  className?: string;
  alt?: string;
};

/** Responsive service architecture diagram — mobile asset on small screens, web on md+. */
export function ServiceDiagram({ slug, className, alt }: ServiceDiagramProps) {
  const art = serviceDiagrams[slug];
  if (!art) return null;

  const label = alt ?? art.alt;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[16px] bg-white p-3 sm:p-6",
        className,
      )}
    >
      <img
        src={art.mobile}
        alt={label}
        width={720}
        height={1280}
        className="mx-auto block h-auto w-full max-w-md object-contain md:hidden"
        loading="lazy"
        decoding="async"
      />
      <img
        src={art.web}
        alt={label}
        width={1280}
        height={720}
        className="mx-auto hidden h-auto w-full max-w-5xl object-contain md:block"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
