import { Link } from "react-router-dom";
import { ArrowRight, Handshake } from "lucide-react";
import { API_URL } from "@/lib/api";
import { usePartners } from "@/hooks/useCms";
import { getCompanyPage, partners as partnersFallback } from "@/content/company";
import { CompanyLongForm } from "@/components/company/CompanyLongForm";
import { useI18n } from "@/i18n";
import { SectionShell } from "@/components/ui/section-shell";
import { IcCard } from "@/components/ui/ic-card";
import { IcIconTile } from "@/components/ui/ic-icon-tile";
import { CardGridSkeleton } from "@/components/skeletons";
import { Button } from "@/components/ui/button";

export function PartnersPage() {
  const { t, locale } = useI18n();
  const partnersContent = getCompanyPage("partners", locale) ?? partnersFallback;
  const { data, isLoading, isError } = usePartners();
  const partnerList = data ?? [];
  const p = t.pages.partners;

  return (
    <CompanyLongForm
      content={partnersContent}
      heroVisual={
        <IcCard className="overflow-hidden p-6">
          <div className="flex items-center gap-4">
            <IcIconTile size="lg" className="h-14 w-14 rounded-[14px]">
              <Handshake className="h-7 w-7" aria-hidden />
            </IcIconTile>
            <div>
              <p className="font-display text-sm font-semibold text-navy-900">
                {p.programTitle}
              </p>
              <p className="mt-1 text-sm text-text-600">{p.programLead}</p>
            </div>
          </div>
          <ul className="mt-6 space-y-2">
            {p.paths.map((path) => (
              <li
                key={path.id}
                className="rounded-[10px] border border-border-200 bg-[#eef3f8]/80 px-3 py-2.5 text-sm font-medium text-navy-900"
              >
                {path.title}
              </li>
            ))}
          </ul>
        </IcCard>
      }
      afterHighlights={
        <SectionShell
          tone="white"
          eyebrow={p.pathsEyebrow}
          title={p.pathsTitle}
          lead={p.pathsLead}
        >
          <div className="grid gap-5 md:grid-cols-3">
            {p.paths.map((item) => (
              <IcCard key={item.id} interactive className="flex h-full flex-col p-6">
                <h2 className="font-display text-xl font-semibold text-navy-900">
                  {item.title}
                </h2>
                <ul className="mt-5 space-y-2 border-t border-border-200 pt-4">
                  {item.points.map((point) => (
                    <li key={point} className="text-sm leading-relaxed text-text-600">
                      {point}
                    </li>
                  ))}
                </ul>
              </IcCard>
            ))}
          </div>
        </SectionShell>
      }
    >
      <SectionShell
        tone="navyLight"
        eyebrow={p.directoryEyebrow}
        title={p.directoryTitle}
        lead={p.directoryLead}
      >
        {isLoading ? (
          <CardGridSkeleton count={4} />
        ) : isError ? (
          <p className="text-sm text-danger">{p.loadError}</p>
        ) : partnerList.length === 0 ? (
          <IcCard className="bg-white p-8 text-center">
            <p className="text-sm text-text-600">{p.empty}</p>
            <Button asChild className="mt-5">
              <Link to="/contact">
                {p.becomePartner} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </IcCard>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {partnerList.map((partner) => {
                if (!partner.logoPath) {
                  return (
                    <IcCard
                      key={partner._id}
                      className="flex h-20 items-center justify-center text-center text-sm font-semibold text-navy-900"
                    >
                      {partner.name}
                    </IcCard>
                  );
                }
                const src = partner.logoPath.startsWith("http")
                  ? partner.logoPath
                  : `${API_URL}${partner.logoPath}`;
                const inner = (
                  <img
                    src={src}
                    alt={partner.name}
                    className="h-20 w-full rounded-[10px] border border-border-200 bg-white object-contain p-3"
                    loading="lazy"
                    decoding="async"
                  />
                );
                return partner.url ? (
                  <a key={partner._id} href={partner.url} target="_blank" rel="noreferrer">
                    {inner}
                  </a>
                ) : (
                  <div key={partner._id}>{inner}</div>
                );
              })}
            </div>
            <div className="mt-8 text-center">
              <Button asChild>
                <Link to="/contact">
                  {p.becomePartner} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </>
        )}
      </SectionShell>
    </CompanyLongForm>
  );
}
