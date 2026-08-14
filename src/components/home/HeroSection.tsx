import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroAtmosphere } from "@/components/home/HeroAtmosphere";
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
      <HeroAtmosphere reduced={reduced} />

      <div className="container-ic relative z-10 mx-auto pb-20 pt-32 text-center lg:pb-28 lg:pt-40">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.7, ease: easeOut }}
          className="pointer-events-auto mx-auto flex w-full max-w-6xl flex-col items-center"
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
