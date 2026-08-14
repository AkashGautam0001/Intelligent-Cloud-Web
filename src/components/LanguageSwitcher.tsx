import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
  variant?: "compact" | "full";
};

export function LanguageSwitcher({
  className,
  variant = "compact",
}: LanguageSwitcherProps) {
  const { t } = useI18n();

  if (variant === "full") {
    return (
      <div className={cn("space-y-2", className)}>
        <p className="px-1 font-mono text-[10px] uppercase tracking-[0.12em] text-text-600">
          {t.nav.language}
        </p>
        <LanguagePill className="w-full justify-center sm:w-auto" />
      </div>
    );
  }

  return <LanguagePill className={className} />;
}

function LanguagePill({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-border-200/80 bg-white p-1 shadow-[0_1px_2px_rgba(4,39,95,0.06)]",
        className,
      )}
      role="group"
      aria-label={t.nav.language}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        title={t.nav.english}
        aria-label={t.nav.english}
        aria-pressed={locale === "en"}
        className={cn(
          "cursor-pointer inline-flex h-7 min-w-8 items-center justify-center rounded-full px-3 text-[11px] font-semibold tracking-wide transition-all duration-200",
          locale === "en"
            ? "bg-navy-900 text-white shadow-sm hover:bg-navy-900/90"
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
        aria-pressed={locale === "ar"}
        className={cn(
          "cursor-pointer inline-flex h-7 min-w-8 items-center justify-center rounded-full px-3 text-[13px] font-semibold transition-all duration-200",
          locale === "ar"
            ? "bg-navy-900 text-white shadow-sm hover:bg-navy-900/90"
            : "text-text-600 hover:bg-navy-900/5 hover:text-navy-900",
        )}
      >
        ع
      </button>
    </div>
  );
}
