import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useLocation } from "react-router-dom";
import { useSettings } from "@/hooks/useCms";
import { useI18n } from "@/i18n";
import {
  absoluteUrl,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  descriptionForPath,
  SITE_NAME,
  titleForPath,
} from "@/lib/seo";

export type PageSeoProps = {
  title?: string;
  description?: string;
  ogImage?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

type SeoContextValue = {
  setOverrides: (next: PageSeoProps) => void;
};

const SeoContext = createContext<SeoContextValue | null>(null);

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/** Owns document head updates. Place once in SiteLayout. */
export function SeoProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const settings = useSettings();
  const { locale, t } = useI18n();
  const seo = settings.data?.seo;
  const [overrides, setOverrides] = useState<PageSeoProps>({});

  useEffect(() => {
    const pathTitle = titleForPath(location.pathname);
    const pathDesc = descriptionForPath(location.pathname);

    const defaultTitle =
      locale === "ar"
        ? seo?.defaultTitleAr?.trim() || seo?.defaultTitle
        : seo?.defaultTitle;
    const defaultDescription =
      locale === "ar"
        ? seo?.defaultDescriptionAr?.trim() || seo?.defaultDescription
        : seo?.defaultDescription;

    const title =
      overrides.title || pathTitle || defaultTitle || DEFAULT_TITLE;
    const description =
      overrides.description ||
      pathDesc ||
      defaultDescription ||
      DEFAULT_DESCRIPTION;
    const ogImage = absoluteUrl(
      overrides.ogImage || seo?.ogImageUrl || DEFAULT_OG_IMAGE,
    );
    const canonical = absoluteUrl(location.pathname);

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta(
      "name",
      "robots",
      overrides.noIndex ? "noindex,nofollow" : "index,follow",
    );
    upsertLink("canonical", canonical);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:locale", locale === "ar" ? "ar_SA" : "en_US");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);

    const displayAddress =
      locale === "ar"
        ? settings.data?.addressAr?.trim() || settings.data?.address
        : settings.data?.address;

    const org = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl("/"),
      logo: absoluteUrl("/assets/brand/logo.png"),
      email: settings.data?.email || "sales@intelligent-cloud.com",
      telephone: settings.data?.phone || undefined,
      sameAs: [
        settings.data?.social?.linkedin,
        settings.data?.social?.twitter,
        settings.data?.social?.youtube,
      ].filter(Boolean),
      address: displayAddress
        ? {
            "@type": "PostalAddress",
            streetAddress: displayAddress,
          }
        : undefined,
      areaServed: "Worldwide",
      slogan: t.tagline,
    };
    upsertJsonLd("ic-jsonld-organization", org);

    if (overrides.jsonLd) {
      const payload = Array.isArray(overrides.jsonLd)
        ? overrides.jsonLd
        : [overrides.jsonLd];
      upsertJsonLd("ic-jsonld-page", {
        "@context": "https://schema.org",
        "@graph": payload,
      });
    } else {
      document.getElementById("ic-jsonld-page")?.remove();
    }
  }, [
    location.pathname,
    overrides,
    locale,
    t.tagline,
    seo?.defaultTitle,
    seo?.defaultTitleAr,
    seo?.defaultDescription,
    seo?.defaultDescriptionAr,
    seo?.ogImageUrl,
    settings.data?.email,
    settings.data?.phone,
    settings.data?.address,
    settings.data?.addressAr,
    settings.data?.social?.linkedin,
    settings.data?.social?.twitter,
    settings.data?.social?.youtube,
  ]);

  const value = useMemo(() => ({ setOverrides }), []);

  return <SeoContext.Provider value={value}>{children}</SeoContext.Provider>;
}

/** Page-level SEO overrides (title, description, FAQ JSON-LD, etc.). */
export function PageSeo(props: PageSeoProps) {
  const ctx = useContext(SeoContext);

  useEffect(() => {
    if (!ctx) return;
    ctx.setOverrides(props);
    return () => ctx.setOverrides({});
  }, [
    ctx,
    props.title,
    props.description,
    props.ogImage,
    props.noIndex,
    props.jsonLd,
  ]);

  return null;
}
