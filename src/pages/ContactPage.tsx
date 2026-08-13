import { useState } from "react";
import {
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquareText,
  Phone,
  Send,
  User,
} from "lucide-react";
import { apiFetch } from "@/lib/api";
import { useSettings } from "@/hooks/useCms";
import { contact as contactContent } from "@/content/company";
import { CompanyLongForm } from "@/components/company/CompanyLongForm";
import { HoneypotField } from "@/components/HoneypotField";
import { useFormStartedAt, withSpamFields } from "@/lib/forms";
import {
  FormField,
  ModernFormCard,
  ModernFormSplit,
  modernControlClass,
  modernTextareaClass,
} from "@/components/forms/modern-form";
import { SectionShell } from "@/components/ui/section-shell";
import { IcCard } from "@/components/ui/ic-card";
import { IcIconTile } from "@/components/ui/ic-icon-tile";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { WHATSAPP_DISPLAY, whatsappExpertUrl } from "@/lib/whatsapp";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";
import {
  controlClass,
  email as validateEmail,
  hasErrors,
  minLength,
  optionalMax,
  phone as validatePhone,
  type FieldErrors,
} from "@/lib/validation";

const needs = [
  "Cloud Migration",
  "Managed Services",
  "Kubernetes",
  "DevOps Consulting",
  "Partnership",
  "Other",
] as const;

type ContactForm = {
  name: string;
  email: string;
  company: string;
  phone: string;
  need: (typeof needs)[number];
  message: string;
};

type ContactField = keyof ContactForm;

function validateContact(form: ContactForm): FieldErrors<ContactField> {
  return {
    name: minLength(form.name, 2, "Name"),
    email: validateEmail(form.email),
    company: minLength(form.company, 2, "Company"),
    phone: validatePhone(form.phone),
    message: optionalMax(form.message, 2000, "Message"),
  };
}

export function ContactPage() {
  const { t } = useI18n();
  const settings = useSettings();
  const formStartedAt = useFormStartedAt();
  const [website, setWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<FieldErrors<ContactField>>({});
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    company: "",
    phone: "",
    need: needs[0],
    message: "",
  });

  const setField = <K extends ContactField>(key: K, value: ContactForm[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const email = settings.data?.email || "sales@intelligent-cloud.com";
  const phone = settings.data?.phone || WHATSAPP_DISPLAY;
  const whatsapp = settings.data?.whatsapp || WHATSAPP_DISPLAY;
  const address = settings.data?.address || "";

  return (
    <CompanyLongForm
      content={contactContent}
      heroVisual={
        <IcCard className="space-y-4 p-6">
          <div className="flex items-center gap-4">
            <IcIconTile size="lg" className="h-14 w-14 rounded-[14px]">
              <Mail className="h-7 w-7" aria-hidden />
            </IcIconTile>
            <div>
              <p className="font-display text-sm font-semibold text-navy-900">Talk to sales</p>
              <p className="mt-1 text-sm text-text-600">Or WhatsApp an engineer</p>
            </div>
          </div>
          <div className="space-y-3 border-t border-border-200 pt-4">
            <a className="flex items-center gap-3 text-sm text-navy-900 hover:underline" href={`mailto:${email}`}>
              <Mail className="h-4 w-4 text-orange-500" aria-hidden />
              {email}
            </a>
            <a className="flex items-center gap-3 text-sm text-navy-900 hover:underline" href={`tel:${phone}`}>
              <Phone className="h-4 w-4 text-orange-500" aria-hidden />
              {phone || "—"}
            </a>
            <a
              className="flex items-center gap-3 text-sm text-navy-900 hover:underline"
              href={whatsappExpertUrl(t.whatsapp.defaultMessage)}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4 text-orange-500" aria-hidden />
              {whatsapp}
            </a>
            {address ? (
              <p className="flex items-start gap-3 text-sm text-text-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden />
                {address}
              </p>
            ) : null}
          </div>
        </IcCard>
      }
    >
      <SectionShell
        tone="navyLight"
        eyebrow="Message"
        title="Send a structured note"
        lead="Channels and a message form — we reply by email."
      >
        <ModernFormSplit
          aside={
            <IcCard className="h-full space-y-5 p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <IcIconTile size="md">
                  <Send className="h-5 w-5" aria-hidden />
                </IcIconTile>
                <div>
                  <p className="font-display text-base font-semibold text-navy-900">Direct channels</p>
                  <p className="text-sm text-text-600">Pick the path that fits</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  { Icon: Mail, label: "Email", value: email, href: `mailto:${email}` },
                  { Icon: Phone, label: "Phone", value: phone || "—", href: `tel:${phone}` },
                  {
                    Icon: MessageCircle,
                    label: "WhatsApp",
                    value: whatsapp,
                    href: whatsappExpertUrl(t.whatsapp.defaultMessage),
                    external: true,
                  },
                ].map((row) => (
                  <li key={row.label} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-orange-500/10 text-orange-500">
                      <row.Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#6b7a8c]">
                        {row.label}
                      </p>
                      <a
                        className="mt-0.5 block truncate text-sm font-medium text-navy-900 hover:underline"
                        href={row.href}
                        {...(row.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      >
                        {row.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex items-start gap-3 rounded-[12px] border border-border-200 bg-[#eef3f8]/80 p-4">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden />
                <p className="text-sm leading-relaxed text-text-600">
                  Typical reply within one business day. Prefer a timed assessment? Use Book demo.
                </p>
              </div>
            </IcCard>
          }
        >
          {done ? (
            <ModernFormCard title="Message sent" icon={CheckCircle2}>
              <p className="text-sm leading-relaxed text-text-600">
                Thanks — our team will follow up shortly. Check your inbox for a confirmation.
              </p>
            </ModernFormCard>
          ) : (
            <form
              className="w-full"
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                const next = validateContact(form);
                setErrors(next);
                if (hasErrors(next)) {
                  toast.error("Please fix the highlighted fields");
                  return;
                }
                setSubmitting(true);
                void apiFetch("/contact", {
                  method: "POST",
                  body: JSON.stringify(withSpamFields(form, { website, formStartedAt })),
                })
                  .then(() => {
                    setDone(true);
                    toast.success("Message sent");
                  })
                  .catch((err: unknown) => {
                    toast.error(err instanceof Error ? err.message : "Submit failed");
                  })
                  .finally(() => setSubmitting(false));
              }}
            >
              <HoneypotField value={website} onChange={setWebsite} />
              <ModernFormCard
                title="Contact form"
                subtitle="Name, email, company, and phone are required."
                icon={MessageSquareText}
              >
                <div className="grid w-full gap-4 sm:grid-cols-2">
                  <FormField id="name" label="Name" icon={User} required error={errors.name}>
                    <input
                      id="name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={controlClass(modernControlClass, errors.name)}
                      value={form.name}
                      onChange={(e) => setField("name", e.target.value)}
                    />
                  </FormField>
                  <FormField id="email" label="Email" icon={Mail} required error={errors.email}>
                    <input
                      id="email"
                      type="email"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={controlClass(modernControlClass, errors.email)}
                      value={form.email}
                      onChange={(e) => setField("email", e.target.value)}
                    />
                  </FormField>
                  <FormField id="company" label="Company" icon={Building2} required error={errors.company}>
                    <input
                      id="company"
                      aria-invalid={Boolean(errors.company)}
                      aria-describedby={errors.company ? "company-error" : undefined}
                      className={controlClass(modernControlClass, errors.company)}
                      value={form.company}
                      onChange={(e) => setField("company", e.target.value)}
                    />
                  </FormField>
                  <FormField id="phone" label="Phone" icon={Phone} required error={errors.phone}>
                    <input
                      id="phone"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={controlClass(modernControlClass, errors.phone)}
                      value={form.phone}
                      onChange={(e) => setField("phone", e.target.value)}
                    />
                  </FormField>
                </div>
                <FormField id="need" label="What are you looking for?" icon={Send} required>
                  <select
                    id="need"
                    className={cn(modernControlClass, "appearance-none")}
                    value={form.need}
                    onChange={(e) =>
                      setField("need", e.target.value as (typeof needs)[number])
                    }
                  >
                    {needs.map((need) => (
                      <option key={need} value={need}>
                        {need}
                      </option>
                    ))}
                  </select>
                </FormField>
                <FormField
                  id="message"
                  label="Message (optional)"
                  icon={MessageSquareText}
                  error={errors.message}
                >
                  <textarea
                    id="message"
                    rows={5}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={controlClass(modernTextareaClass, errors.message)}
                    value={form.message}
                    onChange={(e) => setField("message", e.target.value)}
                  />
                </FormField>
                <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
                  <Send className="h-4 w-4" />
                  {submitting ? "Sending…" : "Send message"}
                </Button>
              </ModernFormCard>
            </form>
          )}
        </ModernFormSplit>
      </SectionShell>
    </CompanyLongForm>
  );
}
