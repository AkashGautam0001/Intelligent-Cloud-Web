import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n";
import { whatsappExpertUrl } from "@/lib/whatsapp";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { easeOut } from "@/lib/motion";

function TypingKeywords({
  reduced,
  prefix,
  keywords,
}: {
  reduced: boolean;
  prefix: string;
  keywords: readonly string[];
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(reduced ? keywords[0] ?? "" : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) {
      setText(keywords[0] ?? "");
      return;
    }

    const current = keywords[index] ?? "";
    const atEnd = text === current;
    const atStart = text.length === 0;

    let delay = deleting ? 38 : 72;
    if (atEnd && !deleting) delay = 1600;
    if (atStart && deleting) delay = 400;

    const timer = window.setTimeout(() => {
      if (!deleting && !atEnd) {
        setText(current.slice(0, text.length + 1));
        return;
      }
      if (!deleting && atEnd) {
        setDeleting(true);
        return;
      }
      if (deleting && !atStart) {
        setText(current.slice(0, text.length - 1));
        return;
      }
      setDeleting(false);
      setIndex((i) => (i + 1) % keywords.length);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, index, reduced, keywords]);

  return (
    <p className="mt-5 flex min-h-[2.5rem] flex-wrap items-baseline justify-center gap-x-2 text-center font-display text-[clamp(1.35rem,2.6vw,1.85rem)] font-semibold tracking-[-0.02em] text-navy-900 sm:min-h-[2.75rem]">
      <span className="text-text-600">{prefix}</span>
      <span className="inline-flex items-baseline text-orange-500">
        <span>{text}</span>
        <span
          aria-hidden
          className="ms-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.12em] bg-orange-500"
          style={
            reduced
              ? undefined
              : { animation: "ic-caret-blink 1s steps(1) infinite" }
          }
        />
      </span>
    </p>
  );
}

function HeroBackground({ reduced }: { reduced: boolean }) {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #f5f8fb 45%, #eef3f8 100%)",
        }}
      />

      {/* Soft grid that drifts */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-[-20%] opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(4,39,95,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(4,39,95,0.07) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent 75%)",
        }}
        animate={
          reduced
            ? undefined
            : { backgroundPosition: ["0px 0px", "56px 56px"] }
        }
        transition={
          reduced
            ? undefined
            : { duration: 28, repeat: Infinity, ease: "linear" }
        }
      />

      {/* Soft brand orbs */}
      {!reduced ? (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-[10%] top-[5%] h-[28rem] w-[28rem] rounded-full bg-azure-500/15 blur-3xl"
            animate={{
              x: [0, 80, 20, 0],
              y: [0, 40, -20, 0],
              opacity: [0.35, 0.55, 0.4, 0.35],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-[8%] bottom-[0%] h-[26rem] w-[26rem] rounded-full bg-orange-500/10 blur-3xl"
            animate={{
              x: [0, -60, -20, 0],
              y: [0, -50, 10, 0],
              opacity: [0.25, 0.45, 0.3, 0.25],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/3 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      ) : (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute left-[10%] top-[10%] h-72 w-72 rounded-full bg-azure-500/12 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-[8%] bottom-[5%] h-64 w-64 rounded-full bg-orange-500/8 blur-3xl"
          />
        </>
      )}

      {!reduced ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-navy-900/[0.03] to-transparent"
          animate={{ left: ["-30%", "120%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
        />
      ) : null}
    </>
  );
}

export function HeroSection() {
  const { t } = useI18n();
  const reduced = usePrefersReducedMotion();
  const h = t.home.hero;
  const keywords = useMemo(
    () =>
      [
        h.keywords.cloudMigration,
        h.keywords.landingZones,
        h.keywords.aksEks,
        h.keywords.gitopsDelivery,
        h.keywords.managedOperations,
        h.keywords.securityBaselines,
        h.keywords.finopsGuardrails,
      ] as const,
    [h.keywords],
  );

  return (
    <section className="relative overflow-hidden bg-white text-navy-900">
      <HeroBackground reduced={reduced} />

      <div className="container-ic relative mx-auto pb-20 pt-32 text-center lg:pb-28 lg:pt-40">
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduced ? 0 : 0.85, ease: easeOut }}
          className="mx-auto flex w-full max-w-6xl flex-col items-center"
        >
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-text-600">
            {h.platforms}
          </p>
          <h1 className="mt-5 max-w-5xl font-display text-[clamp(2.85rem,6.2vw,4.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-navy-900">
            {h.title}
          </h1>

          <TypingKeywords
            reduced={reduced}
            prefix={h.weEngineer}
            keywords={keywords}
          />

          <p className="mt-5 max-w-3xl text-[clamp(1.05rem,1.5vw,1.25rem)] leading-[1.7] text-text-600">
            {h.lead}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/book-demo">
                {t.nav.bookDemo} <ArrowRight className="h-4 w-4" />
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
