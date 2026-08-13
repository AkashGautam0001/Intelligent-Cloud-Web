import { useEffect, useRef, useState } from "react";
import {
  Building2,
  CalendarCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Crosshair,
  Mail,
  NotebookPen,
  Phone,
  Target,
  User,
} from "lucide-react";
import { apiFetch } from "@/lib/api";
import { bookDemo as bookDemoContent } from "@/content/company";
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
import { IcChip } from "@/components/ui/ic-chip";
import { IcIconTile } from "@/components/ui/ic-icon-tile";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import {
  controlClass,
  email as validateEmail,
  futureOrTodayDate,
  hasErrors,
  minLength,
  optionalMax,
  phone as validatePhone,
  sanitizePhoneInput,
  required,
  type FieldErrors,
} from "@/lib/validation";

const needs = [
  "Cloud Migration",
  "Managed Cloud",
  "Kubernetes",
  "DevOps",
  "Security",
  "Other",
] as const;

type FormState = {
  need: (typeof needs)[number];
  name: string;
  email: string;
  company: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
};

type BookingField = keyof FormState;

const empty: FormState = {
  need: "Cloud Migration",
  name: "",
  email: "",
  company: "",
  phone: "",
  preferredDate: "",
  preferredTime: "",
  notes: "",
};

const stepLabels = [
  { label: "Need", Icon: Target },
  { label: "Identity", Icon: User },
  { label: "Schedule", Icon: CalendarDays },
] as const;

function validateStep(step: number, form: FormState): FieldErrors<BookingField> {
  if (step === 1) {
    return { need: required(form.need, "Need") };
  }
  if (step === 2) {
    return {
      name: minLength(form.name, 2, "Name"),
      company: minLength(form.company, 2, "Company"),
      email: validateEmail(form.email),
      phone: validatePhone(form.phone),
    };
  }
  return {
    preferredDate: futureOrTodayDate(form.preferredDate, "Preferred date"),
    preferredTime: required(form.preferredTime, "Preferred time"),
    notes: optionalMax(form.notes, 2000, "Notes"),
  };
}

export function BookDemoPage() {
  const formStartedAt = useFormStartedAt();
  const [step, setStep] = useState(1);
  const [website, setWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<FieldErrors<BookingField>>({});
  const [form, setForm] = useState<FormState>(empty);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    panelRef.current?.focus();
  }, [step]);

  const setField = <K extends BookingField>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  return (
    <CompanyLongForm
      content={bookDemoContent}
      heroVisual={
        <IcCard className="overflow-hidden p-6">
          <div className="flex items-center gap-4">
            <IcIconTile size="lg" className="h-14 w-14 rounded-[14px]">
              <CalendarCheck className="h-7 w-7" aria-hidden />
            </IcIconTile>
            <div>
              <p className="font-display text-sm font-semibold text-navy-900">Free assessment</p>
              <p className="mt-1 text-sm text-text-600">30 minutes · engineer-led</p>
            </div>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {["Migration readiness", "Platform / GitOps", "Managed operations"].map((item) => (
              <li key={item}>
                <IcChip as="span">{item}</IcChip>
              </li>
            ))}
          </ul>
        </IcCard>
      }
    >
      <SectionShell
        tone="navyLight"
        eyebrow="Booking"
        title="Request a preferred slot"
        lead="Tell us what you want to cover — we confirm the slot by email."
      >
        <ModernFormSplit
          aside={
            <IcCard className="h-full space-y-5 p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <IcIconTile size="md">
                  <CalendarCheck className="h-5 w-5" aria-hidden />
                </IcIconTile>
                <div>
                  <p className="font-display text-base font-semibold text-navy-900">
                    What you get
                  </p>
                  <p className="text-sm text-text-600">30-minute engineer session</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  { Icon: Crosshair, text: "Workload-focused conversation — not a pitch deck" },
                  { Icon: Clock3, text: "Preferred time confirmed manually by email" },
                  { Icon: NotebookPen, text: "Written follow-up notes and next-step options" },
                ].map((row) => (
                  <li key={row.text} className="flex gap-3 text-sm leading-relaxed text-text-600">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-orange-500/10 text-orange-500">
                      <row.Icon className="h-4 w-4" aria-hidden />
                    </span>
                    {row.text}
                  </li>
                ))}
              </ul>
            </IcCard>
          }
        >
          <div className="w-full space-y-5">
            <ol className="grid w-full grid-cols-3 gap-2" aria-label="Booking steps">
              {stepLabels.map(({ label, Icon }, index) => {
                const n = index + 1;
                return (
                  <li
                    key={label}
                    aria-current={step === n ? "step" : undefined}
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-[12px] px-2 py-3 font-mono text-xs tracking-[0.08em]",
                      step === n
                        ? "bg-orange-500 text-white"
                        : step > n
                          ? "bg-azure-100 text-navy-900"
                          : "bg-border-200/60 text-text-600",
                    )}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    <span className="hidden sm:inline">{label}</span>
                    <span className="sm:hidden">{n}</span>
                  </li>
                );
              })}
            </ol>

            {done ? (
              <ModernFormCard title="Request received" icon={CheckCircle2}>
                <p className="text-sm text-text-600">
                  Thanks — we&apos;ll confirm your preferred slot by email shortly.
                </p>
              </ModernFormCard>
            ) : (
              <form
                className="w-full"
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();
                  const next = validateStep(step, form);
                  setErrors(next);
                  if (hasErrors(next)) {
                    toast.error("Please fix the highlighted fields");
                    return;
                  }
                  if (step < 3) {
                    setStep((s) => s + 1);
                    setErrors({});
                    return;
                  }
                  setSubmitting(true);
                  void apiFetch("/bookings", {
                    method: "POST",
                    body: JSON.stringify(withSpamFields(form, { website, formStartedAt })),
                  })
                    .then(() => {
                      setDone(true);
                      toast.success("Demo request sent");
                    })
                    .catch((err: unknown) => {
                      toast.error(err instanceof Error ? err.message : "Submit failed");
                    })
                    .finally(() => setSubmitting(false));
                }}
              >
                <HoneypotField value={website} onChange={setWebsite} />
                <ModernFormCard
                  title={`Step ${step}: ${stepLabels[step - 1]!.label}`}
                  subtitle="Full-width booking wizard — no live calendar sync."
                  icon={stepLabels[step - 1]!.Icon}
                >
                  <div
                    ref={panelRef}
                    tabIndex={-1}
                    className="w-full outline-none"
                    aria-labelledby={`booking-step-${step}`}
                  >
                    <p id={`booking-step-${step}`} className="sr-only">
                      Step {step}: {stepLabels[step - 1]!.label}
                    </p>

                    {step === 1 ? (
                      <div className="space-y-3">
                        <p className="inline-flex items-center gap-2 text-sm font-medium text-navy-900">
                          <Target className="h-4 w-4 text-orange-500" aria-hidden />
                          What do you need help with?
                          <span className="text-orange-500">*</span>
                        </p>
                        <div className="grid w-full gap-2 sm:grid-cols-2">
                          {needs.map((need) => (
                            <button
                              key={need}
                              type="button"
                              onClick={() => setField("need", need)}
                              className={cn(
                                "rounded-[12px] border px-4 py-3.5 text-left text-sm transition-colors duration-500",
                                form.need === need
                                  ? "border-orange-500 bg-orange-500/[0.06] text-navy-900"
                                  : "border-border-200 bg-[#f8fafc] text-text-600 hover:border-orange-500/40",
                                errors.need && form.need !== need && "border-danger/40",
                              )}
                            >
                              {need}
                            </button>
                          ))}
                        </div>
                        {errors.need ? (
                          <p role="alert" className="text-xs font-medium text-danger">
                            {errors.need}
                          </p>
                        ) : null}
                      </div>
                    ) : null}

                    {step === 2 ? (
                      <div className="grid w-full gap-4 sm:grid-cols-2">
                        <FormField id="name" label="Name" icon={User} required error={errors.name}>
                          <input
                            id="name"
                            aria-invalid={Boolean(errors.name)}
                            className={controlClass(modernControlClass, errors.name)}
                            value={form.name}
                            onChange={(e) => setField("name", e.target.value)}
                          />
                        </FormField>
                        <FormField
                          id="company"
                          label="Company"
                          icon={Building2}
                          required
                          error={errors.company}
                        >
                          <input
                            id="company"
                            aria-invalid={Boolean(errors.company)}
                            className={controlClass(modernControlClass, errors.company)}
                            value={form.company}
                            onChange={(e) => setField("company", e.target.value)}
                          />
                        </FormField>
                        <FormField id="email" label="Email" icon={Mail} required error={errors.email}>
                          <input
                            id="email"
                            type="email"
                            aria-invalid={Boolean(errors.email)}
                            className={controlClass(modernControlClass, errors.email)}
                            value={form.email}
                            onChange={(e) => setField("email", e.target.value)}
                          />
                        </FormField>
                        <FormField id="phone" label="Phone" icon={Phone} required error={errors.phone}>
                          <input
                            id="phone"
                            type="tel"
                            inputMode="tel"
                            autoComplete="tel"
                            aria-invalid={Boolean(errors.phone)}
                            className={controlClass(modernControlClass, errors.phone)}
                            value={form.phone}
                            onChange={(e) => setField("phone", sanitizePhoneInput(e.target.value))}
                          />
                        </FormField>
                      </div>
                    ) : null}

                    {step === 3 ? (
                      <div className="w-full space-y-4">
                        <div className="grid w-full gap-4 sm:grid-cols-2">
                          <FormField
                            id="date"
                            label="Preferred date"
                            icon={CalendarDays}
                            required
                            error={errors.preferredDate}
                          >
                            <input
                              id="date"
                              type="date"
                              aria-invalid={Boolean(errors.preferredDate)}
                              className={controlClass(modernControlClass, errors.preferredDate)}
                              value={form.preferredDate}
                              onChange={(e) => setField("preferredDate", e.target.value)}
                            />
                          </FormField>
                          <FormField
                            id="time"
                            label="Preferred time"
                            icon={Clock3}
                            required
                            error={errors.preferredTime}
                          >
                            <input
                              id="time"
                              type="time"
                              aria-invalid={Boolean(errors.preferredTime)}
                              className={controlClass(modernControlClass, errors.preferredTime)}
                              value={form.preferredTime}
                              onChange={(e) => setField("preferredTime", e.target.value)}
                            />
                          </FormField>
                        </div>
                        <FormField
                          id="notes"
                          label="Notes (optional)"
                          icon={NotebookPen}
                          error={errors.notes}
                        >
                          <textarea
                            id="notes"
                            rows={4}
                            aria-invalid={Boolean(errors.notes)}
                            className={controlClass(modernTextareaClass, errors.notes)}
                            value={form.notes}
                            onChange={(e) => setField("notes", e.target.value)}
                          />
                        </FormField>
                      </div>
                    ) : null}
                  </div>

                  <div className="flex w-full flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      disabled={step === 1 || submitting}
                      onClick={() => {
                        setErrors({});
                        setStep((s) => Math.max(1, s - 1));
                      }}
                      className="w-full sm:w-auto"
                    >
                      Back
                    </Button>
                    <Button type="submit" disabled={submitting} size="lg" className="w-full sm:w-auto">
                      {step < 3 ? "Continue" : submitting ? "Submitting…" : "Submit request"}
                    </Button>
                  </div>
                </ModernFormCard>
              </form>
            )}
          </div>
        </ModernFormSplit>
      </SectionShell>
    </CompanyLongForm>
  );
}
