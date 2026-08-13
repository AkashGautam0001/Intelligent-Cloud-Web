import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import type {
  DocArticleDetail,
  DocCategoryWithArticles,
  FaqItem,
  PartnerItem,
  ServiceItem,
  SettingsPublic,
  SolutionItem,
} from "@/lib/types";

export function useSettings() {
  return useQuery({
    queryKey: ["settings"],
    queryFn: async () => {
      const res = await apiFetch<{ success: boolean; data: SettingsPublic }>(
        "/settings",
      );
      return res.data;
    },
    staleTime: 60_000,
  });
}

export function useServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await apiFetch<{ success: boolean; data: ServiceItem[] }>(
        "/services",
      );
      return res.data;
    },
    staleTime: 60_000,
  });
}

export function useService(slug: string | undefined) {
  return useQuery({
    queryKey: ["services", slug],
    enabled: Boolean(slug),
    queryFn: async () => {
      const res = await apiFetch<{ success: boolean; data: ServiceItem }>(
        `/services/${slug}`,
      );
      return res.data;
    },
    staleTime: 60_000,
  });
}

export function useSolutions(audience?: "startup" | "enterprise") {
  return useQuery({
    queryKey: ["solutions", audience ?? "all"],
    queryFn: async () => {
      const qs = audience ? `?audience=${audience}` : "";
      const res = await apiFetch<{ success: boolean; data: SolutionItem[] }>(
        `/solutions${qs}`,
      );
      return res.data;
    },
    staleTime: 60_000,
  });
}

export function useSolution(slug: string | undefined) {
  return useQuery({
    queryKey: ["solutions", "detail", slug],
    enabled: Boolean(slug),
    queryFn: async () => {
      const res = await apiFetch<{ success: boolean; data: SolutionItem }>(
        `/solutions/${slug}`,
      );
      return res.data;
    },
    staleTime: 60_000,
  });
}

export function useFaqs(category?: string) {
  return useQuery({
    queryKey: ["faqs", category ?? "all"],
    queryFn: async () => {
      const qs = category ? `?category=${encodeURIComponent(category)}` : "";
      const res = await apiFetch<{ success: boolean; data: FaqItem[] }>(
        `/faqs${qs}`,
      );
      return res.data;
    },
    staleTime: 60_000,
  });
}

export function useDocs() {
  return useQuery({
    queryKey: ["docs"],
    queryFn: async () => {
      const res = await apiFetch<{
        success: boolean;
        data: DocCategoryWithArticles[];
      }>("/docs");
      return res.data;
    },
    staleTime: 60_000,
  });
}

export function useDocCategory(slug: string | undefined) {
  return useQuery({
    queryKey: ["docs", "category", slug],
    enabled: Boolean(slug),
    queryFn: async () => {
      const res = await apiFetch<{
        success: boolean;
        data: DocCategoryWithArticles;
      }>(`/docs/categories/${slug}`);
      return res.data;
    },
    staleTime: 60_000,
  });
}

export function useDocArticle(
  categorySlug: string | undefined,
  articleSlug: string | undefined,
) {
  return useQuery({
    queryKey: ["docs", "article", categorySlug, articleSlug],
    enabled: Boolean(categorySlug && articleSlug),
    queryFn: async () => {
      const res = await apiFetch<{ success: boolean; data: DocArticleDetail }>(
        `/docs/${categorySlug}/${articleSlug}`,
      );
      return res.data;
    },
    staleTime: 60_000,
    // Keep previous article visible while the next one loads (avoids full-page "refresh")
    placeholderData: (previous) => previous,
  });
}

export function usePartners() {
  return useQuery({
    queryKey: ["partners"],
    queryFn: async () => {
      const res = await apiFetch<{ success: boolean; data: PartnerItem[] }>(
        "/partners",
      );
      return res.data;
    },
    staleTime: 60_000,
  });
}
