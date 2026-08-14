import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroAtmosphere } from "@/components/home/HeroAtmosphere";
import { useI18n } from "@/i18n";
import { whatsappExpertUrl } from "@/lib/whatsapp";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

function PlatformStrip({
  reduced,
  platforms,
}: {
  reduced: boolean;
  platforms: string;
}) {
  const tokens = platforms.split("·").map((s) => s.trim()).filter(Boolean);

  return (
    <div className="relative flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
      {tokens.map((token, i) => (
        <motion.span
          key={token}
          className="relative text-[12px] font-medium uppercase tracking-[0.16em] text-text-600"
          initial={reduced ? false : { opacity: 0, y: 8, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: reduced ? 0 : 0.55,
            delay: reduced ? 0 : 0.15 + i * 0.1,
            ease: easeOut,
          }}
        >
          {token}
          {i < tokens.length - 1 ? (
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -end-3 top-1/2 hidden h-px w-3 -translate-y-1/2 bg-gradient-to-r from-azure-500/50 to-orange-500/40 sm:block"
              initial={reduced ? false : { scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                delay: reduced ? 0 : 0.55 + i * 0.1,
                duration: 0.35,
                ease: easeOut,
              }}
              style={{ transformOrigin: "left center" }}
            />
          ) : null}
        </motion.span>
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
    <h1 className="relative mt-5 max-w-5xl text-center font-display text-[clamp(2.85rem,6.2vw,4.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-navy-900">
      {[line1, line2].map((line, i) => (
        <span key={line} className="relative block overflow-hidden">
          <motion.span
            className="relative z-[1] block"
            initial={reduced ? false : { y: "110%", opacity: 0.2 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: reduced ? 0 : 0.9,
              delay: reduced ? 0 : 0.45 + i * 0.18,
              ease: easeOut,
            }}
          >
            {i === 1 ? <span className="text-navy-900/90">— {line}</span> : line}
          </motion.span>
          {!reduced ? (
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-y-1 start-0 z-[2] w-[18%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-[#438bd8]/45 to-transparent"
              initial={{ left: "-20%", opacity: 0 }}
              animate={{ left: ["-20%", "110%"], opacity: [0, 1, 0] }}
              transition={{
                duration: 0.85,
                delay: 0.55 + i * 0.18,
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

  return (
    <p className="mt-5 flex min-h-[2.75rem] flex-wrap items-center justify-center gap-x-2 text-center font-display text-[clamp(1.35rem,2.6vw,1.85rem)] font-semibold tracking-[-0.02em]">
      <span className="text-text-600">{prefix}</span>
      <span className="relative inline-flex h-[1.35em] min-w-[12ch] items-center justify-center overflow-hidden text-orange-500 sm:min-w-[16ch]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={current}
            className="absolute inset-x-0"
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
    </p>
  );
}

function FlowArrow({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex h-4 w-5 items-center", className)} aria-hidden>
      <span className="absolute inset-y-0 start-0 w-full overflow-hidden">
        <span className="ic-flow-dots absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
      </span>
      <ArrowRight className="relative h-4 w-4 transition-transform duration-500 ease-out group-hover/btn:translate-x-0.5" />
    </span>
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

      <div className="container-ic relative z-10 mx-auto pb-20 pt-32 text-center lg:pb-28 lg:pt-40">
        <div className="pointer-events-auto mx-auto flex w-full max-w-6xl flex-col items-center">
          <PlatformStrip reduced={reduced} platforms={h.platforms} />

          <MaskedHeadline
            reduced={reduced}
            line1={h.titleLine1}
            line2={h.titleLine2}
          />
          <span className="sr-only">{h.title}</span>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduced ? 0 : 0.6,
              delay: reduced ? 0 : 1.05,
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
            className="mt-5 max-w-3xl text-[clamp(1.05rem,1.5vw,1.25rem)] leading-[1.7] text-text-600"
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduced ? 0 : 0.6,
              delay: reduced ? 0 : 1.2,
              ease: easeOut,
            }}
          >
            {h.lead}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-3"
            initial={reduced ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reduced ? 0 : 0.5,
              delay: reduced ? 0 : 1.35,
              ease: easeOut,
            }}
          >
            <Button asChild size="lg" className="ic-cta-sweep">
              <Link to="/book-demo">
                {t.nav.bookDemo} <FlowArrow />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/60 bg-white/55 backdrop-blur-md"
            >
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
