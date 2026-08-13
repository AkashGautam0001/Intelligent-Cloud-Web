import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { en, messagesByLocale, type Locale, type Messages } from "./messages/en";

type I18nValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  t: Messages;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nValue | null>(null);

function dirForLocale(locale: Locale): "ltr" | "rtl" {
  // When Arabic ships: return locale === "ar" ? "rtl" : "ltr"
  return locale === "en" ? "ltr" : "ltr";
}

export function LocaleProvider({
  children,
  initialLocale = "en",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const locale = initialLocale;
  const dir = dirForLocale(locale);
  const t = messagesByLocale[locale] ?? en;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      dir,
      t,
      setLocale: (_next: Locale) => {
        // Phase 1: English only. Wire locale switch + /ar routes in a later phase.
        console.info("[i18n] Locale switching is stubbed until Arabic ships.");
      },
    }),
    [locale, dir, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LocaleProvider");
  return ctx;
}
