import { Link, useParams } from "react-router-dom";
import { useSolution } from "@/hooks/useCms";
import { getSolutionPage } from "@/content/solutions";
import { PageSeo } from "@/components/PageSeo";
import { PageHeroSkeleton } from "@/components/skeletons";
import { Button } from "@/components/ui/button";
import { SolutionLongForm } from "@/components/solutions/SolutionLongForm";

export function SolutionDetailPage() {
  const { slug } = useParams();
  const staticContent = getSolutionPage(slug);
  const { data: cms, isLoading, isError } = useSolution(slug);

  if (!staticContent && isLoading) {
    return <PageHeroSkeleton />;
  }

  if (!staticContent && (isError || !cms)) {
    return (
      <section className="container-ic py-20">
        <h1 className="text-2xl font-semibold text-navy-900">Solution not found</h1>
        <Button asChild className="mt-4" variant="secondary">
          <Link to="/solutions">Back to solutions</Link>
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
        <SolutionLongForm content={staticContent} cmsBodyHtml={cms?.bodyHtml} />
      </>
    );
  }

  return (
    <>
      <PageSeo title={`${cms!.title} | Intelligent Cloud`} description={cms!.summary} />
      <SolutionLongForm
        content={{
          slug: cms!.slug,
          title: cms!.title,
          eyebrow: "Solution",
          tagline: cms!.summary,
          summary: cms!.summary,
          iconKey: cms!.pillar,
          kind: "outcome",
          pillar:
            cms!.pillar === "general" ? "migration" : (cms!.pillar as "migration" | "devops" | "security"),
          audiences: cms!.audiences?.includes("startup")
            ? cms!.audiences.includes("enterprise")
              ? ["both"]
              : ["startup"]
            : ["enterprise"],
          ctaLabel: "Book assessment",
          ctaTo: "/book-demo",
          architectureTitle: "Architecture overview",
          architectureLead: cms!.summary,
          approachTitle: "How we deliver",
          approachLead: "Scoped with your team during assessment.",
          metrics: [],
          highlights: (cms!.highlights ?? []).map((h) => ({ title: h, body: h })),
          challenges: [],
          outcomes: [],
          deliverables: [],
          approach: [],
          stack: [],
          useCases: [],
          faqs: [],
          related: [],
        }}
        cmsBodyHtml={cms!.bodyHtml}
      />
    </>
  );
}
