import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  Headphones,
  LifeBuoy,
  Mail,
  Shield,
  User,
  Wrench,
} from "lucide-react";
import { apiFetch } from "@/lib/api";
import { getResourcePage, support as supportFallback } from "@/content/resources";
import { ResourceLongForm } from "@/components/resources/ResourceLongForm";
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
import { IcChip } from "@/components/ui/ic-chip";
import { IcIconTile } from "@/components/ui/ic-icon-tile";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";
import {
  controlClass,
  email as validateEmail,
  hasErrors,
  minLength,
  type FieldErrors,
} from "@/lib/validation";

const tiers = [
  {
    id: "standard" as const,
    title: "Standard Support",
    short: "STD",
    Icon: Headphones,
    body: "Business-hours support for setup, configuration, and how-to questions on active engagements.",
    points: [
      "Email ticket intake during business hours",
      "Guidance on platform and service configuration",
      "Best for non-production or advisory follow-ups",
    ],
  },
  {
    id: "managed-operations" as const,
    title: "Managed Operations (24×7)",
    short: "OPS",
    Icon: Shield,
    body: "Round-the-clock monitoring and incident response for production estates under managed operations.",
    points: [
      "Alerting tied to agreed SLOs and runbooks",
      "Incident triage with change-window discipline",
      "Handoffs documented for your internal owners",
    ],
  },
  {
    id: "priority" as const,
    title: "Priority Support (Enterprise)",
    short: "PRI",
    Icon: AlertTriangle,
    body: "Dedicated response SLAs and a named point of contact for complex or multi-team estates.",
    points: [
      "Named escalation path and response targets",
      "Priority queue for production-impacting issues",
      "Quarterly ops reviews when contracted",
    ],
  },
];

const flow = [
  { step: "01", title: "Open", body: "Submit with environment, severity, and blast radius.", Icon: ClipboardList },
  { step: "02", title: "Triage", body: "We confirm impact and change-window constraints.", Icon: Wrench },
  { step: "03", title: "Act", body: "Remediate with runbooks and documented ownership.", Icon: Shield },
  { step: "04", title: "Close", body: "Confirm resolution and capture follow-up actions.", Icon: CheckCircle2 },
] as const;

type SupportForm = {
  name: string;
  email: string;
  subject: string;
  body: string;
};

type SupportField = keyof SupportForm;

function validateSupport(form: SupportForm): FieldErrors<SupportField> {
  return {
    name: minLength(form.name, 2, "Name"),
    email: validateEmail(form.email),
    subject: minLength(form.subject, 5, "Subject"),
    body: minLength(form.body, 20, "Details"),
  };
}

export function SupportPage() {
  const { t, locale } = useI18n();
  const supportContent = getResourcePage("support", locale) ?? supportFallback;
  const formStartedAt = useFormStartedAt();
  const [website, setWebsite] = useState("");
  const [tier, setTier] = useState<(typeof tiers)[number]["id"]>("standard");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<FieldErrors<SupportField>>({});
  const [form, setForm] = useState<SupportForm>({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const setField = <K extends SupportField>(key: K, value: SupportForm[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const selected = tiers.find((item) => item.id === tier) ?? tiers[0];

  return (
    <ResourceLongForm
      content={supportContent}
      heroVisual={
        <IcCard className="overflow-hidden p-6">
          <div className="flex items-center gap-4">
            <IcIconTile size="lg" className="h-14 w-14 rounded-[14px]">
              <LifeBuoy className="h-7 w-7" aria-hidden />
            </IcIconTile>
            <div>
              <p className="font-display text-sm font-semibold text-navy-900">Support desk</p>
              <p className="mt-1 text-sm text-text-600">STD · OPS · PRI</p>
            </div>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-2">
            {flow.map((f) => (
              <li
                key={f.step}
                className="flex items-center gap-2 rounded-[10px] border border-border-200 bg-[#eef3f8]/80 px-3 py-2"
              >
                <f.Icon className="h-3.5 w-3.5 text-orange-500" aria-hidden />
                <div>
                  <p className="font-mono text-[10px] text-orange-500">{f.step}</p>
                  <p className="text-sm font-medium text-navy-900">{f.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </IcCard>
      }
    >
      <SectionShell
        tone="navyLight"
        eyebrow="Support"
        title="Open a ticket"
        lead="Choose a tier, then submit details so we can triage and route correctly."
      >
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {tiers.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTier(item.id)}
              className="text-start"
            >
              <IcCard
                interactive
                animateIn={false}
                className={cn("h-full p-6", tier === item.id && "border-orange-500")}
              >
                <div className="flex items-center justify-between gap-3">
                  <IcIconTile size="sm">
                    <item.Icon className="h-4 w-4" aria-hidden />
                  </IcIconTile>
                  <IcChip as="span" active={tier === item.id}>
                    {item.short}
                  </IcChip>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-600">{item.body}</p>
                <ul className="mt-3 space-y-1 text-xs text-text-600">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-orange-500" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              </IcCard>
            </button>
          ))}
        </div>

        <ModernFormSplit
          aside={
            <IcCard className="h-full space-y-4 p-6">
              <div className="flex items-center gap-3">
                <IcIconTile size="md">
                  <selected.Icon className="h-5 w-5" aria-hidden />
                </IcIconTile>
                <div>
                  <p className="font-display text-base font-semibold text-navy-900">
                    {selected.title}
                  </p>
                  <p className="text-sm text-text-600">Attached to this ticket</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-text-600">{selected.body}</p>
              <ul className="space-y-2">
                {selected.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-text-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-navy-900" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </IcCard>
          }
        >
          {done ? (
            <ModernFormCard title="Ticket received" icon={CheckCircle2}>
              <p className="text-sm text-text-600">
                Our team will follow up by email. You can also review FAQs while you wait.
              </p>
              <Button asChild className="mt-2" variant="secondary">
                <Link to="/faq">
                  Browse FAQs <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </ModernFormCard>
          ) : (
            <form
              className="w-full"
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                const next = validateSupport(form);
                setErrors(next);
                if (hasErrors(next)) {
                  toast.error("Please fix the highlighted fields");
                  return;
                }
                setSubmitting(true);
                void apiFetch("/support/tickets", {
                  method: "POST",
                  body: JSON.stringify(
                    withSpamFields({ ...form, tier }, { website, formStartedAt }),
                  ),
                })
                  .then(() => {
                    setDone(true);
                    toast.success("Ticket submitted");
                  })
                  .catch((err: unknown) => {
                    toast.error(err instanceof Error ? err.message : "Submit failed");
                  })
                  .finally(() => setSubmitting(false));
              }}
            >
              <HoneypotField value={website} onChange={setWebsite} />
              <ModernFormCard
                title="Open a ticket"
                subtitle={
                  <span className="inline-flex items-center gap-2">
                    <selected.Icon className="h-3.5 w-3.5 text-orange-500" aria-hidden />
                    Tier: {selected.title}
                  </span>
                }
                icon={LifeBuoy}
              >
                <div className="grid w-full gap-4 sm:grid-cols-2">
                  <FormField id="name" label={t.forms.name} icon={User} required error={errors.name}>
                    <input
                      id="name"
                      aria-invalid={Boolean(errors.name)}
                      className={controlClass(modernControlClass, errors.name)}
                      value={form.name}
                      onChange={(e) => setField("name", e.target.value)}
                    />
                  </FormField>
                  <FormField id="email" label={t.forms.email} icon={Mail} required error={errors.email}>
                    <input
                      id="email"
                      type="email"
                      aria-invalid={Boolean(errors.email)}
                      className={controlClass(modernControlClass, errors.email)}
                      value={form.email}
                      onChange={(e) => setField("email", e.target.value)}
                    />
                  </FormField>
                </div>
                <FormField id="subject" label={t.forms.subject} icon={FileText} required error={errors.subject}>
                  <input
                    id="subject"
                    aria-invalid={Boolean(errors.subject)}
                    className={controlClass(modernControlClass, errors.subject)}
                    value={form.subject}
                    onChange={(e) => setField("subject", e.target.value)}
                  />
                </FormField>
                <FormField
                  id="body"
                  label="Details"
                  icon={ClipboardList}
                  required
                  error={errors.body}
                  hint={errors.body ? undefined : "Include environment, severity, impact, and recent changes."}
                >
                  <textarea
                    id="body"
                    rows={6}
                    aria-invalid={Boolean(errors.body)}
                    className={controlClass(modernTextareaClass, errors.body)}
                    value={form.body}
                    onChange={(e) => setField("body", e.target.value)}
                  />
                </FormField>
                <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
                  <LifeBuoy className="h-4 w-4" />
                  {submitting ? t.forms.sending : t.forms.submit}
                </Button>
              </ModernFormCard>
            </form>
          )}
        </ModernFormSplit>
      </SectionShell>
    </ResourceLongForm>
  );
}
