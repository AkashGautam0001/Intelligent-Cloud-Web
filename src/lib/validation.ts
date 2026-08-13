import { cn } from "@/lib/utils";

export type FieldErrors<T extends string = string> = Partial<Record<T, string>>;

/** Requires local@domain.tld with a real-looking TLD. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** Optional +, digits, spaces, dashes, parentheses only. */
const PHONE_CHARS_RE = /^\+?[\d\s().-]+$/;

export function required(value: string, label = "This field"): string | undefined {
  if (!value.trim()) return `${label} is required`;
  return undefined;
}

export function minLength(value: string, min: number, label = "This field"): string | undefined {
  const empty = required(value, label);
  if (empty) return empty;
  if (value.trim().length < min) return `${label} must be at least ${min} characters`;
  return undefined;
}

export function maxLength(value: string, max: number, label = "This field"): string | undefined {
  if (value.trim().length > max) return `${label} must be at most ${max} characters`;
  return undefined;
}

export function email(value: string, label = "Email"): string | undefined {
  const empty = required(value, label);
  if (empty) return empty;
  const trimmed = value.trim();
  if (!EMAIL_RE.test(trimmed) || trimmed.includes("..")) {
    return "Enter a valid email address";
  }
  return undefined;
}

/** Strip letters / invalid symbols so phone fields only keep number-like chars. */
export function sanitizePhoneInput(value: string): string {
  const cleaned = value.replace(/[^\d+\s().-]/g, "");
  // Allow a single leading +; drop any later +
  const plus = cleaned.startsWith("+") ? "+" : "";
  const rest = cleaned.replace(/\+/g, "");
  return plus + rest;
}

export function phone(value: string, label = "Phone"): string | undefined {
  const empty = required(value, label);
  if (empty) return empty;
  const trimmed = value.trim();
  const digits = trimmed.replace(/\D/g, "");
  if (!PHONE_CHARS_RE.test(trimmed) || digits.length < 8 || digits.length > 15) {
    return "Enter a valid phone number (digits only, 8–15 digits)";
  }
  return undefined;
}

export function optionalPhone(value: string, label = "Phone"): string | undefined {
  if (!value.trim()) return undefined;
  return phone(value, label);
}

export function optionalMax(value: string, max: number, label = "This field"): string | undefined {
  if (!value.trim()) return undefined;
  return maxLength(value, max, label);
}

/** Prefer date not in the past (local calendar day). */
export function futureOrTodayDate(value: string, label = "Date"): string | undefined {
  const empty = required(value, label);
  if (empty) return empty;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const picked = new Date(`${value}T00:00:00`);
  if (Number.isNaN(picked.getTime())) return "Enter a valid date";
  if (picked < today) return "Choose today or a future date";
  return undefined;
}

export function firstError<T extends string>(errors: FieldErrors<T>): string | undefined {
  return Object.values(errors).find((msg): msg is string => Boolean(msg));
}

export function hasErrors(errors: FieldErrors): boolean {
  return Object.values(errors).some(Boolean);
}

export const controlErrorClass =
  "border-danger focus-visible:border-danger focus-visible:ring-danger/25";

export function controlClass(base: string, error?: string) {
  return cn(base, error && controlErrorClass);
}
