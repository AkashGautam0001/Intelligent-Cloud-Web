import { TechBrandChip } from "@/components/TechBrandIcon";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { primaryTechBrands } from "@/lib/tech-brands";

/** Trust strip — brand marquee aligned to navbar container width. */
export function TrustBar() {
  const brands = primaryTechBrands();
  const reduced = usePrefersReducedMotion();
  const loop = [...brands, ...brands];

  return (
    <section className="border-y border-border-200 bg-[#eef3f8] py-10">
      <div className="container-ic">
        <div className="relative">
          <p className="sr-only">
            Technology platforms: {brands.map((b) => b.name).join(", ")}
          </p>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#eef3f8] to-transparent sm:w-16"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#eef3f8] to-transparent sm:w-16"
          />

          <div className="overflow-hidden" aria-hidden>
            <div
              className={
                reduced
                  ? "flex flex-wrap justify-center gap-4"
                  : "ic-marquee flex w-max gap-4"
              }
            >
              {(reduced ? brands : loop).map((brand, i) => (
                <TechBrandChip
                  key={`${brand.id}-${i}`}
                  brand={brand}
                  size="lg"
                  className="shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
