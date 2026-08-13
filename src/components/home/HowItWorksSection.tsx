import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  Check,
  ClipboardList,
  LayoutTemplate,
  Blocks,
  type LucideIcon,
} from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { easeOut, springSlow, staggerSlow } from "@/lib/motion";
import { cn } from "@/lib/utils";

const steps: {
  id: string;
  title: string;
  blurb: string;
  Icon: LucideIcon;
  accent: string;
  points: string[];
}[] = [
  {
    id: "assess",
    title: "Assess",
    blurb: "Map the estate before you move a single workload.",
    Icon: ClipboardList,
    accent: "from-orange-500 to-azure-500",
    points: [
      "Estate inventory across accounts and subscriptions",
      "Cost, risk, and dependency heatmaps",
      "Migration waves ranked by business criticality",
      "Gap analysis vs landing-zone and IAM baselines",
    ],
  },
  {
    id: "design",
    title: "Design",
    blurb: "Architecture and contracts your auditors can follow.",
    Icon: LayoutTemplate,
    accent: "from-orange-500 to-navy-900",
    points: [
      "Target architecture and network topology",
      "Identity model, secrets, and break-glass",
      "Platform blueprints for AKS/EKS and data tiers",
      "SLO and RPO/RTO contracts written early",
    ],
  },
  {
    id: "build",
    title: "Build",
    blurb: "Infrastructure as code with promotion gates.",
    Icon: Blocks,
    accent: "from-orange-500 to-[#e85a0a]",
    points: [
      "Terraform modules and policy-as-code",
      "CI/CD promotion with environment gates",
      "GitOps for cluster desired state",
      "Observability baselines from day one",
    ],
  },
  {
    id: "operate",
    title: "Operate",
    blurb: "Runbooks, FinOps, and ownership that stick.",
    Icon: Activity,
    accent: "from-navy-900 to-azure-500",
    points: [
      "Managed operations with clear escalation",
      "Drift detection and patch windows",
      "FinOps reviews and capacity planning",
      "Incident retros that change the platform",
    ],
  },
];

export function HowItWorksSection() {
  const [active, setActive] = useState(0);
  const reduced = usePrefersReducedMotion();
  const step = steps[active];

  return (
    <SectionShell
      tone="white"
      eyebrow="How it works"
      title="Assess → Design → Build → Operate"
      lead="A repeatable engagement model. Each phase produces artifacts your team can own — not a black-box handoff."
    >
      <div className="relative">
        {/* Connector sits behind solid cards — only visible in the gaps */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[6%] right-[6%] top-[42px] z-0 hidden h-px bg-border-200 lg:block"
        >
          <motion.div
            className="h-full origin-left bg-gradient-to-r from-orange-500 via-[#ff8a3d] to-orange-500/70"
            initial={false}
            animate={{ scaleX: (active + 1) / steps.length }}
            transition={reduced ? { duration: 0 } : springSlow}
            style={{ transformOrigin: "left" }}
          />
        </div>

        <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((s, i) => {
            const isActive = active === i;
            const isPast = i < active;
            const Icon = s.Icon;

            return (
              <motion.button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: reduced ? 0 : staggerSlow * i,
                  duration: reduced ? 0 : 0.9,
                  ease: easeOut,
                }}
                className={cn(
                  "group/card relative isolate overflow-hidden rounded-[14px] border bg-white p-5 text-left outline-none",
                  "transition-[border-color,background-color,transform] duration-700 ease-out",
                  "focus-visible:ring-2 focus-visible:ring-orange-500/40 focus-visible:ring-offset-2",
                  isActive
                    ? "border-orange-500/55"
                    : "border-border-200 hover:border-orange-500/40",
                )}
                aria-pressed={isActive}
                aria-controls="how-it-works-detail"
              >
                {isActive ? (
                  <motion.span
                    layoutId={reduced ? undefined : "how-it-works-glow"}
                    className="pointer-events-none absolute inset-0 rounded-[14px] bg-gradient-to-br from-orange-500/[0.07] via-transparent to-azure-500/[0.08]"
                    transition={reduced ? { duration: 0 } : springSlow}
                  />
                ) : null}

                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 top-0 z-[1] h-0.5 origin-left bg-gradient-to-r from-orange-500 to-[#ff8a3d] transition-transform duration-700 ease-out",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover/card:scale-x-100",
                  )}
                />

                <div className="relative z-[1] flex items-start justify-between gap-3">
                  <span
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-[12px] transition-[color,background-color,transform] duration-500 ease-out",
                      isActive
                        ? `bg-gradient-to-br ${s.accent} text-white`
                        : isPast
                          ? "bg-navy-900 text-white"
                          : "bg-surface-50 text-navy-900 ring-1 ring-border-200 group-hover/card:rotate-12 group-hover/card:scale-110 group-hover/card:bg-orange-500/10 group-hover/card:text-orange-500 group-hover/card:ring-orange-500/30",
                    )}
                  >
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.85} aria-hidden />
                  </span>
                  <span
                    className={cn(
                      "font-mono text-[11px] tracking-[0.16em] transition-colors duration-700",
                      isActive ? "text-orange-500" : "text-text-600/70",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-display relative z-[1] mt-4 text-lg font-semibold text-navy-900">
                  {s.title}
                </h3>
                <p className="relative z-[1] mt-1.5 text-sm leading-relaxed text-text-600">
                  {s.blurb}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 lg:mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            id="how-it-works-detail"
            role="region"
            aria-live="polite"
            aria-label={`${step.title} phase details`}
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.75, ease: easeOut }}
            className="overflow-hidden rounded-[16px] border border-border-200 bg-surface-50"
          >
            <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="relative overflow-hidden border-b border-border-200 bg-navy-950 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br opacity-40 blur-3xl",
                    step.accent,
                  )}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />

                <p className="relative font-mono text-[11px] uppercase tracking-[0.16em] text-azure-100/60">
                  Phase {String(active + 1).padStart(2, "0")} of{" "}
                  {String(steps.length).padStart(2, "0")}
                </p>
                <div className="relative mt-5 flex items-center gap-4">
                  <span
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-[14px] bg-gradient-to-br text-white",
                      step.accent,
                    )}
                  >
                    <step.Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/55">{step.blurb}</p>
                  </div>
                </div>

                <div className="relative mt-8 flex items-center gap-2">
                  {steps.map((s, i) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`Go to ${s.title}`}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-700 ease-out",
                        i === active
                          ? "w-8 bg-orange-500"
                          : i < active
                            ? "w-4 bg-azure-500/70 hover:bg-azure-500"
                            : "w-4 bg-white/20 hover:bg-white/40",
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-600">
                  What you get
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {step.points.map((point, i) => (
                    <motion.li
                      key={point}
                      initial={reduced ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: reduced ? 0 : 0.12 + i * 0.1,
                        duration: reduced ? 0 : 0.8,
                        ease: easeOut,
                      }}
                      className="group/item flex gap-3 rounded-[12px] border border-transparent bg-surface-50 p-3.5 transition-colors duration-700 ease-out hover:border-azure-500/25 hover:bg-azure-100/40"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-azure-500 text-white">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                      </span>
                      <span className="text-sm leading-relaxed text-text-600 group-hover/item:text-navy-900">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionShell>
  );
}
