import { Link, useParams } from "react-router-dom";
import { useService } from "@/hooks/useCms";
import { getServicePage } from "@/content/services";
import { PageSeo } from "@/components/PageSeo";
import { PageHeroSkeleton } from "@/components/skeletons";
import { Button } from "@/components/ui/button";
import { ServiceLongForm } from "@/components/services/ServiceLongForm";
import { useI18n } from "@/i18n";

export function ServiceDetailPage() {
  const { slug } = useParams();
  const { locale } = useI18n();
  const staticContent = getServicePage(slug, locale);
  const { data: cms, isLoading, isError } = useService(slug);

  // Static registry can render immediately; only wait on CMS when we have no static page
  if (!staticContent && isLoading) {
    return <PageHeroSkeleton />;
  }

  if (!staticContent && (isError || !cms)) {
    return (
      <section className="container-ic py-20">
        <h1 className="text-2xl font-semibold text-navy-900">Service not found</h1>
        <Button asChild className="mt-4" variant="secondary">
          <Link to="/services">Back to services</Link>
        </Button>
      </section>
    );
  }

  if (staticContent) {
    return (
      <>
        <PageSeo
          title={`${staticContent.title} | Intelligent Cloud`}
          description={staticContent.summary}
        />
        <ServiceLongForm
          content={staticContent}
          cmsBodyHtml={locale === "ar" ? undefined : cms?.bodyHtml}
        />
      </>
    );
  }

  // CMS-only fallback (should not happen for mega-menu slugs)
  return (
    <>
      <PageSeo title={`${cms!.title} | Intelligent Cloud`} description={cms!.summary} />
      <ServiceLongForm
        content={{
          slug: cms!.slug,
          title: cms!.title,
          eyebrow: "Service",
          tagline: cms!.summary,
          summary: cms!.summary,
          iconKey: cms!.iconKey,
          category: "platforms",
          architectureTitle: "Architecture overview",
          architectureLead: cms!.summary,
          approachTitle: "How we deliver",
          approachLead: "Scoped with your team during assessment.",
          metrics: [],
          highlights: [],
          challenges: [],
          outcomes: [],
          deliverables: [],
          approach: [],
          stack: [],
          useCases: [],
          faqs: [],
          related: [],
        }}
        cmsBodyHtml={locale === "ar" ? undefined : cms!.bodyHtml}
      />
    </>
  );
}
