import { TechBrandChip } from "@/components/TechBrandIcon";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { primaryTechBrands } from "@/lib/tech-brands";
import { useI18n } from "@/i18n";

/** Trust strip — continuous LTR marquee (forced LTR so RTL page dir doesn't break the loop). */
export function TrustBar() {
  const { t } = useI18n();
  const brands = primaryTechBrands();
  const reduced = usePrefersReducedMotion();
  // Triple the set so the track is always wider than the viewport on large screens.
  const loop = [...brands, ...brands, ...brands];

  return (
    <section className="border-y border-navy-900/20 bg-navy-900 py-10">
      <div className="container-ic">
        <div className="relative" dir="ltr">
          <p className="sr-only">
            {t.common.technologyPlatforms}: {brands.map((b) => b.name).join(", ")}
          </p>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 start-0 z-10 w-10 bg-gradient-to-r from-navy-900 to-transparent sm:w-16"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 end-0 z-10 w-10 bg-gradient-to-l from-navy-900 to-transparent sm:w-16"
          />

          <div className="overflow-hidden" aria-hidden>
            {reduced ? (
              <div className="flex flex-wrap justify-center gap-4">
                {brands.map((brand) => (
                  <TechBrandChip
                    key={brand.id}
                    brand={brand}
                    size="lg"
                    className="shrink-0"
                  />
                ))}
              </div>
            ) : (
              <div className="ic-marquee flex w-max gap-4">
                {loop.map((brand, i) => (
                  <TechBrandChip
                    key={`${brand.id}-${i}`}
                    brand={brand}
                    size="lg"
                    className="shrink-0"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
