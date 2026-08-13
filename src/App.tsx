import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MotionConfig } from "framer-motion";
import { Toaster } from "@/components/ui/toast";
import { Analytics } from "@/components/Analytics";
import { LocaleProvider } from "@/i18n";
import { SiteLayout } from "@/layouts/SiteLayout";
import { DocsLayout } from "@/layouts/DocsLayout";
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { ServiceDetailPage } from "@/pages/ServiceDetailPage";
import { SolutionsPage } from "@/pages/SolutionsPage";
import { SolutionDetailPage } from "@/pages/SolutionDetailPage";
import { AboutPage } from "@/pages/AboutPage";
import { PartnersPage } from "@/pages/PartnersPage";
import {
  DocumentationArticlePage,
  DocumentationPage,
} from "@/pages/DocumentationPage";
import { FaqPage } from "@/pages/FaqPage";
import { SupportPage } from "@/pages/SupportPage";
import { ContactPage } from "@/pages/ContactPage";
import { BookDemoPage } from "@/pages/BookDemoPage";
import { PrivacyPage, TermsPage } from "@/pages/LegalPages";
import { easeOut } from "@/lib/motion";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

/**
 * Marketing routes (English, Phase 1).
 *
 * Future Arabic locale:
 * - Mount a parallel tree under `/ar/*`
 * - Wrap with <LocaleProvider initialLocale="ar">
 */
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider initialLocale="en">
        <MotionConfig transition={{ duration: 0.9, ease: easeOut }}>
          <BrowserRouter>
            <Analytics />
            <Routes>
              <Route element={<DocsLayout />}>
                <Route path="documentation" element={<DocumentationPage />} />
                <Route
                  path="documentation/:category/:slug"
                  element={<DocumentationArticlePage />}
                />
              </Route>
              <Route element={<SiteLayout />}>
                <Route index element={<HomePage />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="services/:slug" element={<ServiceDetailPage />} />
                <Route path="solutions" element={<SolutionsPage />} />
                <Route path="solutions/:slug" element={<SolutionDetailPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="partners" element={<PartnersPage />} />
                <Route path="faq" element={<FaqPage />} />
                <Route path="support" element={<SupportPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="book-demo" element={<BookDemoPage />} />
                <Route path="privacy" element={<PrivacyPage />} />
                <Route path="terms" element={<TermsPage />} />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
          <Toaster richColors position="top-right" />
        </MotionConfig>
      </LocaleProvider>
    </QueryClientProvider>
  );
}
