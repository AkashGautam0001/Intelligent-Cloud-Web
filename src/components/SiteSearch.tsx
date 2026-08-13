import { useEffect, useMemo, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Boxes, CornerDownLeft, FileText, HelpCircle, Layers, Search } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { listServicePages } from "@/content/services";
import { listSolutionPages } from "@/content/solutions";
import { useDocs, useFaqs, useServices, useSolutions } from "@/hooks/useCms";
import { cn } from "@/lib/utils";

export type SearchHit = {
  id: string;
  title: string;
  description: string;
  href: string;
  group: "Services" | "Solutions" | "Docs" | "FAQ" | "Site";
};

const staticPages: SearchHit[] = [
  {
    id: "page-home",
    title: "Home",
    description: "Grow your business — we'll handle your cloud",
    href: "/",
    group: "Site",
  },
  {
    id: "page-services",
    title: "Services",
    description: "Cloud services built for every stage of growth",
    href: "/services",
    group: "Site",
  },
  {
    id: "page-solutions",
    title: "Solutions",
    description: "Startups, enterprises, migration, DevOps, security",
    href: "/solutions",
    group: "Site",
  },
  {
    id: "page-about",
    title: "About",
    description: "Built by engineers who've run production cloud at scale",
    href: "/about",
    group: "Site",
  },
  {
    id: "page-contact",
    title: "Contact",
    description: "Contact sales and talk to an expert",
    href: "/contact",
    group: "Site",
  },
  {
    id: "page-docs",
    title: "Documentation",
    description: "Guides for architecture, Kubernetes, CI/CD, and more",
    href: "/documentation",
    group: "Site",
  },
  {
    id: "page-faq",
    title: "FAQ",
    description: "Answers about Intelligent Cloud services and engagement",
    href: "/faq",
    group: "Site",
  },
  {
    id: "page-partners",
    title: "Partners",
    description: "Partner program overview",
    href: "/partners",
    group: "Site",
  },
  {
    id: "page-support",
    title: "Support",
    description: "Support tiers and ticket request",
    href: "/support",
    group: "Site",
  },
  {
    id: "page-book",
    title: "Book a Demo",
    description: "Free cloud assessment call",
    href: "/book-demo",
    group: "Site",
  },
];

const staticServiceHits: SearchHit[] = listServicePages().map((page) => ({
  id: `static-service-${page.slug}`,
  title: page.title,
  description: page.summary || page.tagline || "",
  href: `/services/${page.slug}`,
  group: "Services" as const,
}));

const staticSolutionHits: SearchHit[] = listSolutionPages().map((page) => ({
  id: `static-solution-${page.slug}`,
  title: page.title,
  description: page.summary || page.tagline || "",
  href: `/solutions/${page.slug}`,
  group: "Solutions" as const,
}));

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function matches(hit: SearchHit, q: string) {
  const hay = `${hit.title} ${hit.description}`.toLowerCase();
  const terms = q.split(/\s+/).filter(Boolean);
  return terms.every((term) => hay.includes(term));
}

function groupIcon(group: SearchHit["group"]) {
  switch (group) {
    case "Services":
      return Layers;
    case "Solutions":
      return Boxes;
    case "Docs":
      return FileText;
    case "FAQ":
      return HelpCircle;
    default:
      return Search;
  }
}

function groupLabel(group: SearchHit["group"]) {
  if (group === "Site") return null;
  return group;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Highlight every occurrence of the typed query (and each word) in title/description. */
function HighlightText({ text, query }: { text: string; query: string }) {
  const raw = query.trim();
  if (!raw || !text) return <>{text}</>;

  const terms = Array.from(
    new Set(
      [raw, ...raw.split(/\s+/).filter((t) => t.length > 0)].map((t) => t.toLowerCase()),
    ),
  )
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp);

  if (terms.length === 0) return <>{text}</>;

  const pattern = new RegExp(`(${terms.join("|")})`, "gi");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        const isMatch = terms.some((t) => new RegExp(`^${t}$`, "i").test(part));
        if (isMatch) {
          return (
            <span
              key={`${part}-${i}`}
              className="rounded-[3px] bg-orange-500/25 px-0.5 font-semibold text-orange-600"
            >
              {part}
            </span>
          );
        }
        return <span key={`${part}-${i}`}>{part}</span>;
      })}
    </>
  );
}

type SiteSearchProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SiteSearch({ open, onOpenChange }: SiteSearchProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const services = useServices();
  const solutions = useSolutions();
  const faqs = useFaqs();
  const docs = useDocs();

  const index = useMemo<SearchHit[]>(() => {
    const byHref = new Map<string, SearchHit>();

    const upsert = (hit: SearchHit) => {
      const prev = byHref.get(hit.href);
      if (!prev) {
        byHref.set(hit.href, hit);
        return;
      }
      if ((hit.description?.length ?? 0) > (prev.description?.length ?? 0)) {
        byHref.set(hit.href, { ...prev, ...hit, title: hit.title || prev.title });
      }
    };

    for (const hit of [...staticPages, ...staticServiceHits, ...staticSolutionHits]) {
      upsert(hit);
    }

    for (const item of services.data ?? []) {
      upsert({
        id: `service-${item._id}`,
        title: item.title,
        description: item.summary || byHref.get(`/services/${item.slug}`)?.description || "",
        href: `/services/${item.slug}`,
        group: "Services",
      });
    }

    for (const item of solutions.data ?? []) {
      upsert({
        id: `solution-${item._id}`,
        title: item.title,
        description: item.summary || byHref.get(`/solutions/${item.slug}`)?.description || "",
        href: `/solutions/${item.slug}`,
        group: "Solutions",
      });
    }

    for (const item of faqs.data ?? []) {
      const answer = stripHtml(item.answerHtml);
      upsert({
        id: `faq-${item._id}`,
        title: item.question,
        description: answer || `Category: ${item.category}`,
        href: `/faq#${item._id}`,
        group: "FAQ",
      });
    }

    for (const category of docs.data ?? []) {
      for (const article of category.articles ?? []) {
        upsert({
          id: `doc-${article._id}`,
          title: article.title,
          description: article.summary || category.title,
          href: `/documentation/${category.slug}/${article.slug}`,
          group: "Docs",
        });
      }
    }

    return Array.from(byHref.values());
  }, [services.data, solutions.data, faqs.data, docs.data]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return index.slice(0, 10);
    return index.filter((hit) => matches(hit, q)).slice(0, 20);
  }, [index, query]);

  useEffect(() => {
    setActive(0);
  }, [query, open]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const go = (href: string) => {
    onOpenChange(false);
    navigate(href);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "max-w-2xl gap-0 overflow-hidden border-border-200/80 p-0 shadow-[0_28px_80px_-28px_rgba(4,39,95,0.45)]",
          "rounded-[16px] bg-white [&>button]:hidden",
        )}
      >
        <DialogTitle className="sr-only">Site search</DialogTitle>

        <div className="relative border-b border-border-200 bg-[linear-gradient(180deg,#eef3f8_0%,#ffffff_100%)] px-4 pb-3 pt-4 sm:px-5">
          <div className="flex items-center gap-3 rounded-[12px] border border-border-200 bg-white px-3.5 shadow-[0_1px_0_rgba(4,39,95,0.04)] focus-within:border-orange-500/50 focus-within:ring-2 focus-within:ring-orange-500/15">
            <Search className="h-5 w-5 shrink-0 text-orange-500" aria-hidden />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, solutions, docs, FAQ…"
              className="h-14 w-full bg-transparent font-display text-base font-medium text-navy-900 outline-none placeholder:font-sans placeholder:text-sm placeholder:font-normal placeholder:text-text-600"
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setActive((i) => Math.min(i + 1, Math.max(results.length - 1, 0)));
                } else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setActive((i) => Math.max(i - 1, 0));
                } else if (e.key === "Enter" && results[active]) {
                  e.preventDefault();
                  go(results[active].href);
                }
              }}
            />
            <kbd className="hidden shrink-0 rounded-[6px] border border-border-200 bg-surface-50 px-1.5 py-1 font-mono text-[10px] text-text-600 sm:inline">
              ESC
            </kbd>
          </div>
        </div>

        <div className="ic-scroll max-h-[min(28rem,55vh)] overflow-y-auto px-2 py-2 sm:px-3">
          {results.length === 0 ? (
            <div className="px-4 py-12 text-center">
              <p className="font-display text-base font-semibold text-navy-900">No matches</p>
              <p className="mt-2 text-sm text-text-600">
                Nothing found for “{query}”. Try another keyword.
              </p>
            </div>
          ) : (
            <ul className="space-y-1">
              {results.map((hit, indexRow) => {
                const Icon = groupIcon(hit.group);
                const label = groupLabel(hit.group);
                const isActive = indexRow === active;
                const description = hit.description?.trim() || "No description available.";
                return (
                  <li key={hit.id}>
                    <button
                      type="button"
                      className={cn(
                        "group flex w-full items-start gap-3 rounded-[12px] px-3 py-3 text-start transition-colors",
                        isActive ? "bg-azure-100 text-navy-900" : "hover:bg-[#eef3f8]",
                      )}
                      onMouseEnter={() => setActive(indexRow)}
                      onClick={() => go(hit.href)}
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px]",
                          isActive ? "bg-white text-orange-500" : "bg-[#eef3f8] text-orange-500",
                        )}
                      >
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-2">
                          <span
                            className={cn(
                              "font-display text-sm font-semibold leading-snug",
                              "text-navy-900",
                            )}
                          >
                            <HighlightText text={hit.title} query={query} />
                          </span>
                          {label ? (
                            <span
                              className={cn(
                                "rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em]",
                                isActive
                                  ? "bg-white/80 text-navy-900/70"
                                  : "bg-surface-50 text-text-600",
                              )}
                            >
                              {label}
                            </span>
                          ) : null}
                        </span>
                        <span
                          className={cn(
                            "mt-1.5 block text-sm leading-relaxed",
                            isActive ? "text-navy-900/70" : "text-text-600",
                          )}
                        >
                          <HighlightText text={description} query={query} />
                        </span>
                      </span>
                      <ArrowRight
                        className={cn(
                          "mt-2 h-4 w-4 shrink-0 opacity-0 transition-opacity",
                          isActive ? "text-navy-900/60 opacity-100" : "text-text-600",
                        )}
                        aria-hidden
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-border-200 bg-surface-50 px-4 py-2.5 text-[11px] text-text-600 sm:px-5">
          <span className="inline-flex items-center gap-3">
            <Hint>
              <kbd className="rounded border border-border-200 bg-white px-1 font-mono">↑</kbd>
              <kbd className="rounded border border-border-200 bg-white px-1 font-mono">↓</kbd>
              navigate
            </Hint>
            <Hint>
              <CornerDownLeft className="h-3 w-3" aria-hidden />
              open
            </Hint>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.1em]">
            {results.length} result{results.length === 1 ? "" : "s"}
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Hint({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center gap-1.5">{children}</span>;
}

/** Global ⌘K / Ctrl+K listener for site search. */
export function useSiteSearchHotkey(onOpen: () => void) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpen();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onOpen]);
}
