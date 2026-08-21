import { TechBrandIcon } from "@/components/TechBrandIcon";
import { brandsForStackChip } from "@/lib/stack-brands";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

type StackToolsSectionProps = {
  items: string[];
  className?: string;
};

/** Compact technologies line — not a full “Typical Stack” section. */
export function StackToolsSection({ items, className }: StackToolsSectionProps) {
  const { t } = useI18n();

  if (!items.length) return null;

  return (
    <div className={cn("border-y border-border-200 bg-[#eef3f8]", className)}>
      <div className="container-ic py-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-text-600">
          {t.common.technologyPlatforms}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {items.map((label) => {
            const brand = brandsForStackChip(label)[0];
            return (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-navy-900"
              >
                {brand ? <TechBrandIcon brand={brand} size="sm" /> : null}
                {label}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
