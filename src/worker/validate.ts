const HOSTNAME_PATTERN = /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?(\.[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** Bounded string: trims, caps length, and rejects non-string input. Returns "" on any violation. */
export function cleanString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  return trimmed.length <= maxLength ? trimmed : "";
}

/** Same as cleanString, but truncates instead of rejecting — for free-text fields where partial capture beats dropping the field. */
export function truncateString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

/** A bare hostname only — no scheme, no path, no port, no query string. */
export function cleanHostname(value: unknown): string {
  const candidate = cleanString(value, 253);
  if (!candidate || !HOSTNAME_PATTERN.test(candidate)) return "";
  return candidate.toLowerCase();
}

/** A same-site pathname only — must start with "/", no protocol-relative or absolute URLs. */
export function cleanPathname(value: unknown): string {
  const candidate = cleanString(value, 200);
  if (!candidate.startsWith("/") || candidate.startsWith("//") || candidate.includes("://")) return "";
  return candidate;
}

export function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && value.length <= 320 && EMAIL_PATTERN.test(value);
}

export function isValidSessionId(value: unknown): value is string {
  return typeof value === "string" && UUID_PATTERN.test(value);
}

export function isOneOf<T extends string>(value: unknown, allowed: readonly T[]): value is T {
  return typeof value === "string" && (allowed as readonly string[]).includes(value);
}
