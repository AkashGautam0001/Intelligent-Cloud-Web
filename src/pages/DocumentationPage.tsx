import { Link, Navigate, useOutletContext, useParams } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Filter,
  Menu,
  ThumbsDown,
  ThumbsUp,
  X,
} from "lucide-react";
import { useDocArticle, useDocs } from "@/hooks/useCms";
import { ArticleToc, RichHtml, type TocItem } from "@/components/RichHtml";
import { PageSeo } from "@/components/PageSeo";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { docsCategoryIcon } from "@/lib/docsIcons";
import { cn } from "@/lib/utils";
import type { DocCategoryWithArticles } from "@/lib/types";

type DocsOutletContext = {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
};

type SidebarCategory = DocCategoryWithArticles & { active: boolean };

function DocsNavTree({
  sidebar,
  category,
  slug,
  filter,
  onNavigate,
}: {
  sidebar: SidebarCategory[];
  category?: string;
  slug?: string;
  filter: string;
  onNavigate?: () => void;
}) {
  const q = filter.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!q) return sidebar;
    return sidebar
      .map((cat) => {
        const titleHit = cat.title.toLowerCase().includes(q);
        const articles = (cat.articles ?? []).filter(
          (a) =>
            titleHit ||
            a.title.toLowerCase().includes(q) ||
            (a.summary ?? "").toLowerCase().includes(q),
        );
        if (!titleHit && articles.length === 0) return null;
        return {
          ...cat,
          articles: titleHit ? cat.articles : articles,
        };
      })
      .filter(Boolean) as SidebarCategory[];
  }, [sidebar, q]);

  return (
    <nav aria-label="Documentation" className="space-y-5 pb-10">
      {filtered.map((cat) => {
        const first = cat.articles?.[0];
        return (
          <div key={cat._id}>
            <div className="mb-2 px-1">
              {first ? (
                <Link
                  to={`/documentation/${cat.slug}/${first.slug}`}
                  onClick={onNavigate}
                  className={cn(
                    "text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors",
                    cat.active ? "text-orange-500" : "text-text-600 hover:text-navy-900",
                  )}
                >
                  {cat.title}
                </Link>
              ) : (
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-600">
                  {cat.title}
                </p>
              )}
            </div>
            <ul className="space-y-0.5">
              {(cat.articles ?? []).map((item) => {
                const active = cat.slug === category && item.slug === slug;
                return (
                  <li key={item._id}>
                    <Link
                      to={`/documentation/${cat.slug}/${item.slug}`}
                      onClick={onNavigate}
                      data-docs-active={active ? "true" : undefined}
                      className={cn(
                        "block rounded-lg px-2.5 py-2 text-[13px] leading-snug transition-colors",
                        active
                          ? "bg-orange-500/10 font-medium text-orange-500"
                          : "text-text-600 hover:bg-navy-900/[0.04] hover:text-navy-900",
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      {filtered.length === 0 ? (
        <p className="px-1 text-sm text-text-600">No matching guides.</p>
      ) : null}
    </nav>
  );
}

function SidebarFilter({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="relative mb-5 block">
      <Filter className="pointer-events-none absolute start-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-text-600/60" />
      <input
        data-docs-filter
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Filter sidebar"
        className="h-9 w-full rounded-lg border border-border-200 bg-white pe-8 ps-9 text-sm text-navy-900 placeholder:text-text-600/50 outline-none transition-colors focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/15"
      />
      <kbd className="pointer-events-none absolute end-2.5 top-1/2 -translate-y-1/2 rounded border border-border-200 bg-surface-50 px-1.5 py-0.5 font-mono text-[10px] text-text-600">
        /
      </kbd>
    </label>
  );
}

export function DocumentationPage() {
  const { data, isLoading, isError } = useDocs();
  const categories = data ?? [];

  return (
    <>
      <PageSeo
        title="Documentation | Intelligent Cloud"
        description="Architecture guides, Kubernetes on AKS, CI/CD, observability, and security documentation."
      />

      <section className="relative overflow-hidden border-b border-border-200 bg-[#f5f8fb]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 10% -20%, rgba(242,106,19,0.12), transparent 55%), radial-gradient(ellipse 50% 40% at 95% 0%, rgba(67,139,216,0.14), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-[90rem] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-orange-500">
            Documentation
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-[-0.03em] text-navy-900">
            Guides for building and operating cloud platforms
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-600 sm:text-lg">
            Production-ready patterns for landing zones, AKS, CI/CD, observability, and security —
            written the way we deliver engagements.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={
                categories[0]?.articles?.[0]
                  ? `/documentation/${categories[0].slug}/${categories[0].articles[0].slug}`
                  : "/contact"
              }
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-orange-500 px-5 text-sm font-semibold text-white hover:bg-[#d95c0f]"
            >
              Start reading <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/book-demo"
              className="inline-flex h-11 items-center rounded-lg border border-border-200 bg-white px-5 text-sm font-medium text-navy-900 hover:border-orange-500/40"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-600">
              Directory
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-navy-900">
              Browse by topic
            </h2>
          </div>
          <p className="text-sm text-text-600">
            {categories.reduce((n, c) => n + (c.articles?.length ?? 0), 0)} articles
          </p>
        </div>

        {isLoading ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-44 animate-pulse rounded-2xl border border-border-200 bg-surface-50"
              />
            ))}
          </div>
        ) : isError ? (
          <p className="text-sm text-danger">Unable to load documentation.</p>
        ) : categories.length === 0 ? (
          <div className="rounded-2xl border border-border-200 bg-surface-50 p-10 text-center">
            <p className="text-sm text-text-600">No published documentation yet.</p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-500"
            >
              Contact sales <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {categories.map((cat) => {
              const Icon = docsCategoryIcon(cat.slug);
              const first = cat.articles?.[0];
              const count = cat.articles?.length ?? 0;
              const inner = (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-200 bg-orange-500/10 text-orange-500">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="rounded-full border border-border-200 px-2.5 py-1 font-mono text-[10px] text-text-600">
                      {count} {count === 1 ? "guide" : "guides"}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy-900 group-hover:text-orange-500">
                    {cat.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-text-600">
                    {cat.description || "Published guides in this category."}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500">
                    Open category <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </>
              );
              return first ? (
                <Link
                  key={cat._id}
                  to={`/documentation/${cat.slug}/${first.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border-200 bg-white p-6 shadow-[0_1px_0_rgba(4,39,95,0.04)] transition-colors hover:border-orange-500/40 hover:shadow-[0_16px_40px_-28px_rgba(4,39,95,0.28)]"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={cat._id}
                  className="flex h-full flex-col rounded-2xl border border-border-200 bg-white p-6"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}

export function DocumentationArticlePage() {
  const { category, slug } = useParams();
  const docs = useDocs();
  const article = useDocArticle(category, slug);
  const [toc, setToc] = useState<TocItem[]>([]);
  const [filter, setFilter] = useState("");
  const [treeOpen, setTreeOpen] = useState(false);
  const [feedback, setFeedback] = useState<"yes" | "no" | null>(null);
  const onToc = useCallback((items: TocItem[]) => setToc(items), []);
  const outlet = useOutletContext<DocsOutletContext | undefined>();

  const categories = docs.data ?? [];
  const sidebar = useMemo(
    () =>
      categories.map((cat) => ({
        ...cat,
        active: cat.slug === category,
      })),
    [categories, category],
  );

  useEffect(() => {
    const el = document.querySelector<HTMLElement>('[data-docs-active="true"]');
    el?.scrollIntoView({ block: "nearest" });
  }, [category, slug, docs.data]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault();
        document.querySelector<HTMLInputElement>("[data-docs-filter]")?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const initialLoading =
    (article.isLoading && !article.data) || (docs.isLoading && !docs.data);

  if (initialLoading) {
    return (
      <div className="mx-auto grid max-w-[96rem] xl:grid-cols-[17.5rem_minmax(0,1fr)]">
        <div className="hidden border-e border-border-200 bg-[#f5f8fb] xl:block" />
        <div className="space-y-4 px-6 py-10">
          <div className="h-4 w-40 animate-pulse rounded bg-border-200" />
          <div className="h-10 w-2/3 animate-pulse rounded bg-border-200" />
          <div className="h-40 animate-pulse rounded-xl bg-surface-50" />
        </div>
      </div>
    );
  }

  if (article.isError || !article.data) {
    return <Navigate to="/documentation" replace />;
  }

  const cat = sidebar.find((c) => c.slug === category);
  const articles = cat?.articles ?? [];
  const idx = articles.findIndex((a) => a.slug === slug);
  const prev = idx > 0 ? articles[idx - 1] : undefined;
  const next = idx >= 0 && idx < articles.length - 1 ? articles[idx + 1] : undefined;
  const CatIcon = docsCategoryIcon(category ?? "");

  const sidebarPanel = (
    <>
      <SidebarFilter value={filter} onChange={setFilter} />
      <DocsNavTree
        sidebar={sidebar}
        category={category}
        slug={slug}
        filter={filter}
        onNavigate={() => {
          setTreeOpen(false);
          outlet?.setMobileOpen(false);
        }}
      />
    </>
  );

  return (
    <>
      <PageSeo
        title={`${article.data.title} | Intelligent Cloud Docs`}
        description={article.data.summary || article.data.title}
      />

      <div className="sticky top-14 z-20 flex items-center justify-between gap-3 border-b border-border-200 bg-white/95 px-4 py-3 backdrop-blur-md lg:top-16 xl:hidden">
        <button
          type="button"
          onClick={() => setTreeOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg border border-border-200 bg-white px-3 py-2 text-sm font-medium text-navy-900"
        >
          <Menu className="h-4 w-4" aria-hidden />
          Guides
        </button>
        <p className="truncate text-sm text-text-600">{article.data.category.title}</p>
      </div>

      <div className="mx-auto grid max-w-[96rem] xl:grid-cols-[17.5rem_minmax(0,1fr)_14.5rem] 2xl:grid-cols-[18rem_minmax(0,1fr)_15.5rem]">
        <aside className="relative hidden xl:block">
          <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain border-e border-border-200 bg-[#f5f8fb] ic-scroll">
            <div className="px-4 py-6 lg:px-5">{sidebarPanel}</div>
          </div>
        </aside>

        <article className="min-w-0 px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
          <nav aria-label="Breadcrumb" className="text-sm text-text-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/documentation" className="hover:text-orange-500">
                  Docs
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  to={`/documentation/${category}/${articles[0]?.slug ?? slug}`}
                  className="hover:text-orange-500"
                >
                  {article.data.category.title}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-navy-900">{article.data.title}</li>
            </ol>
          </nav>

          <header className="mt-6 max-w-3xl border-b border-border-200 pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-200 bg-surface-50 px-3 py-1">
              <CatIcon className="h-3.5 w-3.5 text-orange-500" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-orange-500">
                {article.data.category.title}
              </span>
            </div>
            <h1 className="mt-4 font-display text-[clamp(1.85rem,3.2vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-navy-900">
              {article.data.title}
            </h1>
            {article.data.summary ? (
              <p className="mt-4 text-base leading-relaxed text-text-600 sm:text-[1.0625rem]">
                {article.data.summary}
              </p>
            ) : null}
          </header>

          <div className="mt-10 max-w-3xl">
            <RichHtml
              html={article.data.bodyHtml}
              className={cn(
                "prose-base sm:prose-lg",
              )}
              onToc={onToc}
            />
          </div>

          <div className="mt-14 max-w-3xl rounded-2xl border border-border-200 bg-[#f5f8fb] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-600">
              Was this helpful?
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setFeedback("yes")}
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm transition-colors",
                  feedback === "yes"
                    ? "border-orange-500/50 bg-orange-500/10 text-orange-500"
                    : "border-border-200 bg-white text-text-600 hover:border-orange-500/40 hover:text-navy-900",
                )}
              >
                <ThumbsUp className="h-3.5 w-3.5" /> Yes
              </button>
              <button
                type="button"
                onClick={() => setFeedback("no")}
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm transition-colors",
                  feedback === "no"
                    ? "border-orange-500/50 bg-orange-500/10 text-orange-500"
                    : "border-border-200 bg-white text-text-600 hover:border-orange-500/40 hover:text-navy-900",
                )}
              >
                <ThumbsDown className="h-3.5 w-3.5" /> No
              </button>
              {feedback ? (
                <span className="self-center text-sm text-text-600">Thanks for the feedback.</span>
              ) : null}
            </div>
          </div>

          {(prev || next) && (
            <nav
              aria-label="Adjacent articles"
              className="mt-10 grid max-w-3xl gap-3 border-t border-border-200 pt-8 sm:grid-cols-2"
            >
              {prev ? (
                <Link
                  to={`/documentation/${category}/${prev.slug}`}
                  className="group flex flex-col rounded-xl border border-border-200 bg-[#f8fafc] p-5 transition-colors hover:border-orange-500/40 hover:bg-white"
                >
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-text-600">
                    <ChevronRight className="h-3 w-3 rotate-180" aria-hidden />
                    Previous
                  </span>
                  <span className="mt-2 font-display text-base font-semibold text-navy-900 transition-colors group-hover:text-orange-500">
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  to={`/documentation/${category}/${next.slug}`}
                  className="group flex flex-col items-end rounded-xl border border-border-200 bg-[#f8fafc] p-5 text-right transition-colors hover:border-orange-500/40 hover:bg-white"
                >
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-text-600">
                    Next
                    <ChevronRight className="h-3 w-3" aria-hidden />
                  </span>
                  <span className="mt-2 font-display text-base font-semibold text-navy-900 transition-colors group-hover:text-orange-500">
                    {next.title}
                  </span>
                </Link>
              ) : null}
            </nav>
          )}
        </article>

        <aside className="relative hidden xl:block">
          <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain ic-scroll">
            <div className="px-5 py-8">
              <ArticleToc items={toc} tone="light" />
            </div>
          </div>
        </aside>
      </div>

      <Sheet open={treeOpen} onOpenChange={setTreeOpen}>
        <SheetContent side="left" className="w-[min(100%,20rem)] border-border-200 bg-[#f5f8fb] p-0">
          <div className="flex items-center justify-between border-b border-border-200 px-5 py-4">
            <SheetTitle>Guides</SheetTitle>
            <button
              type="button"
              onClick={() => setTreeOpen(false)}
              className="rounded-lg p-2 text-text-600 hover:bg-white hover:text-navy-900"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="ic-scroll h-[calc(100%-3.5rem)] overflow-y-auto px-4 py-5">
            {sidebarPanel}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
