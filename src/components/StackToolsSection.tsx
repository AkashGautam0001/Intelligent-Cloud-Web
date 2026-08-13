import { Layers } from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import { IcCard } from "@/components/ui/ic-card";
import { TechBrandIcon } from "@/components/TechBrandIcon";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { brandsForStackChip } from "@/lib/stack-brands";

type StackToolsSectionProps = {
  items: string[];
  lead?: string;
};

/** Shared “Typical stack” block for service & solution detail pages. */
export function StackToolsSection({
  items,
  lead = "Chosen with your team — we work inside Azure, AWS, and Kubernetes ecosystems you already run.",
}: StackToolsSectionProps) {
  if (!items.length) return null;

  return (
    <SectionShell
      tone="navyLight"
      eyebrow="Typical stack"
      title="Tools we commonly wire in"
      lead={lead}
    >
      <Stagger className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3" stagger={0.05}>
        {items.map((label, index) => {
          const brands = brandsForStackChip(label);
          return (
            <StaggerItem key={label}>
              <IcCard interactive className="flex h-full items-center gap-4 p-4 sm:p-5">
                <div className="flex shrink-0 items-center">
                  {brands.length > 0 ? (
                    <div className="flex items-center">
                      {brands.map((brand, i) => (
                        <span
                          key={brand.id}
                          className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-border-200 bg-white shadow-[0_1px_0_rgba(4,39,95,0.04)]"
                          style={{ marginLeft: i === 0 ? 0 : -10, zIndex: brands.length - i }}
                        >
                          <TechBrandIcon brand={brand} size="md" />
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-border-200 bg-white text-orange-500">
                      <Layers className="h-5 w-5" aria-hidden />
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-orange-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 font-display text-sm font-semibold leading-snug text-navy-900 sm:text-[15px]">
                    {label}
                  </p>
                </div>
              </IcCard>
            </StaggerItem>
          );
        })}
      </Stagger>
    </SectionShell>
  );
}
