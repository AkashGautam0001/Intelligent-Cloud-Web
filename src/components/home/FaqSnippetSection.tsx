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

export function FaqSnippetSection() {
  const { data, isLoading, isError } = useFaqs();
  const faqs = (data ?? []).slice(0, 5);

  return (
    <SectionShell
      tone="white"
      eyebrow="FAQ"
      title="Direct answers before you book time"
      lead="Engagement models, platforms we operate, and how assessments work — without a sales script."
    >
      {isLoading ? (
        <ListSkeleton rows={5} />
      ) : isError ? (
        <p className="text-sm text-danger">Unable to load FAQs.</p>
      ) : (
        <IcCard className="p-2 sm:p-4">
          <Accordion type="single" collapsible>
            {faqs.map((faq) => (
              <AccordionItem key={faq._id} value={faq._id}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <RichHtml html={faq.answerHtml} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </IcCard>
      )}
      <Link
        to="/faq"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:underline"
      >
        View all FAQs <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </SectionShell>
  );
}
