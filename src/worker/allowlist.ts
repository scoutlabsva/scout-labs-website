/**
 * Strict allowlist for the anonymous event stream. Anything not listed here
 * — event name, value, or pathname — is rejected outright. This is the
 * actual security/privacy boundary: the client is not trusted.
 */
export const EVENT_VALUES: Record<string, readonly string[]> = {
  assessment_started: [""],
  assessment_step_completed: ["step_1", "step_2"],
  assessment_submitted: ["initial_recommendation", "schedule_conversation", "still_exploring"],
  assessment_error: ["validation_error", "network_error", "server_error"],
  phone_clicked: [""],
  email_clicked: [""],
  calendar_opened: [""],
  share_clicked: ["footer", "mobile_menu"],
  primary_cta_clicked: ["header", "hero"],
  secondary_cta_clicked: ["hero"],
};

export const ALLOWED_PATHNAMES = new Set(["/"]);
export const DEVICE_CATEGORIES = new Set(["mobile", "tablet", "desktop"]);

export const IMPROVE_FOCUS_VALUES = [
  "repetitive_admin",
  "handoffs_followup",
  "connect_tools",
  "specific_ai_use",
  "understand_options",
  "something_else",
] as const;

export const BUSINESS_AREA_VALUES = [
  "customer_intake",
  "scheduling",
  "service_delivery",
  "job_project_management",
  "invoicing_payment",
  "customer_communication",
  "reporting",
  "another_area",
] as const;

export const TEAM_SIZE_VALUES = [
  "just_me",
  "2_5",
  "6_15",
  "16_50",
  "more_than_50",
  "prefer_not_to_say",
] as const;

export const PREFERRED_NEXT_STEP_VALUES = [
  "initial_recommendation",
  "schedule_conversation",
  "still_exploring",
] as const;
