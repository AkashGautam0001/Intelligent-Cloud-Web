import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
  variant?: "compact" | "full" | "tab";
};

export function LanguageSwitcher({
  className,
  variant = "compact",
}: LanguageSwitcherProps) {
  if (variant === "tab") {
    return <LanguageTab className={className} />;
  }

  if (variant === "full") {
    return <LanguageFull className={className} />;
  }

  return <LanguagePill className={className} />;
}

/* ========================================================================= */
/* FLOATING EDGE TAB                                                        */
/* ========================================================================= */

function LanguageTab({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  const isArabic = locale === "ar";

  return (
    <div dir="ltr" className={cn("shrink-0", className)}>
      <div
        role="group"
        aria-label={t.nav.language}
        className={cn(
          "relative flex",

          // Smaller size
          "h-11 w-[88px]",

          "items-center",

          "bg-navy-900",

          // Small padding
          "p-0.5",

          // Rounded only on the outer side
          isArabic
            ? "rounded-e-[12px] rounded-s-none"
            : "rounded-s-[12px] rounded-e-none",

          // Soft shadow
          "shadow-[0_6px_18px_-8px_rgba(4,39,95,0.45)]",
        )}
      >
        {/* Active background */}
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute",
            "top-1 bottom-1",

            // Smaller active pill
            "w-[40px]",

            "rounded-[9px]",
            "bg-white",

            "shadow-[0_2px_6px_rgba(4,39,95,0.12)]",

            "transition-all duration-300",
            "ease-out",

            // Keep active language toward the inside
            isArabic ? "right-1" : "left-1",
          )}
        />

        {/* English */}
        <button
          type="button"
          onClick={() => setLocale("en")}
          title={t.nav.english}
          aria-label={t.nav.english}
          aria-pressed={!isArabic}
          className={cn(
            "relative z-10",
            "flex h-full w-1/2",
            "items-center justify-center",

            "cursor-pointer",

            "rounded-[18px]",

            "text-[11px]",
            "font-bold",
            "tracking-wide",

            "transition-colors duration-200",

            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-white/60",

            !isArabic ? "text-navy-900" : "text-white/55 hover:text-white",
          )}
        >
          EN
        </button>

        {/* Arabic */}
        <button
          type="button"
          onClick={() => setLocale("ar")}
          title={t.nav.arabic}
          aria-label={t.nav.arabic}
          aria-pressed={isArabic}
          className={cn(
            "relative z-10",
            "flex h-full w-1/2",
            "items-center justify-center",

            "cursor-pointer",

            "rounded-[18px]",

            "font-arabic",
            "text-[17px]",
            "font-medium",
            "leading-none",

            "transition-colors duration-200",

            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-white/60",

            isArabic ? "text-navy-900" : "text-white/55 hover:text-white",
          )}
        >
          ع
        </button>
      </div>
    </div>
  );
}
/* ========================================================================= */
/* COMPACT PILL                                                             */
/* ========================================================================= */

function LanguagePill({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  const isArabic = locale === "ar";

  return (
    <div
      dir="ltr"
      role="group"
      aria-label={t.nav.language}
      className={cn(
        "inline-flex items-center gap-1",
        "rounded-full",
        "border border-border-200",
        "bg-white",
        "p-1",
        "shadow-[0_2px_8px_rgba(4,39,95,0.08)]",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        title={t.nav.english}
        aria-label={t.nav.english}
        aria-pressed={!isArabic}
        className={cn(
          "flex h-8 min-w-10 items-center justify-center",
          "rounded-full",
          "px-3",
          "cursor-pointer",

          "text-[11px]",
          "font-semibold",
          "tracking-wide",

          "transition-all duration-200",

          !isArabic
            ? "bg-navy-900 text-white shadow-sm"
            : "text-text-600 hover:bg-navy-900/5 hover:text-navy-900",
        )}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLocale("ar")}
        title={t.nav.arabic}
        aria-label={t.nav.arabic}
        aria-pressed={isArabic}
        className={cn(
          "flex h-8 min-w-10 items-center justify-center",
          "rounded-full",
          "px-3",
          "cursor-pointer",

          "font-arabic",
          "text-[16px]",
          "font-medium",
          "leading-none",

          "transition-all duration-200",

          isArabic
            ? "bg-navy-900 text-white shadow-sm"
            : "text-text-600 hover:bg-navy-900/5 hover:text-navy-900",
        )}
      >
        ع
      </button>
    </div>
  );
}

/* ========================================================================= */
/* FULL VERSION                                                             */
/* ========================================================================= */

function LanguageFull({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  const isArabic = locale === "ar";

  return (
    <div className={cn("space-y-2", className)}>
      <p className="px-1 text-[10px] font-medium uppercase tracking-[0.12em] text-text-600">
        {t.nav.language}
      </p>

      <div
        dir="ltr"
        className="inline-flex items-center gap-1 rounded-full border border-border-200 bg-white p-1"
      >
        <button
          type="button"
          onClick={() => setLocale("en")}
          aria-pressed={!isArabic}
          className={cn(
            "flex h-8 min-w-10 items-center justify-center rounded-full px-3",
            "text-[11px] font-semibold tracking-wide transition-all",
            !isArabic ? "bg-navy-900 text-white" : "text-text-600 hover:bg-navy-900/5",
          )}
        >
          EN
        </button>

        <button
          type="button"
          onClick={() => setLocale("ar")}
          aria-pressed={isArabic}
          className={cn(
            "flex h-8 min-w-10 items-center justify-center rounded-full px-3",
            "font-arabic text-[16px] leading-none transition-all",
            isArabic ? "bg-navy-900 text-white" : "text-text-600 hover:bg-navy-900/5",
          )}
        >
          ع
        </button>
      </div>
    </div>
  );
}
