import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useFaqs } from "@/hooks/useCms";
import { SectionShell } from "@/components/ui/section-shell";
import { IcCard } from "@/components/ui/ic-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RichHtml } from "@/components/RichHtml";
import { ListSkeleton } from "@/components/skeletons";
import { useI18n } from "@/i18n";
import { localizedFaq } from "@/lib/localized-faq";

export function FaqSnippetSection() {
  const { t, locale } = useI18n();
  const f = t.home.faqSnippet;
  const { data, isLoading, isError } = useFaqs();
  const faqs = (data ?? []).slice(0, 5);

  return (
    <SectionShell tone="white" eyebrow={f.eyebrow} title={f.title} lead={f.lead}>
      {isLoading ? (
        <ListSkeleton rows={5} />
      ) : isError ? (
        <p className="text-sm text-danger">{f.loadError}</p>
      ) : (
        <IcCard className="p-2 sm:p-4">
          <Accordion type="single" collapsible>
            {faqs.map((faq) => {
              const loc = localizedFaq(faq, locale);
              return (
                <AccordionItem key={faq._id} value={faq._id}>
                  <AccordionTrigger>{loc.question}</AccordionTrigger>
                  <AccordionContent>
                    <RichHtml html={loc.answerHtml} />
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </IcCard>
      )}
      <Link
        to="/faq"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:underline"
      >
        {f.viewAll} <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </SectionShell>
  );
}
