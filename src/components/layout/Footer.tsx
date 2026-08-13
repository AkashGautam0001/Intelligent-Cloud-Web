import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { useI18n } from "@/i18n";
import { useSettings } from "@/hooks/useCms";
import { brand } from "@/lib/assets";
import { WHATSAPP_DISPLAY, whatsappExpertUrl } from "@/lib/whatsapp";

function ColHeading({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-navy-900/80">
      {children}
    </p>
  );
}

function ColLink({ to, children }: { to: string; children: string }) {
  return (
    <Link
      to={to}
      className="block text-[15px] leading-relaxed text-[#5C6570] transition-colors hover:text-navy-900"
    >
      {children}
    </Link>
  );
}

function ContactRow({
  href,
  icon: Icon,
  label,
  external,
}: {
  href: string;
  icon: typeof Mail;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex items-start gap-3"
    >
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border border-[#E2E6EC] bg-white text-azure-500 transition-colors group-hover:border-navy-900/20">
        <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
      </span>
      <span className="break-all pt-1.5 text-[15px] font-semibold leading-snug text-navy-900 underline-offset-2 group-hover:underline">
        {label}
      </span>
    </a>
  );
}

function SocialButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-[8px] border border-[#E2E6EC] bg-white px-3.5 py-2 text-[13px] font-medium text-navy-900 transition-colors hover:border-navy-900/25"
    >
      {label}
      <ArrowUpRight className="h-3.5 w-3.5 opacity-60" aria-hidden />
    </a>
  );
}

const companyLinks = [
  { to: "/about", label: "About" },
  { to: "/partners", label: "Partners" },
  { to: "/book-demo", label: "Book assessment" },
  { to: "/contact", label: "Contact" },
];

const engageLinks = [
  { to: "/services", label: "All services" },
  { to: "/solutions", label: "Solutions" },
  { to: "/solutions/cloud-migration", label: "Cloud migration" },
  { to: "/solutions/security-compliance", label: "Security" },
];

const resourceLinks = [
  { to: "/documentation", label: "Documentation" },
  { to: "/faq", label: "FAQ" },
  { to: "/support", label: "Support" },
];

const legalLinks = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Use" },
];

export function Footer() {
  const { t } = useI18n();
  const settings = useSettings();
  const email = settings.data?.email || "sales@intelligent-cloud.com";
  const phone = settings.data?.phone || WHATSAPP_DISPLAY;
  const linkedin = settings.data?.social?.linkedin;
  const twitter = settings.data?.social?.twitter;

  return (
    <footer className="border-t border-[#E6E9EF] bg-[#F4F5F7] text-navy-900">
      <div className="border-b border-[#E6E9EF]">
        <div className="container-ic flex flex-col gap-5 py-9 sm:flex-row sm:items-center sm:gap-0 lg:py-10">
          <Link to="/" className="inline-flex shrink-0 items-center gap-2.5 pr-6 sm:pr-8">
            <img
              src={brand.logo}
              alt=""
              className="h-8 w-auto"
              width={32}
              height={32}
              loading="lazy"
              decoding="async"
            />
            <span className="text-[15px] font-semibold tracking-tight">
              <span className="text-navy-900">Intelligent</span>
              <span className="text-orange-500"> Cloud</span>
            </span>
          </Link>
          <div aria-hidden className="hidden h-8 w-px shrink-0 bg-[#D7DCE4] sm:block" />
          <p className="max-w-xl text-[14px] leading-relaxed text-[#6B7280] sm:pl-8 lg:text-[15px]">
            We design, engineer, and operate production-grade cloud platforms for
            enterprises on Azure, AWS, and Kubernetes.
          </p>
        </div>
      </div>

      <div className="border-b border-[#E6E9EF]">
        <div className="container-ic grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-14">
          {/* 1 — Contact */}
          <div className="space-y-8">
            <div>
              <ColHeading>Contact</ColHeading>
              <div className="mt-4 space-y-4">
                <ContactRow href={`mailto:${email}`} icon={Mail} label={email} />
                <ContactRow
                  href={whatsappExpertUrl()}
                  icon={Phone}
                  label={phone}
                  external
                />
              </div>
            </div>
            {(linkedin || twitter) ? (
              <div>
                <ColHeading>Follow</ColHeading>
                <div className="mt-4 flex flex-wrap gap-2">
                  {linkedin ? <SocialButton href={linkedin} label="LinkedIn" /> : null}
                  {twitter ? <SocialButton href={twitter} label="X" /> : null}
                </div>
              </div>
            ) : null}
          </div>

          {/* 2 — Company */}
          <div>
            <ColHeading>Company</ColHeading>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((l) => (
                <li key={l.to}>
                  <ColLink to={l.to}>{l.label}</ColLink>
                </li>
              ))}
            </ul>
          </div>

          {/* 3 — Engage */}
          <div>
            <ColHeading>Engage</ColHeading>
            <ul className="mt-4 space-y-3">
              {engageLinks.map((l) => (
                <li key={l.to}>
                  <ColLink to={l.to}>{l.label}</ColLink>
                </li>
              ))}
            </ul>
          </div>

          {/* 4 — Resources */}
          <div>
            <ColHeading>Resources</ColHeading>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((l) => (
                <li key={l.to}>
                  <ColLink to={l.to}>{l.label}</ColLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container-ic flex flex-col gap-3 py-5 text-[13px] text-[#4B5563] sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0 leading-5">
          © {new Date().getFullYear()} {t.brand}. Enterprise cloud consulting.
        </p>
        <nav className="flex items-center gap-6" aria-label="Legal">
          {legalLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="inline-flex items-center leading-5 font-medium text-navy-900 transition-colors hover:text-orange-500"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
