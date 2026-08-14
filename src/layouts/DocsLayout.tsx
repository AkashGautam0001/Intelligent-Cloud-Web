import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Home, Search, Menu } from "lucide-react";
import { SeoProvider } from "@/components/PageSeo";
import { SiteSearch, useSiteSearchHotkey } from "@/components/SiteSearch";
import { Footer } from "@/components/layout/Footer";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { brand } from "@/lib/assets";
import { cn } from "@/lib/utils";

const docsLinks = [
  { to: "/", label: "Home" },
  { to: "/documentation", label: "Directory" },
  { to: "/services", label: "Services" },
  { to: "/solutions", label: "Solutions" },
  { to: "/faq", label: "FAQ" },
  { to: "/support", label: "Support" },
];

function DocsTopNav({
  onOpenSearch,
  onOpenMobile,
}: {
  onOpenSearch: () => void;
  onOpenMobile: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto grid h-14 max-w-[96rem] grid-cols-[1fr_auto] items-center xl:h-16 xl:grid-cols-[17.5rem_minmax(0,1fr)] 2xl:grid-cols-[18rem_minmax(0,1fr)]">
        <div className="flex h-full items-center gap-3 border-border-200 px-4 sm:px-6 xl:border-e xl:px-5 2xl:px-5">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-200 text-navy-900 xl:hidden"
            onClick={onOpenMobile}
            aria-label="Open docs menu"
          >
            <Menu className="h-4 w-4" />
          </button>

          <Link to="/" className="flex min-w-0 items-center gap-2.5">
            <img src={brand.logo} alt="" className="h-7 w-auto" />
            <span className="hidden truncate font-display text-sm font-semibold tracking-tight text-navy-900 sm:inline">
              Intelligent Cloud
            </span>
            <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-orange-500">
              Docs
            </span>
          </Link>
        </div>

        <div className="flex h-full items-center gap-2 px-4 sm:px-6 lg:px-8 xl:px-6">
          <nav className="hidden items-center gap-0.5 md:flex">
            {docsLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-text-600 transition-colors hover:bg-surface-50 hover:text-navy-900"
              >
                {link.label === "Home" ? <Home className="h-3.5 w-3.5" aria-hidden /> : null}
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="ms-auto flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onOpenSearch}
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-border-200 bg-surface-50 px-3 text-sm text-text-600 transition-colors hover:border-navy-900/20 hover:text-navy-900"
            >
              <Search className="h-3.5 w-3.5" aria-hidden />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden rounded border border-border-200 bg-white px-1.5 py-0.5 font-mono text-[10px] text-text-600 sm:inline">
                Ctrl K
              </kbd>
            </button>
            <Link
              to="/contact"
              className="inline-flex h-9 items-center rounded-lg bg-orange-500 px-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#d95c0f]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

/**
 * Dedicated docs chrome (navbar → content → footer).
 * Marketing SiteLayout is not used on /documentation*.
 */
export function DocsLayout() {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useSiteSearchHotkey(() => setSearchOpen(true));

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView();
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.search, location.hash]);

  return (
    <SeoProvider>
      <div className={cn("docs-shell min-h-screen bg-white text-navy-900 antialiased")}>
        <a
          href="#docs-main"
          className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-orange-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <DocsTopNav
          onOpenSearch={() => setSearchOpen(true)}
          onOpenMobile={() => setMobileOpen(true)}
        />
        <main id="docs-main" className="min-h-[calc(100vh-8rem)]" tabIndex={-1}>
          <Outlet context={{ mobileOpen, setMobileOpen }} />
        </main>
        <Footer />
        <SiteSearch open={searchOpen} onOpenChange={setSearchOpen} />

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetContent side="left" className="w-[min(100%,20rem)] border-border-200 bg-white p-0">
            <div className="border-b border-border-200 px-5 py-4">
              <SheetTitle>Documentation</SheetTitle>
            </div>
            <div className="space-y-1 p-3">
              {docsLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-text-600 hover:bg-surface-50 hover:text-navy-900"
                >
                  {link.label === "Home" ? <Home className="h-4 w-4" /> : null}
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </SeoProvider>
  );
}
