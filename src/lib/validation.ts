import { cn } from "@/lib/utils";

export type FieldErrors<T extends string = string> = Partial<Record<T, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Allows +, spaces, dashes, parentheses; requires 8–15 digits. */
const PHONE_RE = /^\+?[\d\s().-]{8,20}$/;

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
  if (!EMAIL_RE.test(value.trim())) return "Enter a valid email address";
  return undefined;
}

export function phone(value: string, label = "Phone"): string | undefined {
  const empty = required(value, label);
  if (empty) return empty;
  const digits = value.replace(/\D/g, "");
  if (!PHONE_RE.test(value.trim()) || digits.length < 8 || digits.length > 15) {
    return "Enter a valid phone number";
  }
  return undefined;
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
