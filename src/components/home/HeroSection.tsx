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
  { id: "aws", label: "AWS" },
  { id: "azure", label: "Azure" },
  { id: "gcp", label: "GCP" },
] as const;

function PlatformRow({ reduced }: { reduced: boolean }) {
  return (
    <div className="mb-3 flex flex-wrap items-center justify-center gap-3 sm:mb-4 sm:gap-0">
      {platforms.map((p, i) => (
        <motion.div
          key={p.id}
          className={cn(
            "ic-platform-shake flex cursor-default items-center gap-2 sm:px-5",
            i > 0 && "sm:border-s sm:border-white/20",
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
          <span className="text-[12px] font-semibold tracking-wide text-white/80 sm:text-[13px]">
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
  const { locale } = useI18n();

  return (
    <div className="relative max-w-5xl">
      <AnimatePresence mode="wait">
        <motion.h1
          key={locale}
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: reduced ? 0 : 0.28, ease: "easeOut" }}
          className="text-center font-display text-[clamp(2.65rem,5.8vw,4.65rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white"
        >
          <span className="block">
            <span className="inline-flex items-baseline justify-center gap-[0.28em]">
              {line1}{" "}
              <span
                aria-hidden
                className="inline-block h-[0.07em] w-[0.62em] shrink-0 translate-y-[-0.18em] bg-orange-500"
              />
            </span>
          </span>
          <span className="block text-white/90">{line2}</span>
        </motion.h1>
      </AnimatePresence>
    </div>
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
      <span className="text-white/75">{prefix}</span>
      <span className="relative inline-grid text-start text-orange-500">
        <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden>
          {longest}
        </span>
        <span className="relative col-start-1 row-start-1 h-[1.35em] overflow-hidden whitespace-nowrap">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={current}
              className="absolute inset-x-0 top-0"
              initial={reduced ? false : { y: "85%", opacity: 0, filter: "blur(5px)" }}
              animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
              exit={reduced ? undefined : { y: "-75%", opacity: 0, filter: "blur(5px)" }}
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
  return <ArrowRight className={cn("relative h-4 w-4", className)} aria-hidden />;
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
    <section className="relative min-h-[min(92vh,56rem)] overflow-hidden bg-[#0b1a33] text-white">
      <HeroAtmosphere reduced={reduced} />

      <div className="container-ic relative z-10 mx-auto flex min-h-[min(92vh,56rem)] flex-col justify-center pb-20 pt-16 text-center sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="pointer-events-auto relative mx-auto w-full max-w-5xl">
          {/* Soft-edged frosted blur — feathered mask so corners dissolve instead of a hard radius */}
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 bg-navy-950/40 backdrop-blur-2xl sm:-inset-10"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 78% 72% at 50% 48%, #000 35%, transparent 78%)",
              maskImage:
                "radial-gradient(ellipse 78% 72% at 50% 48%, #000 35%, transparent 78%)",
            }}
          />
          <div className="flex flex-col items-center px-2 py-1 sm:px-4 sm:py-2">
          <PlatformRow reduced={reduced} />

          <MaskedHeadline reduced={reduced} line1={h.titleLine1} line2={h.titleLine2} />
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
            <MorphKeywords reduced={reduced} prefix={h.weEngineer} keywords={keywords} />
          </motion.div>

          <motion.p
            className="mt-4 max-w-2xl text-[clamp(1.05rem,1.45vw,1.2rem)] leading-[1.7] text-white/75"
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
            <Button asChild variant="light" size="lg">
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
      </div>
    </section>
  );
}
