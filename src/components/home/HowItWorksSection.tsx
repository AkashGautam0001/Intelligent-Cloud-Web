import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { easeOut } from "@/lib/motion";
import { pickIcon } from "@/lib/section-icons";
import { useI18n } from "@/i18n";
import assessArt from "@/assets/homepage/how-it-works-access.png";
import designArt from "@/assets/homepage/how-it-works-design.png";
import buildArt from "@/assets/homepage/how-it-works-build.png";
import operateArt from "@/assets/homepage/how-it-works-operate.png";

type PointCard = {
  title: string;
  body: string;
};

type Step = {
  id: string;
  title: string;
  art: string;
  points: PointCard[];
};

const PANEL =
  "h-[min(70vh,36rem)] min-h-[24rem]";

export function HowItWorksSection() {
  const { t } = useI18n();
  const h = t.home.howItWorks;
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const steps: Step[] = useMemo(
    () => [
      {
        id: "assess",
        title: h.assess.title,
        art: assessArt,
        points: [
          { title: "Inventory", body: h.assess.points.inventory },
          { title: "Heatmaps", body: h.assess.points.heatmaps },
          { title: "Migration waves", body: h.assess.points.waves },
          { title: "Gap analysis", body: h.assess.points.gap },
        ],
      },
      {
        id: "design",
        title: h.design.title,
        art: designArt,
        points: [
          { title: "Architecture", body: h.design.points.architecture },
          { title: "Identity", body: h.design.points.identity },
          { title: "Blueprints", body: h.design.points.blueprints },
          { title: "Contracts", body: h.design.points.contracts },
        ],
      },
      {
        id: "build",
        title: h.build.title,
        art: buildArt,
        points: [
          { title: "Terraform", body: h.build.points.terraform },
          { title: "CI/CD", body: h.build.points.cicd },
          { title: "GitOps", body: h.build.points.gitops },
          { title: "Observability", body: h.build.points.observability },
        ],
      },
      {
        id: "operate",
        title: h.operate.title,
        art: operateArt,
        points: [
          { title: "Managed ops", body: h.operate.points.managed },
          { title: "Drift control", body: h.operate.points.drift },
          { title: "FinOps", body: h.operate.points.finops },
          { title: "Retros", body: h.operate.points.retros },
        ],
      },
    ],
    [h],
  );

  const flatPoints = useMemo(
    () =>
      steps.flatMap((step, stepIndex) =>
        step.points.map((point, pointIndex) => ({
          ...point,
          stepIndex,
          key: `${step.id}-${point.title}`,
          Icon: pickIcon(stepIndex * 4 + pointIndex),
        })),
      ),
    [steps],
  );

  // Page scroll drives content through the clipped window (exit top / enter bottom)
  useEffect(() => {
    const track = trackRef.current;
    const panel = panelRef.current;
    const content = contentRef.current;
    if (!track || !panel || !content) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const trackRect = track.getBoundingClientRect();
      const trackTop = window.scrollY + trackRect.top;
      const scrollable = Math.max(track.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(
        1,
        Math.max(0, (window.scrollY - trackTop) / scrollable),
      );

      const maxShift = Math.max(content.scrollHeight - panel.clientHeight, 0);
      content.style.transform = `translate3d(0, ${-progress * maxShift}px, 0)`;

      // Active step from which card sits nearest the panel center
      const panelMid = panel.getBoundingClientRect().top + panel.clientHeight / 2;
      let best = 0;
      let bestDist = Number.POSITIVE_INFINITY;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - panelMid);
        if (dist < bestDist) {
          bestDist = dist;
          best = flatPoints[i]?.stepIndex ?? 0;
        }
      });
      setActive(best);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [flatPoints]);

  const activeStep = steps[active]!;

  return (
    <SectionShell
      tone="soft"
      eyebrow={h.eyebrow}
      title={h.title}
      lead={h.lead}
      className="[&_.section-shell-body]:mt-8 lg:[&_.section-shell-body]:mt-10"
    >
      {/* Desktop: tall track so sticky window can scrub through all cards */}
      <div ref={trackRef} className="relative hidden lg:block lg:h-[280vh]">
        <div className="sticky top-24 grid grid-cols-2 items-stretch gap-10 xl:gap-12">
          {/* Left: rounded image — section-tone fill */}
          <div
            className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#eef3f8] p-4 ${PANEL}`}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStep.id}
                src={activeStep.art}
                alt={activeStep.title}
                width={1200}
                height={900}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: reduced ? 0 : 0.35, ease: easeOut }}
                className="h-full w-full select-none object-contain mix-blend-multiply"
                draggable={false}
              />
            </AnimatePresence>
          </div>

          {/* Right: clipped window — cards exit top / enter bottom */}
          <div
            ref={panelRef}
            className={`relative overflow-hidden rounded-2xl bg-transparent ${PANEL}`}
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <div
              ref={contentRef}
              className="relative space-y-8 py-10 will-change-transform sm:space-y-10 sm:py-12"
            >
              {/* Bold timeline through circle centers (h-9 → mid at 18px) */}
              <div
                aria-hidden
                className="absolute bottom-10 left-[18px] top-10 w-[3px] -translate-x-1/2 rounded-full bg-navy-900/35 sm:bottom-12 sm:top-12"
              />

              {flatPoints.map((point, i) => (
                <div key={point.key}>
                  <div
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    className="relative flex items-start gap-4"
                  >
                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-semibold text-white">
                      {(i % 4) + 1}
                    </span>
                    <div className="min-w-0 py-0.5">
                      <div className="flex items-center gap-2">
                        <point.Icon
                          className="h-4 w-4 text-orange-500"
                          aria-hidden
                        />
                        <h4 className="font-display text-base font-semibold text-navy-900">
                          {point.title}
                        </h4>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-text-600">
                        {point.body}
                      </p>
                    </div>
                  </div>

                  {/* Phase boundary: after 4 → before next 1 */}
                  {(i + 1) % 4 === 0 && i < flatPoints.length - 1 ? (
                    <div
                      aria-hidden
                      className="ml-[18px] py-6 sm:py-8"
                    >
                      <div className="h-px w-full bg-navy-900/20" />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: simple stacked list */}
      <div className="mt-8 space-y-8 lg:hidden">
        {steps.map((step, stepIndex) => (
          <div key={step.id} className="space-y-8">
            <div className="overflow-hidden rounded-2xl bg-[#eef3f8] p-3">
              <img
                src={step.art}
                alt={step.title}
                width={900}
                height={700}
                className="mx-auto block h-auto w-full max-w-sm select-none object-contain mix-blend-multiply"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>
            <div className="relative space-y-8">
              <div
                aria-hidden
                className="absolute bottom-3 left-[18px] top-3 w-[3px] -translate-x-1/2 rounded-full bg-navy-900/35"
              />
              {step.points.map((point, pointIndex) => {
                const PointIcon = pickIcon(stepIndex * 4 + pointIndex);
                const isLastInPhase = pointIndex === step.points.length - 1;
                const hasNextPhase = stepIndex < steps.length - 1;
                return (
                  <div key={point.title}>
                    <div className="relative flex items-start gap-4">
                      <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-semibold text-white">
                        {pointIndex + 1}
                      </span>
                      <div className="min-w-0 py-0.5">
                        <div className="flex items-center gap-2">
                          <PointIcon className="h-4 w-4 text-orange-500" aria-hidden />
                          <h4 className="font-display text-base font-semibold text-navy-900">
                            {point.title}
                          </h4>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-text-600">
                          {point.body}
                        </p>
                      </div>
                    </div>
                    {isLastInPhase && hasNextPhase ? (
                      <div aria-hidden className="ml-[18px] py-6">
                        <div className="h-px w-full bg-navy-900/20" />
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
