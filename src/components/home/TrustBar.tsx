import { TechBrandIcon } from "@/components/TechBrandIcon";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { primaryTechBrands } from "@/lib/tech-brands";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

/** Light modern trust strip — continuous LTR marquee before FAQ. */
export function TrustBar() {
  const { t } = useI18n();
  const brands = primaryTechBrands();
  const reduced = usePrefersReducedMotion();
  const loop = [...brands, ...brands, ...brands];

  return (
    <section className="relative overflow-hidden border-y border-navy-900/6 bg-[#eef3f8] py-12 sm:py-14">
      <div className="container-ic">
        <p className="mb-7 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-navy-900/45">
          {t.common.technologyPlatforms}
        </p>

        <div className="relative" dir="ltr">
          <p className="sr-only">
            {t.common.technologyPlatforms}: {brands.map((b) => b.name).join(", ")}
          </p>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 start-0 z-10 w-12 bg-gradient-to-r from-[#eef3f8] to-transparent sm:w-20"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 end-0 z-10 w-12 bg-gradient-to-l from-[#eef3f8] to-transparent sm:w-20"
          />

          <div className="overflow-hidden" aria-hidden>
            {reduced ? (
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-5">
                {brands.map((brand) => (
                  <TrustItem key={brand.id} brand={brand} />
                ))}
              </div>
            ) : (
              <div className="ic-marquee flex w-max items-center gap-10 sm:gap-12">
                {loop.map((brand, i) => (
                  <TrustItem key={`${brand.id}-${i}`} brand={brand} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({
  brand,
}: {
  brand: ReturnType<typeof primaryTechBrands>[number];
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-2.5 text-navy-900/70",
        "transition-colors duration-200 hover:text-navy-900",
      )}
    >
      <TechBrandIcon brand={brand} size="lg" className="opacity-90" />
      <span className="font-mono text-[12px] uppercase tracking-[0.14em] sm:text-[13px]">
        {brand.name}
      </span>
    </span>
  );
}
