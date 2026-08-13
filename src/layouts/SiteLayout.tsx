import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { SeoProvider } from "@/components/PageSeo";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SiteLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          return;
        }
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.search, location.hash]);

  return (
    <SeoProvider>
      <div className="flex min-h-screen flex-col bg-surface-50">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-[8px] focus:bg-orange-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main
          id="main-content"
          className={cn("flex-1", !isHome && "pt-16")}
          tabIndex={-1}
        >
          <motion.div
            key={location.pathname}
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.45, ease: easeOut }}
          >
            <Outlet />
          </motion.div>
        </main>
        <Footer />
        <WhatsAppFab />
      </div>
    </SeoProvider>
  );
}
