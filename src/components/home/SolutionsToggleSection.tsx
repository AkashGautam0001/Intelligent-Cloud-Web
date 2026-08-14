import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ClipboardList,
  CloudCog,
  FlaskConical,
  GitBranch,
  Layers,
  MapPinned,
  Radar,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { listSolutionPages } from "@/content/solutions";
import { SectionShell } from "@/components/ui/section-shell";
import { IcCard } from "@/components/ui/ic-card";
import { IcIconTile } from "@/components/ui/ic-icon-tile";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n";

type Audience = "startup" | "enterprise";

export function SolutionsToggleSection() {
  const { t, locale } = useI18n();
  const s = t.home.solutionsToggle;
  const reduced = usePrefersReducedMotion();
  const [audience, setAudience] = useState<Audience>("enterprise");

  const pathByAudience = useMemo(
    () => ({
      startup: [
        {
          title: s.startupPath.pilot.title,
          body: s.startupPath.pilot.body,
          Icon: FlaskConical,
        },
        {
          title: s.startupPath.landingZone.title,
          body: s.startupPath.landingZone.body,
          Icon: MapPinned,
        },
        {
          title: s.startupPath.gitops.title,
          body: s.startupPath.gitops.body,
          Icon: GitBranch,
        },
        {
          title: s.startupPath.scale.title,
          body: s.startupPath.scale.body,
          Icon: TrendingUp,
        },
      ],
      enterprise: [
        {
          title: s.enterprisePath.assess.title,
          body: s.enterprisePath.assess.body,
          Icon: ClipboardList,
        },
        {
          title: s.enterprisePath.migrate.title,
          body: s.enterprisePath.migrate.body,
          Icon: CloudCog,
        },
        {
          title: s.enterprisePath.platform.title,
          body: s.enterprisePath.platform.body,
          Icon: Layers,
        },
        {
          title: s.enterprisePath.manage.title,
          body: s.enterprisePath.manage.body,
          Icon: Radar,
        },
      ],
    }),
    [s],
  );

  const filtered = useMemo(() => {
    return listSolutionPages(locale).filter((page) => {
      if (audience === "startup") {
        return (
          page.slug === "startups" ||
          page.audiences.includes("startup") ||
          page.audiences.includes("both")
        );
      }
      return (
        page.slug === "enterprises" ||
        page.audiences.includes("enterprise") ||
        page.audiences.includes("both")
      );
    });
  }, [audience, locale]);

  const path = pathByAudience[audience];

  const fade = reduced
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      };

  return (
    <SectionShell tone="navyLight" eyebrow={s.eyebrow} title={s.title} lead={s.lead}>
      <div
        className="inline-flex rounded-[12px] border border-border-200 bg-surface-50 p-1"
        role="tablist"
        aria-label={s.audienceLabel}
      >
        {(
          [
            { id: "startup" as const, label: s.startups, Icon: Rocket },
            { id: "enterprise" as const, label: s.enterprises, Icon: Building2 },
          ] as const
        ).map(({ id, label, Icon }) => {
          const active = audience === id;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setAudience(id)}
              className={cn(
                "relative inline-flex items-center gap-2 rounded-[10px] px-4 py-2.5 text-sm font-medium transition-colors",
                active ? "text-navy-900" : "text-text-600 hover:text-navy-900",
              )}
            >
              {active && !reduced ? (
                <motion.span
                  layoutId="solutions-audience-pill"
                  className="absolute inset-0 rounded-[10px] bg-white shadow-[0_8px_24px_-12px_rgba(4,39,95,0.35)]"
                  transition={{ type: "spring", stiffness: 90, damping: 28, mass: 1.1 }}
                />
              ) : active ? (
                <span className="absolute inset-0 rounded-[10px] bg-white shadow-[0_8px_24px_-12px_rgba(4,39,95,0.35)]" />
              ) : null}
              <Icon className="relative h-4 w-4" aria-hidden />
              <span className="relative">{label}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`path-${audience}`}
          className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          initial={fade.initial}
          animate={fade.animate}
          exit={fade.exit}
          transition={{ duration: reduced ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {path.map((step, i) => (
            <motion.div
              key={step.title}
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: reduced ? 0 : 0.12 * i,
                duration: reduced ? 0 : 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <IcCard className="group relative h-full overflow-hidden p-5 transition-colors duration-700 hover:border-orange-500/30">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-orange-500 to-[#ff8a3d] transition-transform duration-700 ease-out group-hover:scale-x-100"
                />
                <div className="flex items-center justify-between gap-3">
                  <IcIconTile size="sm">
                    <step.Icon className="h-4 w-4" aria-hidden />
                  </IcIconTile>
                  <p className="font-mono text-[11px] tracking-[0.14em] text-orange-500">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="font-display mt-3 text-base font-semibold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-600">{step.body}</p>
              </IcCard>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mt-10">
        <div className="mb-4 flex items-end justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-600">
            {s.matchingSolutions}
          </p>
          <Link
            to="/solutions"
            className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500 hover:underline"
          >
            {t.common.viewAll} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {filtered.length === 0 ? (
          <IcCard className="bg-surface-50 p-6 text-center text-sm text-text-600">
            {s.empty}
          </IcCard>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`list-${audience}`}
              className="grid gap-4 md:grid-cols-2"
              initial={fade.initial}
              animate={fade.animate}
              exit={fade.exit}
              transition={{ duration: reduced ? 0 : 0.85 }}
            >
              {filtered.map((solution, i) => (
                <motion.div
                  key={solution.slug}
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: reduced ? 0 : 0.12 * i,
                    duration: reduced ? 0 : 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link to={`/solutions/${solution.slug}`} className="block h-full">
                    <IcCard interactive className="group flex h-full flex-col p-6">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-lg font-semibold text-navy-900 transition-colors duration-700 group-hover:text-orange-500">
                          {solution.title}
                        </h3>
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-200 bg-surface-50 text-navy-900 transition-colors duration-700 group-hover:border-orange-500/40 group-hover:bg-orange-500/10 group-hover:text-orange-500">
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                        </span>
                      </div>
                      <p className="mt-2 text-sm font-medium text-navy-900/75">{solution.tagline}</p>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-600">
                        {solution.summary}
                      </p>
                      <ul className="mt-4 space-y-2 border-t border-border-200 pt-4">
                        {solution.highlights.slice(0, 3).map((h) => (
                          <li key={h.title} className="flex gap-2 text-sm text-text-600">
                            <span
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-500"
                              aria-hidden
                            />
                            {h.title}
                          </li>
                        ))}
                      </ul>
                    </IcCard>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </SectionShell>
  );
}
