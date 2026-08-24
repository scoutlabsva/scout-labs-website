"use client";

import { useRef, useState } from "react";
import { assessmentForm } from "@/lib/content";
import { getAttribution, trackEvent } from "@/lib/analytics";

type Step1 = {
  improveFocus: string;
  businessArea: string;
  teamSize: string;
  frustration: string;
};

type Step2 = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  smsConsent: boolean;
  preferredNextStep: string;
  additionalContext: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialStep1: Step1 = { improveFocus: "", businessArea: "", teamSize: "", frustration: "" };
const initialStep2: Step2 = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  smsConsent: false,
  preferredNextStep: "",
  additionalContext: "",
};

export function AssessmentForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const [step, setStep] = useState<1 | 2>(1);
  const [step1, setStep1] = useState<Step1>(initialStep1);
  const [step2, setStep2] = useState<Step2>(initialStep2);
  const [step1Errors, setStep1Errors] = useState<Partial<Record<keyof Step1, string>>>({});
  const [step2Errors, setStep2Errors] = useState<Partial<Record<keyof Step2, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const hasStartedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  function scrollToTop() {
    requestAnimationFrame(() => {
      containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function markStarted() {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;
    trackEvent("assessment_started");
  }

  function updateStep1<K extends keyof Step1>(key: K, value: Step1[K]) {
    markStarted();
    setStep1((prev) => ({ ...prev, [key]: value }));
    setStep1Errors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  }

  function updateStep2<K extends keyof Step2>(key: K, value: Step2[K]) {
    markStarted();
    setStep2((prev) => ({ ...prev, [key]: value }));
    setStep2Errors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  }

  function validateStep1(): boolean {
    const errors: Partial<Record<keyof Step1, string>> = {};
    if (!step1.improveFocus) errors.improveFocus = "Please choose one.";
    if (!step1.businessArea) errors.businessArea = "Please choose one.";
    if (!step1.teamSize) errors.teamSize = "Please choose one.";
    setStep1Errors(errors);
    const valid = Object.keys(errors).length === 0;
    if (!valid) trackEvent("assessment_error", "validation_error");
    return valid;
  }

  function validateStep2(): boolean {
    const errors: Partial<Record<keyof Step2, string>> = {};
    if (!step2.name.trim()) errors.name = "Please enter your name.";
    if (!step2.email.trim()) errors.email = "Please enter your email.";
    else if (!EMAIL_PATTERN.test(step2.email.trim())) errors.email = "Please enter a valid email address.";
    if (step2.smsConsent && !step2.phone.trim()) {
      errors.phone = assessmentForm.step2.smsConsent.phoneRequiredError;
    }
    if (!step2.preferredNextStep) errors.preferredNextStep = "Please choose one.";
    setStep2Errors(errors);
    const valid = Object.keys(errors).length === 0;
    if (!valid) trackEvent("assessment_error", "validation_error");
    return valid;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (step === 1) {
      if (!validateStep1()) return;
      trackEvent("assessment_step_completed", "step_1");
      setStep(2);
      scrollToTop();
      return;
    }

    if (!validateStep2()) return;

    setStatus("submitting");
    const attribution = getAttribution();

    try {
      const response = await fetch("/api/assessment", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          improveFocus: step1.improveFocus,
          businessArea: step1.businessArea,
          teamSize: step1.teamSize,
          frustration: step1.frustration,
          name: step2.name,
          businessName: step2.businessName,
          email: step2.email,
          phone: step2.phone,
          smsConsent: step2.smsConsent,
          preferredNextStep: step2.preferredNextStep,
          additionalContext: step2.additionalContext,
          utmSource: attribution.utmSource,
          utmMedium: attribution.utmMedium,
          utmCampaign: attribution.utmCampaign,
          utmContent: attribution.utmContent,
          utmTerm: attribution.utmTerm,
          referrerHostname: attribution.referrerHostname,
          landingPathname: attribution.landingPathname,
        }),
      });

      const data = (await response.json().catch(() => null)) as { success?: boolean } | null;

      if (!response.ok || !data?.success) {
        setStatus("error");
        trackEvent("assessment_error", "server_error");
        return;
      }

      setStatus("success");
      trackEvent("assessment_submitted", step2.preferredNextStep);
      onSubmitted?.();
    } catch {
      setStatus("error");
      trackEvent("assessment_error", "network_error");
    }
  }

  return (
    <div ref={containerRef}>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="rounded-lg border border-border bg-background p-6 shadow-soft"
      >
        <p className="eyebrow">
          Step {step} of 2 — {step === 1 ? assessmentForm.step1.heading : assessmentForm.step2.heading}
        </p>

        <div className="mt-5 flex flex-col gap-5">
          {step === 1 ? (
            <>
              <ChoiceGroup
                legend={assessmentForm.step1.improveFocus.question}
                name="improveFocus"
                options={assessmentForm.step1.improveFocus.options}
                value={step1.improveFocus}
                onChange={(v) => updateStep1("improveFocus", v)}
                error={step1Errors.improveFocus}
              />
              <ChoiceGroup
                legend={assessmentForm.step1.businessArea.question}
                name="businessArea"
                options={assessmentForm.step1.businessArea.options}
                value={step1.businessArea}
                onChange={(v) => updateStep1("businessArea", v)}
                error={step1Errors.businessArea}
              />
              <ChoiceGroup
                legend={assessmentForm.step1.teamSize.question}
                name="teamSize"
                options={assessmentForm.step1.teamSize.options}
                value={step1.teamSize}
                onChange={(v) => updateStep1("teamSize", v)}
                error={step1Errors.teamSize}
              />
              <div>
                <label htmlFor="frustration" className="text-sm font-medium text-foreground">
                  {assessmentForm.step1.frustration.question}{" "}
                  <span className="font-normal text-muted">({assessmentForm.step1.frustration.helper})</span>
                </label>
                <textarea
                  id="frustration"
                  name="frustration"
                  rows={3}
                  maxLength={1000}
                  value={step1.frustration}
                  onChange={(e) => updateStep1("frustration", e.target.value)}
                  className="mt-1.5 w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                />
              </div>
            </>
          ) : (
            <>
              <TextField
                label="Name"
                name="name"
                value={step2.name}
                onChange={(v) => updateStep2("name", v)}
                error={step2Errors.name}
                required
                autoComplete="name"
              />
              <TextField
                label="Business name"
                name="businessName"
                value={step2.businessName}
                onChange={(v) => updateStep2("businessName", v)}
                autoComplete="organization"
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={step2.email}
                onChange={(v) => updateStep2("email", v)}
                error={step2Errors.email}
                required
                autoComplete="email"
              />
              <TextField
                label="Phone"
                name="phone"
                type="tel"
                value={step2.phone}
                onChange={(v) => updateStep2("phone", v)}
                error={step2Errors.phone}
                autoComplete="tel"
              />
              <label className="flex items-start gap-2.5 text-sm text-muted">
                <input
                  type="checkbox"
                  name="smsConsent"
                  checked={step2.smsConsent}
                  onChange={(e) => updateStep2("smsConsent", e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-accent outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                />
                <span>
                  {assessmentForm.step2.smsConsent.label} See our{" "}
                  <a href="/terms" className="nav-link">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="nav-link">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
              <ChoiceGroup
                legend={assessmentForm.step2.preferredNextStep.question}
                name="preferredNextStep"
                options={assessmentForm.step2.preferredNextStep.options}
                value={step2.preferredNextStep}
                onChange={(v) => updateStep2("preferredNextStep", v)}
                error={step2Errors.preferredNextStep}
              />
              <div>
                <label htmlFor="additionalContext" className="text-sm font-medium text-foreground">
                  {assessmentForm.step2.additionalContext.question}
                </label>
                <p className="mt-1 text-sm text-muted">{assessmentForm.step2.additionalContext.helper}</p>
                <textarea
                  id="additionalContext"
                  name="additionalContext"
                  rows={3}
                  maxLength={1500}
                  placeholder={assessmentForm.step2.additionalContext.placeholder}
                  value={step2.additionalContext}
                  onChange={(e) => updateStep2("additionalContext", e.target.value)}
                  className="mt-1.5 w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                />
              </div>
            </>
          )}
        </div>

        {status === "error" && (
          <p className="mt-4 text-sm text-warm" role="alert">
            {assessmentForm.errorBody}
          </p>
        )}

        <div className="mt-6 flex items-center gap-4">
          {step === 2 && (
            <button type="button" onClick={() => setStep(1)} className="btn btn-sm btn-secondary">
              {assessmentForm.backLabel}
            </button>
          )}
          <button type="submit" disabled={status === "submitting"} className="btn btn-sm btn-primary disabled:opacity-60">
            {step === 1
              ? assessmentForm.nextLabel
              : status === "submitting"
                ? assessmentForm.submittingLabel
                : assessmentForm.submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
}

function ChoiceGroup({
  legend,
  name,
  options,
  value,
  onChange,
  error,
}: {
  legend: string;
  name: string;
  options: ReadonlyArray<{ value: string; label: string }>;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-foreground">{legend}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => {
          const checked = option.value === value;
          return (
            <label
              key={option.value}
              className={`cursor-pointer rounded-full border px-3 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-background ${
                checked
                  ? "border-accent bg-accent-subtle text-accent"
                  : "border-border bg-background text-muted hover:border-border-strong"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={checked}
                onChange={() => onChange(option.value)}
                className="sr-only"
              />
              {option.label}
            </label>
          );
        })}
      </div>
      {error && <p className="mt-1.5 text-sm text-warm">{error}</p>}
    </fieldset>
  );
}

function TextField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
        {!required && <span className="font-normal text-muted"> (optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm text-warm">
          {error}
        </p>
      )}
    </div>
  );
}
