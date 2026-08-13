import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

function loadScript(src: string, attrs: Record<string, string> = {}) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const el = document.createElement("script");
  el.src = src;
  el.async = true;
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  document.head.appendChild(el);
}

/**
 * Env-gated analytics. Leave IDs empty in local/dev to disable.
 * Prefer GTM container for GA4 when both are set (avoid double-counting).
 */
export function Analytics() {
  useEffect(() => {
    const gtmId = import.meta.env.VITE_GTM_ID?.trim();
    const gaId = import.meta.env.VITE_GA4_ID?.trim();
    const clarityId = import.meta.env.VITE_CLARITY_ID?.trim();

    if (gtmId) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
      loadScript(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`);

      if (!document.getElementById("ic-gtm-noscript")) {
        const noscript = document.createElement("noscript");
        noscript.id = "ic-gtm-noscript";
        noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(gtmId)}" height="0" width="0" style="display:none;visibility:hidden" title="gtm"></iframe>`;
        document.body.prepend(noscript);
      }
    } else if (gaId) {
      loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      };
      window.gtag("js", new Date());
      window.gtag("config", gaId);
    }

    if (clarityId) {
      const w = window;
      w.clarity =
        w.clarity ||
        function (...args: unknown[]) {
          ((w.clarity as unknown as { q: unknown[] }).q =
            (w.clarity as unknown as { q?: unknown[] }).q || []).push(args);
        };
      loadScript(`https://www.clarity.ms/tag/${encodeURIComponent(clarityId)}`);
    }
  }, []);

  return null;
}
