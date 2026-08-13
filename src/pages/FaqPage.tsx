import { useMemo, useState } from "react";
import { HelpCircle } from "lucide-react";
import { useFaqs } from "@/hooks/useCms";
import { faq as faqContent } from "@/content/resources";
import { ResourceLongForm } from "@/components/resources/ResourceLongForm";
import { SectionShell } from "@/components/ui/section-shell";
import { IcCard } from "@/components/ui/ic-card";
import { IcChip } from "@/components/ui/ic-chip";
import { IcIconTile } from "@/components/ui/ic-icon-tile";
import { ListSkeleton } from "@/components/skeletons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RichHtml } from "@/components/RichHtml";

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

export function FaqPage() {
  const { data, isLoading, isError } = useFaqs();
  const cmsFaqs = data ?? [];
  const categories = useMemo(() => {
    const set = new Set(cmsFaqs.map((f) => f.category || "general"));
    return ["all", ...Array.from(set)];
  }, [cmsFaqs]);
  const [category, setCategory] = useState("all");

  const filtered =
    category === "all" ? cmsFaqs : cmsFaqs.filter((f) => f.category === category);

  const faqJsonLd = useMemo(() => {
    const staticEntities = faqContent.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    }));
    const cmsEntities = cmsFaqs.slice(0, 20).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: stripHtml(item.answerHtml) },
    }));
    return {
      "@type": "FAQPage",
      mainEntity: [...staticEntities, ...cmsEntities].slice(0, 30),
    };
  }, [cmsFaqs]);

  return (
    <ResourceLongForm
      content={faqContent}
      jsonLd={faqJsonLd}
      heroVisual={
        <IcCard className="overflow-hidden p-6">
          <div className="flex items-center gap-4">
            <IcIconTile size="lg" className="h-14 w-14 rounded-[14px]">
              <HelpCircle className="h-7 w-7" aria-hidden />
            </IcIconTile>
            <div>
              <p className="font-display text-sm font-semibold text-navy-900">FAQ</p>
              <p className="mt-1 text-sm text-text-600">Engage · Platform · Ops</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-text-600">
            Static answers cover what teams ask before demos. CMS-published FAQs extend the list
            when available.
          </p>
        </IcCard>
      }
    >
      <SectionShell
        tone="navyLight"
        eyebrow="Published"
        title="CMS FAQ library"
        lead="CMS answers when published. Static FAQs also appear below."
      >
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((value) => (
            <IcChip
              key={value}
              active={category === value}
              onClick={() => setCategory(value)}
            >
              {value}
            </IcChip>
          ))}
        </div>

        {isLoading ? (
          <ListSkeleton rows={6} />
        ) : isError ? (
          <p className="text-sm text-danger">Unable to load published FAQs.</p>
        ) : filtered.length === 0 ? (
          <IcCard className="bg-white text-center">
            <p className="text-sm text-text-600">No published FAQs in this category yet.</p>
          </IcCard>
        ) : (
          <IcCard className="p-2 sm:p-4">
            <Accordion type="single" collapsible>
              {filtered.map((item) => (
                <AccordionItem key={item._id} value={item._id}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <RichHtml html={item.answerHtml} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </IcCard>
        )}
      </SectionShell>
    </ResourceLongForm>
  );
}
