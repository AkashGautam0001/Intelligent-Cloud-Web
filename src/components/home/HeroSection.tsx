import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroAtmosphere } from "@/components/home/HeroAtmosphere";
import { TechBrandIcon } from "@/components/TechBrandIcon";
import { useI18n } from "@/i18n";
import { whatsappExpertUrl } from "@/lib/whatsapp";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

const platforms = [
  { id: "azure", label: "Azure" },
  { id: "aws", label: "AWS" },
  { id: "kubernetes", label: "Kubernetes" },
] as const;

function PlatformRow({ reduced }: { reduced: boolean }) {
  return (
    <div className="mb-5 flex flex-wrap items-center justify-center gap-3 sm:mb-6 sm:gap-0">
      {platforms.map((p, i) => (
        <motion.div
          key={p.id}
          className={cn(
            "ic-platform-shake flex cursor-default items-center gap-2 sm:px-5",
            i > 0 && "sm:border-s sm:border-navy-900/12",
          )}
          initial={reduced ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduced ? 0 : 0.45,
            delay: reduced ? 0 : 0.08 + i * 0.08,
            ease: easeOut,
          }}
        >
          <TechBrandIcon brand={p.id} size="md" />
          <span className="text-[12px] font-semibold tracking-wide text-navy-900/75 sm:text-[13px]">
            {p.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function MaskedHeadline({
  reduced,
  line1,
  line2,
}: {
  reduced: boolean;
  line1: string;
  line2: string;
}) {
  return (
    <h1 className="relative max-w-5xl text-center font-display text-[clamp(2.65rem,5.8vw,4.65rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-navy-900">
      {[line1, line2].map((line, i) => (
        <span key={line} className="relative block overflow-hidden">
          <motion.span
            className="relative z-[1] block"
            initial={reduced ? false : { y: "110%", opacity: 0.2 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: reduced ? 0 : 0.9,
              delay: reduced ? 0 : 0.35 + i * 0.16,
              ease: easeOut,
            }}
          >
            {i === 1 ? <span className="text-navy-900/90">— {line}</span> : line}
          </motion.span>
          {!reduced ? (
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-y-1 start-0 z-[2] w-[18%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-azure-500/45 to-transparent"
              initial={{ left: "-20%", opacity: 0 }}
              animate={{ left: ["-20%", "110%"], opacity: [0, 1, 0] }}
              transition={{
                duration: 0.85,
                delay: 0.45 + i * 0.16,
                ease: easeOut,
              }}
            />
          ) : null}
        </span>
      ))}
    </h1>
  );
}

function MorphKeywords({
  reduced,
  prefix,
  keywords,
}: {
  reduced: boolean;
  prefix: string;
  keywords: readonly string[];
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced || keywords.length <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % keywords.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [reduced, keywords.length]);

  const current = keywords[index] ?? keywords[0] ?? "";
  const longest = useMemo(
    () => keywords.reduce((a, b) => (b.length > a.length ? b : a), ""),
    [keywords],
  );

  return (
    <p className="mt-4 flex min-h-[2.5rem] flex-wrap items-center justify-center gap-x-1.5 text-center font-display text-[clamp(1.3rem,2.5vw,1.85rem)] font-semibold tracking-[-0.02em]">
      <span className="text-text-600">{prefix}</span>
      <span className="relative inline-grid text-start text-orange-500">
        <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden>
          {longest}
        </span>
        <span className="relative col-start-1 row-start-1 h-[1.35em] overflow-hidden whitespace-nowrap">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={current}
              className="absolute inset-x-0 top-0"
              initial={
                reduced ? false : { y: "85%", opacity: 0, filter: "blur(5px)" }
              }
              animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
              exit={
                reduced
                  ? undefined
                  : { y: "-75%", opacity: 0, filter: "blur(5px)" }
              }
              transition={{ duration: reduced ? 0 : 0.7, ease: easeOut }}
            >
              {current}
            </motion.span>
          </AnimatePresence>
        </span>
      </span>
    </p>
  );
}

function FlowArrow({ className }: { className?: string }) {
  return (
    <ArrowRight
      className={cn("relative h-4 w-4", className)}
      aria-hidden
    />
  );
}

export function HeroSection() {
  const { t } = useI18n();
  const reduced = usePrefersReducedMotion();
  const h = t.home.hero;
  const keywords = useMemo(
    () =>
      [
        h.keywords.finopsGuardrails,
        h.keywords.costGuardrails,
        h.keywords.cloudGuardrails,
        h.keywords.securityGuardrails,
      ] as const,
    [h.keywords],
  );

  return (
    <section className="relative overflow-hidden bg-white text-navy-900">
      <HeroAtmosphere reduced={reduced} />

      <div className="container-ic relative z-10 mx-auto pb-20 pt-28 text-center sm:pt-32 lg:pb-28 lg:pt-36">
        <div className="pointer-events-auto mx-auto flex w-full max-w-5xl flex-col items-center">
          <PlatformRow reduced={reduced} />

          <MaskedHeadline
            reduced={reduced}
            line1={h.titleLine1}
            line2={h.titleLine2}
          />
          <span className="sr-only">{h.title}</span>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduced ? 0 : 0.55,
              delay: reduced ? 0 : 0.95,
              ease: easeOut,
            }}
            className="w-full"
          >
            <MorphKeywords
              reduced={reduced}
              prefix={h.weEngineer}
              keywords={keywords}
            />
          </motion.div>

          <motion.p
            className="mt-4 max-w-2xl text-[clamp(1.05rem,1.45vw,1.2rem)] leading-[1.7] text-text-600"
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduced ? 0 : 0.55,
              delay: reduced ? 0 : 1.1,
              ease: easeOut,
            }}
          >
            {h.lead}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-9"
            initial={reduced ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reduced ? 0 : 0.5,
              delay: reduced ? 0 : 1.25,
              ease: easeOut,
            }}
          >
            <Button asChild size="lg">
              <Link to="/book-demo">
                {t.nav.bookDemo} <FlowArrow />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href={whatsappExpertUrl(t.whatsapp.defaultMessage)}
                target="_blank"
                rel="noreferrer"
              >
                {t.common.talkExpert}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
